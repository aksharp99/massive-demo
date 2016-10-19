var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');




var massiveServer = massive.connectSync({
  connectionString: "postgres://aksharpatel:@localhost/massive_demo"
});

var app = express();

app.use(bodyParser.json());

app.set('db', massiveServer);

var db = app.get('db');
//
// db.get_all_injuries(function(err, injuries) {
//   console.log(injuries);
// })
//
// db.get_all_incidents(function(err, incidents) {
//   console.log(incidents);
// })
var port = 3000;

app.get('/incidents', function(req, res) {
  db.get_all_incidents([req.query.state],function(err, incidents) {
    res.send(incidents)
  });
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
