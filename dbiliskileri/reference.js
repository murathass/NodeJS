var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/DBiliskiler_2");

var postSchema = mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("post",postSchema);

var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }]
});

var User = mongoose.model('user', userSchema);

User.create({
    email: 'erva.donmez@windowslive.com',
    name: 'Erva Dönmez'
},function(err,db){
    if(err){
        console.log(err);
    }else{
        console.log('inserted user');
    } 
});

Post.create({
    title: 'Yorum2',
    content: 'İcerik2'
},function(err,post){
        User.findOne({email:'erva.donmez@windowslive.com'},function(err,user){
                user.posts.push(post);
                user.save(function(err,user){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('inserted post');
                    }
                });
                console.log('inserted post');
        });
});
