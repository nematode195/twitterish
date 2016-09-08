var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//})
//); 
//app.use(express.json());       // to support JSON-encoded bodies

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/foo', function (req, res) {
    console.log("in foo");
	res.send('yo');
});



app.post('/tweet', function (req, res) {
    
	var name = req.body.date,
        color = req.body.author;
	res.send('post' + color);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


//initDB(db);



//db.close();