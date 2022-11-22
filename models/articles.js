const mongoose = require('mongoose');

const artSchema = new mongoose.Schema ({
    title: String,
    img: String,
    link: String,
    description: String,
})

const artCollection = mongoose.model('Articles', artSchema);

module.exports = artCollection;