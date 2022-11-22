const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride("_method"))

//-------- SEEDS for testing -------------------------------------------

const conSeed = require('./models/conSeed.js')



//-------- DATA ------------------------------------------------------

const Email = require('./models/emails.js')
const Conventions = require('./models/conventions.js')




// GET ROUTES ------------------------------------------------

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/articles', (req, res) => {
    res.render('articles.ejs')
})

app.get('/movies', (req, res) => {
    res.render('movies.ejs')
})

app.get('/conventions', (req, res) => {
    Conventions.find({}, (err, allCons) => {
        res.render('conventions.ejs', {
            cons: allCons
        })
    })
})

app.get('/memorabilia', (req, res) => {
    res.render('memorabilia.ejs')
})

app.get('/music', (req, res) => {
    res.render('music.ejs')
})

app.get('/conventions/:id', (req, res) => {
    Conventions.findById(req.params.id, (err, goToCon) => {
         res.render('showCon.ejs', {
             con: goToCon
         })
    })
})

// POST ROUTES ------- Q: how can i change send to "sent!"

app.post('//', (req, res) => {
    Email.create(req.body, (err, addedEmail) => {
        res.redirect('/')
    })
})











// SEED DATA --------------------------------------------

// Conventions.create(conSeed, (error, conCreated) => {
//     console.log('done!')
// })




// servers ------------------------------------------------

app.listen(3000, () => {
    console.log("hello")
})

mongoose.connect('mongodb://localhost:27017/horrorland', () => {
  console.log('can u hear me')
})