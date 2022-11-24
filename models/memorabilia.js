const mongoose = require('mongoose');

const memSchema = new mongoose.Schema ({
        img: String,
        product: String,
        price: String,
        linkToBuy: String,
        canBuy: Boolean
})

const memCollection = mongoose.model('Memorabilia', memSchema);

module.exports = memCollection;