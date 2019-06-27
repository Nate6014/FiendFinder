// Require express
var express=require('express');

// Express server
var app=express();

// port 8080
var PORT=8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start listening
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
