const mongoose = require('mongoose');

const memSchema = new mongoose.Schema ({
   
})

const memCollection = mongoose.model('Memorabilia', memSchema);

module.exports = memCollection;