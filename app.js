'use strict';
//importing express
var express = require('express');
//saving express into app variable
var app = express();
//assigning port
var port = process.env.PORT || 3000; //process.env.PORT will be for production

//running server
app.listen(port, function(){
    console.log("Server running on localhost:3000");
});