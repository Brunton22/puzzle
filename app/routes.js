//Grabs nerd model in models/nerd.js
//var Nerd = require('./models/nerd')

module.exports = function(app) {

	//server routes
	//handle api calls
	//authentication calls etc

	//sample api route
	app.get('/api/nerds', function(req, res) {
		//user mongoose to get all nerds in database
		Nerd.find(function(err, nerds){

			if (err)
				res.send(err);

			res.json(nerds);
		});
	});

	//route to hand app.post here (app.post)
	//route to handle delete.post here (app.delete)

	//frontend routes
	//route to handle angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};