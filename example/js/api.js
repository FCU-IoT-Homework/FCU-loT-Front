
var request = require('superagent');
var base = 'http://140.134.26.72/IoT/Hardware/API';
module.exports = {

	get : function(temp, callback){
		request
			.get(base + temp)
			.accept('application/json')
			.end(function(err, res){
				// console.debug('apiGet: res', res);
				// console.debug('apiGet: res.body', res.body);
				// console.debug('apiGet: res.text', res.text);
				if(err){
					console.error('Error in Generic.jsx: ', err);
					return err;
				}
				return callback(res);
			});
	},
};
