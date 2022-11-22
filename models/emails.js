const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema ({
    email: String
})

const emailCollection = mongoose.model('Email', emailSchema);

module.exports = emailCollection;