const express = require('express');
const app = express();
const pg = require('pg');
const conString = "postgres://postgres:1234@localhost:5432/diagrams";


const client = new pg.Client(conString);
client.connect();


app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname });
});



app.post('/new', function (req, res) {

    req.rawBody = '';
    req.setEncoding('utf8');

    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });

    req.on('end', function() {
        console.log(req.rawBody);
        let query = client.query("INSERT INTO list(xml) values ($1) RETURNING id", [req.rawBody])
            .then(result => {
                console.log(req.rawBody);
                res.send(result.rows[0].xml);
            })
            .catch(e => console.error(e.stack));
    });


});

app.get('/all', (req, res) => {
    let query = client.query("SELECT * FROM list")
        .then(result => res.send(result.rows))
        .catch(e => console.error(e.stack));
});

app.get('/new/:id', (req,res) => {
    let query = client.query("SELECT * FROM list WHERE id=($1)", [req.params.id])
        .then(result => res.send(result.rows[0].xml))
        .catch(e => console.error(e.stack));
});


const server = app.listen(8080, function () {
   console.log('running....');
});