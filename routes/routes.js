module.exports = function(app)
{
	var api = require('../controller/api.js');

	app.post('/find', api.contentIdFind);
	
}
