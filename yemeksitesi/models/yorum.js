var moongoose = require('mongoose');

var yorumSchema = moongoose.Schema(
    {
        author: String,
        text: String
    }
);

module.exports = moongoose.model('comment',yorumSchema);