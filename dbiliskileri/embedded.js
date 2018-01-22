var moongoose = require('mongoose');
moongoose.connect("mongodb://localhost/DBiliskiler_2");

var postSchema = moongoose.Schema({
    title: String,
    content: String
});

var Post = moongoose.model("post",postSchema);

var userSchema = moongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = moongoose.model('user',userSchema);



// var user1 = new User({
//     email: 'fehmicengiz23@hotmail.com',
//     name: 'Fehmi Cengiz'
// });

// User.create(user1,function(err,db){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('insterted user data');
//     }
// });

// user1.posts.push({
//     title: 'Basketbol',
//     content: 'Oynayacağınız topun amk' 
// });

// Post.create({
//     title: 'MongoDB iliskiler',
//     content: 'MongoDB de birden çoğa iliskilerinin tasarımı yapılıyor..'
// },function(err,db){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('insterted post data');
//     }
// });