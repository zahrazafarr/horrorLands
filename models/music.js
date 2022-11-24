const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema ({
    link: String
})

const musicCollection = mongoose.model('Music', musicSchema);

module.exports = musicCollection;