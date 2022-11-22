const mongoose = require('mongoose');

const conSchema = new mongoose.Schema ({
    img: String,
    name: String,
    date: String,
    location: String,
    links: [String, String, String]
})

const conCollection = mongoose.model('Conventions', conSchema);

module.exports = conCollection;