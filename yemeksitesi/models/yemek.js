var moongoose = require('mongoose');

var yemekSchema = moongoose.Schema(
    {
        adi: String,
        resim: String,
        aciklama: String,
        posts:[{
            type: moongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }]
    }
);

module.exports = moongoose.model('food',yemekSchema);