const express = require('express');
const app = express();

var ReactDOMServer = require('react-dom/server');

app.get('/', function (req, res) {
    //var reactHtml = ReactDOMServer.renderToString(<App />);
    res.sendFile('index.html', {root: __dirname });
});

app.get('/dist/bundle.js', function(req, res) {
    console.log("js");
    res.sendFile("dist/bundle.js", {root: __dirname });
});


const server = app.listen(8080, function () {
   console.log('running....');
});