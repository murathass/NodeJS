var express = require('express');
var http = express();

http.use(express.static('public'));
http.set('view engine',"ejs");

http.get("/",function(req,res){
    res.send("Anasayfa");
});

http.get("/test",function(req,res){
    res.send("Test");
});

http.get("/test/:testno",function(req,res){
    var requestParam = req.params.testno;
    res.render("test",{requestParam});
});

http.get("/test/:testno/yorum/:yorumno",function(req,res){
    res.send("YorumNo");
});

http.get("/render",function(req,res){
    res.render('render');
});

http.get("*",function(req,res){
    res.send("SAyfa Bulunmadı");
});

var server = http.listen(3000,function(){
    console.log("Server start");
});