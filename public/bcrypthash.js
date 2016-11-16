var bcrypt = require('bcrypt');

const saltRounds = 10;
const userPassword = "Romain";
bcrypt.genSalt(saltRounds, function(err,sel){
	bcrypt.hash(userPassword, saltRounds, function(err,hash){
		console.log(hash);
		if(err){
			console.log(err);
		}
	});
});