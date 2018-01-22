var express = require('express');
var http = express();
var request = require('request');

http.set('view engine','ejs');

http.get('/',function(req,res){
    res.render('search');
});

http.get('/results',function(req,res){
    console.log('Request Send');
    var query = req.query.search;
    var url = "https://api.themoviedb.org/3/search/movie?api_key=abc96a17c8822b47af35f8925a4ef57d&query="+query;
    request(url,function(err,resp,body){
        if(err){
            console.log('Request Error');
        }else{
            if(resp.statusCode == 200){
                console.log("Request Succes");
                var data = JSON.parse(body);
                console.log(data);
                res.render("result",{data: data});
            }
        }
    });
});

var server = http.listen('3000',function(){
    console.log('Server start on port('+server.address().port+'):');
});