const express = require('express');
const app = express();
const xmlparser = require('express-xml-bodyparser');
const xml = require('xml');
const pg = require('pg');
const conString = "postgres://postgres@localhost:5432/list";

const client = new pg.Client(conString);
client.connect();

app.use(xmlparser());

app.get('/', function (req, res) {
    //var reactHtml = ReactDOMServer.renderToString(<App />);
    res.sendFile('index.html', {root: __dirname });
});

app.get('/dist/bundle.js', function(req, res) {
    res.sendFile("dist/bundle.js", {root: __dirname });
});


app.post('/new', function (req, res) {
    let query = client.query("INSERT INTO diagrams(diagram) values ($1) RETURNING id", [req.body])
        .then(result => console.log(result.rows[0].id))
        .catch(e => console.error(e.stack));
    //console.log(query);
    //res.redirect('/');

    //res.send(xml(req.body));
});

app.get('/all', (req, res) => {
    let query = client.query("SELECT * FROM diagrams")
        .then(result => res.send(result.rows))
        .catch(e => console.error(e.stack));
});


const server = app.listen(8080, function () {
   console.log('running....');
});