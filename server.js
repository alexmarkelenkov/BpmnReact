const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log(req.body);
    console.log(req.header);
    res.sendFile('index.html', {root: __dirname });
});

const server = app.listen(8080, function () {
   console.log('running');
});