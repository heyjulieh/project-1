// SERVER-SIDE JAVASCRIPT
//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
var db = require('./models')
// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/**************
 * MIDDLEWARE *
 **************/
 // custom middleware to console.log some helpful information
 //   in terminal every time we get a request
 function logRequestInfo(req, res, next){
   console.log(`\nRECEIVED REQUEST : ${req.method} ${req.url}`);
   console.log('query params:', req.query);
   console.log('body:', req.body);
   // request url parameters haven't been decided yet
   //  so we'll have to log them inside any routes where
   //  we want to use them
   next();
 }

 app.use(logRequestInfo);

/**********
 * ROUTES *
 **********/
/*
 * HTML Endpoints
 */
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/brand', function homepage (req, res) {
  res.sendFile(__dirname + '/views/brand.html');
});

app.get('/source', function homepage (req, res) {
  res.sendFile(__dirname + '/views/source.html');
});
app.get('/about', function homepage (req, res) {
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/contact', function homepage (req, res) {
  res.sendFile(__dirname + '/views/contact.html');
});
/*
 * JSON API Endpoints
 */

// show index
app.get('/api', showIndex);
  function showIndex(req,res){
    console.log('this works.')
    res.send('nothing here yet.')
  }
// show all shoes on api/shoes
app.get('/api/shoes', function(req,res) {
    console.log('this works.')
    db.Shoe.find({}, function(err, allShoes){
      res.json(allShoes);
    });
});

// show all shoes on api/source
app.get('/api/source', function(req,res) {
    console.log('this works.')
    db.Shoe.find({}, function(err, allShoes){
      res.json(allShoes);
  });
});

// show all brands
app.get('/api/brands', function(req,res) {
    console.log('this works.')
    // get all books
    db.Brand.find({}, function(err, allBrands){
      res.json(allBrands);
    });
});

// show specific shoe
app.get('/api/shoes/:shoeId', showSpecificShoe);
  function showSpecificShoe(req,res) {
  db.Shoe.findById(req.params.shoeId, function(err, foundShoe) {
    if(err) { throw err; }
    res.json(foundShoe);
  });
}

// show specific shoe from Source
app.get('/api/source/:shoeId', showSpecificSource);
  function showSpecificSource(req,res) {
  db.Shoe.findById(req.params.shoeId, function(err, foundSource) {
    if(err) { throw err; }
    res.json(foundSource);
  });
}


// post and create a new shoe on source page
app.post('/api/source', createShoe);
  function createShoe(req, res) {
  db.Shoe.create(req.body, function(err, shoe) {
    if (err) { console.log('error', err); }
    console.log(shoe);
    res.json(shoe);
  });
}


// delete shoe on source

app.delete('/api/source/:shoeId', deleteShoe);
  function deleteShoe(req,res){
    db.Shoe.findOneAndRemove({ _id: req.params.shoeId}, function(err, foundShoe){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundShoe);
    console.log('shoe deleted!');
  });
  }


// update a shoe on source
app.put('/api/source/:shoeId', updateShoe);
  function updateShoe(req, res) {
    console.log('updating with data', req.body);
      db.Shoe.findById(req.params.shoeId, function(err, foundShoe) {
        if(err) { console.log('shoes.update error', err); }
          foundShoe.brand = req.body.brand;
          foundShoe.name = req.body.name;
          foundShoe.colorway = req.body.colorway;
          foundShoe.releaseDate = req.body.releaseDate;
          foundShoe.rating = req.body.rating;
          foundShoe.editor = req.body.editor;
          foundShoe.save(function(err, savedShoe) {
            if(err) { console.log('the shoe was not saved'); }
            res.json(savedShoe);
      });
    });
  }

  app.listen(process.env.PORT || 5000, function () {
    console.log('Listening at http://localhost:5000/');
  });
  
