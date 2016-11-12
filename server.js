'use strict';

const express = require('express');

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(8080);
console.log('Running on http://localhost:' + process.env.LOCAL_PORT);