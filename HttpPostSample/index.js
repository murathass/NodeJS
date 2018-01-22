var express = require("express");
var http = express();

var bodyParser = require("body-parser");
http.use(bodyParser.urlencoded({extended:true}));

http.set("view engine","ejs");

var sehirler = ["Mersin","Adana","Trabzon","İstanbul","İzmir","Ankara"];

http.get("/",function(req,res){
    res.render("home",{city:sehirler});
});

http.post("/sehirekle",function(req,res){
    var sehir = req.body.yenisehir;
    sehirler.push(sehir);
    res.redirect("/");
});

var server = http.listen("3000",function(){
    console.log("Server listen(port: %d)",3000);
});