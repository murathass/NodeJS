var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbrelation');

var postSchema = mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model('Post',postSchema);

var userSchema = mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model('User',userSchema);

var newUser = new User({
    email: 'fehmi23@gmail.com',
    name: 'Fehmi Cengiz'
});

var newPost = new Post({
    title:    'Generator',
    content:  'I am most completed saller in world'
});

newUser.save(function(err,user){
    if(err){
        console.log('Error Save');
    }else{
        console.log('Save '+ user);
    }
});

newPost.save(function(err,post){
    if(err){
        console.log('Error Save');
    }else{
        console.log('Save '+ post);
    }
});

newUser.posts.push(newPost);