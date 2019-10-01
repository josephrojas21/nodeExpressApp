const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({ 
    title: {type: String, required: true},
    description: { type: String, required: true},
    date: { type: Date, required: true},
    img: {type: String},
    idUser: {type: String, required: true}
});

module.exports = mongoose.model('Post', PostSchema);