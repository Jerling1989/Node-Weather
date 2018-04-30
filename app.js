const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyA4_k5Tm12dl2-g-JOUP2YQuDUD1GynHaI',
	json: true
}, (error, response, body) => {
	console.log(body);
});