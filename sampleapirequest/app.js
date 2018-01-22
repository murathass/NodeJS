var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22istanbul%2C%20tr%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function (error, response, body) {
  if(error){
    console.log('İstek Başarısız..');
  }else{
      if(response.statusCode == 200){
          console.log('İstek Başarılı..');
          var weathers = JSON.parse(body)["query"]["results"]["channel"]["item"];
          console.log(weathers.title);
          var forecasts = weathers["forecast"];
          forecasts.forEach(function(forecast){
            console.log('code:'+forecast.code+' date:'+ forecast.date+' day:'+forecast.day+' high'+forecast.high+' low:'+forecast.low+' text:'+forecast.text);
          });
      }
  }
});