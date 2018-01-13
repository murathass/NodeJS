var express = require('express');
var http = express();

http.get("/",function(req,res){
    res.send("Anasayfa");
});

http.get("/test",function(req,res){
    res.send("Test");
});

http.get("/test/:testno",function(req,res){
    var requestParam = req.params.testno;
    res.render("test.ejs",{requestParam});
});

http.get("/test/:testno/yorum/:yorumno",function(req,res){
    res.send("YorumNo");
});

http.get("/render",function(req,res){
    res.render('render.ejs');
});

http.get("*",function(req,res){
    res.send("SAyfa Bulunmadı");
});

var server = http.listen(3000,function(){
    console.log("Server start");
});