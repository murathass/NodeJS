var express = require('express');
var http = express();
var bodyParser = require('body-parser');
var moongoose = require('mongoose');
var Yemek = require('./models/yemek');
var Yorum = require('./models/yorum');
var cookie = require('./cookie');

cookie();

moongoose.connect("mongodb://localhost/yemekSitesi");
http.set('view engine','ejs');
http.use(bodyParser.urlencoded({ extended: true }));

http.get('/',function(req,res){
    res.render('home');
});

http.get('/yemekler',function(req,res){
     Yemek.find({},function(err,db){
        if(err){
            console.log('Kayıt Getirilemedi.. '+err);
        }else{
            console.log('************************************');
            console.log(db);
            res.render("yemekler/yemekler",{yemekler: db});
        }
    });
    
});

http.post("/yemekler",function(req,res){
    var yemek={};
    yemek.adi = req.body.yemek;
    yemek.resim = req.body.resim;
    yemek.aciklama = req.body.aciklama;
    if(yemek.adi && yemek.resim && yemek.aciklama){
        Yemek.create({
            adi: yemek.adi,
            resim: yemek.resim,
            aciklama : yemek.aciklama
        },function(err,db){
            if(err){
                console.log('Kayıt Yapılamadı..');
            }else{
                console.log('Kayıt Alındı..');
            }
        });
    }
    
    res.redirect("/yemekler");
});

http.get("/yemekler/yeni",function(req,res){
    res.render("yemekler/yeni");
});

http.get("/yemekler/:id",function(req,res){
    Yemek.findById(req.params.id).populate('posts').exec(function(err,db){
        if(err){
            console.log(err);
        }else{
            res.render('yemekler/goster',{yemek: db});
        }
    });
});

http.get("/yemekler/:id/yorumlar/yeni",function(req,res){
    Yemek.findOne({'_id' :req.params.id},function(err,db){
        if(err){
            console.log(err);
        }else{
            console.log('db:'+db);
            res.render('yorumlar/yeni',{yemek: db});
        }
    });
});

http.post("/yemekler/:id/yorumlar",function(req,res){
    Yemek.findOne({ '_id' : req.params.id },function(err,bulunanYemek){
        if(err){
            console.log(err);
            res.redirect('/yemekler');
        }else{
            console.log('>>>>>  '+req.body.yorum);
            Yorum.create(req.body.yorum,function(err,yorum){
                if(err){
                    console.log(err);
                    res.redirect('/yemekler');
                }else{
                    bulunanYemek.posts.push(yorum);
                    bulunanYemek.save();
                    res.redirect('/yemekler/'+bulunanYemek._id);
                }

            });
        }
    });
});

var server = http.listen(3000,function(){
    console.log('Server started on port:'+server.address().port);
});