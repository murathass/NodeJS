var mongoose =  require('mongoose');

var Yemek    =  require('./models/yemek');
var Yorum    =  require('./models/yorum');

var data = [
    {
        adi:'Çilek',
        resim:'https://cdn.pixabay.com/photo/2016/05/16/17/59/strawberries-1396330__480.jpg',
        aciklama:'Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'
    },{
        adi:'Salata',
        resim:'https://cdn.pixabay.com/photo/2017/10/09/19/29/food-photography-2834549__480.jpg',
        aciklama:'Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'
    },{
        adi:'Kahvaltı',
        resim:'https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436__480.jpg',
        aciklama:'Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'
    },{
        adi:'Everest',
        resim:'https://cdn.pixabay.com/photo/2017/07/28/22/13/strawberries-2550024__480.jpg',
        aciklama:'Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'
    }
];

function cookieData(){
        Yemek.remove({},function(err){
            if(err){
                console.log(err);
            }else{
                data.forEach(function(degisken){
                    Yemek.create(degisken,function(err,yemek){
                        if(err){
                            console.log(err);
                        }else{
                            Yorum.create({
                                author:'Şeabettin Güzel',
                                text:'Cok güzel oldu nefis oldu harika oldu'
                            },function(err,yorum){
                                if(err){
                                    console.log(err)
                                }else{
                                    yemek.posts.push(yorum);
                                    yemek.save(function(err){
                                        if(err){
                                            console.log(err);
                                        }else{
                                            console.log('Completed');
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
            }
        }
    );
};

module.exports = cookieData;