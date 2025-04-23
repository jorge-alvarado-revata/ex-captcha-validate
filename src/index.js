'use strict'

var express = require('express')

var app = module.exports = express()

app.get('/', function(req, res){
    res.send('Hello World esta es una demo con express');
  });
  
  /* istanbul ignore next */
  if (!module.parent) {
    app.listen(3010);
    console.log('Express started on port 3010');
  }
  