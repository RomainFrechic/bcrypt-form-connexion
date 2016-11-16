
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var bcrypt = require('bcrypt');

var app =  express();
var passwordHash = '$2a$10$S7h7iAJEO5.ua72JibIx.e6V4ok.xqLeUDG0ArLnt1/trUSP35C7q';
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:true}));

app.post('/process_post',function(req, res){
    
    bcrypt.compare(req.body.password,passwordHash,function(err, dataOne){
    	if(dataOne && req.body.password && req.body.ajax){
    		fs.readFile('/bravo.html','utf8', function(err,data){
    			if(err){
    				console.log('erreur fs readFile');
    			}
    			res.send({err:false,message:data});
    		});
    	}
    	else if(req.body.user_name ==='Ro' && req.body.password==='Romain'){
    		res.redirect('/bravo.html');
    	}
    	else if (req.body.user_name === 'Ro') {
			res.send({err: true, message:'Bad password'});
		}
		else if (req.body.password === 'Romain') {
			res.send({err: true, message:'Bad login'});
		}
		else {
			res.send({err: true, message:'Bad password & bad login'});
		}

});
})

var server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port 
   console.log("Example app listening at http://%s:%s", host, port)

});
