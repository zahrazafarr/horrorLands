const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride("_method"))

//-------- SEEDS for testing -------------------------------------------

const conSeed = require('./models/conSeed.js')
const artSeed = require('./models/artSeed.js')



//-------- DATA ------------------------------------------------------

const Email = require('./models/emails.js')
const Conventions = require('./models/conventions.js')
const Articles = require('./models/articles.js');




// GET ROUTES ------------------------------------------------

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/articles', (req, res) => {
    Articles.find({}, (err, allArt) => {
        res.render('articles.ejs', {
            arts: allArt
        })
    })
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



// ADD ROUTES ----------------------------------------------------

app.get('/conventions/new', (req, res) => {
    res.render('newCon.ejs')
})

app.get('/music/new', (req, res) => {
    res.render('newMus.ejs')
})



// SHOW ROUTES ---------------------------------------------------

app.get('/conventions/:id', (req, res) => {
    Conventions.findById(req.params.id, (err, goToCon) => {
         res.render('showCon.ejs', {
             con: goToCon
         })
    })
})

app.get('/articles/:id', (req, res) => {
    Articles.findById(req.params.id, (err, goToArt) => {
         res.render('showArt.ejs', {
             art: goToArt
         })
    })
})



// POST ROUTES ------- Q: how can i change send to "sent!"

app.post('//', (req, res) => {
    Email.create(req.body, (err, addedEmail) => {
        res.redirect('/')
    })
})

app.post('/conventions', (req, res) => {
    Conventions.create(req.body, (err, addCon) => {
        res.redirect('/conventions')
    })
})









// SEED DATA -----------------------------------------------------

// Conventions.create(conSeed, (error, conCreated) => {
//     console.log('done!')
// })

// Articles.create(artSeed, (error, artCreated) => {
//     console.log('done!')
// })



// servers --------------------------------------------------------

app.listen(3000, () => {
    console.log("listening")
})

mongoose.connect('mongodb://localhost:27017/horrorland', () => {
  console.log('mongo bongo')
})