// Express Js
const express = require('express');
const app = express();
let items = ['Buy Food', 'Cook Food', 'Eat Food'];

// Body parser
const bodyParser = require('body-parser');

// Setting the ejs as the view engine
app.set('view engine', 'ejs');

// Using package functions
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Listening to the port
app.listen(3000, function() {
  console.log('Server is up and running...')
})

// GET requests
app.get('/', function(req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    kindOfDay: day,
    newItem: items
  });

});

app.post('/', function(req, res) {
  item = req.body.addItem;
  // console.log(item);
  items.push(item)
  res.redirect('/');
});
