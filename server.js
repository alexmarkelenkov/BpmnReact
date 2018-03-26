const express = require('express');
const app = express();
const xmlparser = require('express-xml-bodyparser');
const xml = require('xml');
const pg = require('pg');
const conString = "postgres://postgres@localhost:5432/list";

const client = new pg.Client(conString);
client.connect();

var query = client.query("SELECT * FROM diagrams", (err, res) => {
    console.log(err ? err.stack : res.rows.map(row => row.id)) ;// Hello World!
    client.end();
});




app.use(xmlparser());

app.get('/', function (req, res) {
    //var reactHtml = ReactDOMServer.renderToString(<App />);
    res.sendFile('index.html', {root: __dirname });
});

app.get('/dist/bundle.js', function(req, res) {
    res.sendFile("dist/bundle.js", {root: __dirname });
});

app.post('/new', function (req, res) {
    console.log(req.headers);
    console.log(req.body);
    res.set('Content-Type', 'text/xml');
    res.send(xml(req.body));
});


const server = app.listen(8080, function () {
   console.log('running....');
});