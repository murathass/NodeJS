var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/User');

var userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    country: String,
    age: Number
});

var User = mongoose.model("User",userSchema);
// var user1 = new User({
//     name: "murat",
//     lastname: "has",
//     country: "turkey",
//     age: 24
// });

// user1.save(function(err,db){
//     if(err){
//         console.log("Birşeyler yanlış gitii....");
//     }else{
//         console.log("Yeni Bir Kullanıcı Eklendi.."+db);
//     }
// });


// User.create({
//     name: "ayse",
//     lastname: "yesil",
//     country: "turkey",
//     age: 26
// },function(err,db){
//     if(err){
//         console.log("Cannot Insert"+db);
//     }else{
//         console.log("Inserted"+db);
//     }
// });



User.remove({_id: '5a6115548158e84e76b38417'},function(err,db){
    if(err){
        console.log("Cannot delete"+db);
    }else{
        console.log("Deleted"+db);
    }
});

User.find({},function(err,db){
    console.log(db);
});