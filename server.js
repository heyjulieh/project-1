// SERVER-SIDE JAVASCRIPT
//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
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
/*
 * JSON API Endpoints
 */
// index
app.get('/api', showIndex);
  function showIndex(req,res){

  }
// show all shoes
app.get('/api/shoes', showShoes);
  function showShoes(req,res) {

  }
// show specific shoe
app.get('/api/shoes/:shoeId', showSpecificShoe);
  function showSpecificShoe(req,res) {

  }

app.post('/api/shoes', createShoe);
  function createShoe(req,res) {

  }

app.delete('/api/shoes/:shoeId', deleteShoeComment);
  function deleteShoeComment(req,res){

  }

app.put('/api/albums/:shoeId', updateShoeComment);
  function updateShoeComment(req,res) {

  }




  app.listen(process.env.PORT || 5000, function () {
    console.log('Listening at http://localhost:5000/');
  });
