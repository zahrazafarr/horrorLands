const mongoose = require('mongoose');

const movSchema = new mongoose.Schema ({
    img: String,
    title: String,
    rating: String,
})

const movCollection = mongoose.model('Movies', movSchema);

module.exports = movCollection;