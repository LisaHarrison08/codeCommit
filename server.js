const express = require('express');
const path = require('path');
const app = express();

// points to the public folder for static files
app.use(express.static('public'));

// if post request comes in html form or json
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// get request to the root url which points to the index.html page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

// localhost:3000 in browser (3000 is the port selected)
app.listen(3000);