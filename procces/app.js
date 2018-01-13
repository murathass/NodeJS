var express = require('express');
var http = express();

var server = http.listen('3000',function(){
    console.log('server çalısıyor: '+ server.address().address+' port:'+server.address().port);
});


http.get("/",function(req,res){
    res.send("Merhaba bu bir express örnegidir.");
});

http.get("/test",function(req,res){
    res.send('Merhaba bu bir band kaydıdır.');
});