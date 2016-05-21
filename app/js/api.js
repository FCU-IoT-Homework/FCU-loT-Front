
var request = require('superagent');
var baseFCU = 'http://140.134.26.72/IoT/Hardware/API';
var baseTS = 'https://api.thingspeak.com/channels/65175';
module.exports = {

	get : function(temp, callback){
		request
			.get(baseFCU + temp)
			.accept('application/json')
			.end(function(err, res){
				// console.debug('apiGet: res', res);
				// console.debug('apiGet: res.body', res.body);
				// console.debug('apiGet: res.text', res.text);
				if(err){
					console.error('Error in Generic.jsx: ', err);
					return err;
				}
				return callback(res.body, res.text);
			});
	},

	getTS : function(temp, callback){
		request
			.get(baseTS + temp)
			.accept('application/json')
			.end(function(err, res){
				// console.debug('apiGet: res', res);
				// console.debug('apiGet: res.body', res.body);
				// console.debug('apiGet: res.text', res.text);
				if(err){
					console.error('Error in Generic.jsx: ', err);
					return err;
				}
				return callback(res.body, res.text);
			});
	},
};
