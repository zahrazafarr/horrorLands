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
const memSeed = require('./models/memSeed.js')
const musSeed = require('./models/muSeed.js')
const movSeed = require('./models/movSeed.js')


//-------- DATA ------------------------------------------------------

const Email = require('./models/emails.js')
const Conventions = require('./models/conventions.js')
const Articles = require('./models/articles.js');
const Music = require('./models/music.js')
const Memorabilia = require('./models/memorabilia.js');
const Movies = require('./models/movies.js')



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
    Movies.find({}, (err, allMovs) => {
        res.render('movies.ejs', {
            movs: allMovs
        })
    })
})

app.get('/conventions', (req, res) => {
    Conventions.find({}, (err, allCons) => {
        res.render('conventions.ejs', {
            cons: allCons
        })
    })
})

app.get('/memorabilia', (req, res) => {
    Memorabilia.find({}, (err, allMem) => {
        res.render('memorabilia.ejs', {
            mems: allMem
        })
    })
})

app.get('/music', (req, res) => {
    Music.find({}, (err, allSongs) => {
        res.render('music.ejs', {
            tube: allSongs
        })
    })
})



// EDIT PAGES -----------------------------------------------------

app.get('/conventions/:id/edit', (req, res) => {
    Conventions.findById(req.params.id, (err, editCon) => {
        res.render('editCon.ejs', {
            edit: editCon
        })
    })
})

app.get('/memorabilia/:id/edit', (req, res) => {
    Memorabilia.findById(req.params.id, (err, editMem) => {
        res.render('editMem.ejs', {
            item: editMem
        })
    })
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

app.get('/memorabilia/:id', (req, res) => {
    Memorabilia.findById(req.params.id, (err, goToMem) => {
         res.render('showMem.ejs', {
             mem: goToMem
         })
    })
})


// POST ROUTES --------------------------------------------------

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

app.post('/music', (req, res) => {
    Music.create(req.body, (err, addSong) => {
        res.redirect('/music')
    })
})

app.post('/memorabilia/', (req, res) => {
    if (req.body.canBuy === 'on') {
        req.body.canBuy = true;
    } else {
        req.body.canBuy = false
    }  
    Memorabilia.create(req.body, (error, fixMem) => {
        res.redirect('/memorabilia');
    })    
})


// PUT ROUTES ---------------------------------------------------

app.put('/conventions/:id', (req, res) => {
    Conventions.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, upDated) => {
        res.redirect('/conventions')
    })
})

app.put('/music/:id', (req, res) => {
    Music.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, upDated) => {
        res.redirect('/music')
    })
})


app.put('/memorabilia/:id', (req, res) => {
    if(req.body.canBuy === 'on') {
        req.body.canBuy = true;
    } else {
        req.body.canBuy = false;
    }
    Memorabilia.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedItem) => {
         res.redirect(`/memorabilia/${req.params.id}`);
     });
});



// DELETE ROUTES ---------------------------------------------------

app.delete('/conventions/:id/', (req, res) => {
    Conventions.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/conventions')
    })
})

app.delete('/music/:id/', (req, res) => {
    Music.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/music')
    })
})





// SEED DATA -----------------------------------------------------

// Conventions.create(conSeed, (error, conCreated) => {
//     console.log('done!')
// })

// Articles.create(artSeed, (error, artCreated) => {
//     console.log('done!')
// })

// Music.create(musSeed, (error, musCreated) => {
//     console.log('done!')
// })

// Movies.create(movSeed, (error, movCreated) => {
//   console.log('done!')
// })

// Memorabilia.create(memSeed, (error, memCreated) => {
//     console.log('done!')
// })


// servers --------------------------------------------------------

app.listen(3000, () => {
    console.log("listening")
})

mongoose.connect('mongodb://localhost:27017/horrorland', () => {
  console.log('mongo bongo')
})