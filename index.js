var express = require('express');

var app = express();


app.get('/start', function(req,res){

	res.send('started server ');
});

app.listen(process.env.PORT);