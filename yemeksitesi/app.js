var express = require('express');
var http = express();
var bodyParser = require('body-parser');
var moongoose = require('mongoose');

moongoose.connect("mongodb://localhost/yemekSitesi");
http.set('view engine','ejs');
http.use(bodyParser.urlencoded({ extended: true }))

var yemekSchema = moongoose.Schema(
    {
        adi: String,
        resim: String,
        aciklama: String
    }
);

var Yemek = moongoose.model('food',yemekSchema);

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
            res.render("yemekler",{yemekler: db});
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
    res.render("yeni");
});

http.get("/yemekler/:id",function(req,res){
    Yemek.findById(req.params.id , function(err,db){
        if(err){
            console.log(err);
        }else{
            res.render('goster',{yemek: db});
        }
    });
});

var server = http.listen(3000,function(){
    console.log('Server started on port:'+server.address().port);
});