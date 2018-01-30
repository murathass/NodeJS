var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbrelation2');

var postSchema =new mongoose.Schema({
    title: String,
    content: String
});

var Post1 = mongoose.model('Post',postSchema);

var userSchema =new mongoose.Schema({
    name: String,
    email: String,
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }]
});

var User = mongoose.model('User',userSchema);

Post1.create({
    title: 'title',
    content: 'content'
},function(err,post){
   User.findOne({email:'dyghs@gmail.com'},
        function(err,user){
            if(err){
                console.log(err);
            }else{
                user.posts.push(post)
                user.save(function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('Saved Post with Reference');
                    }
                });
            }
        }
    );
})

// User.create({
//     name: 'Duygu Has',
//     email: "dyghs@gmail.com"
// });




