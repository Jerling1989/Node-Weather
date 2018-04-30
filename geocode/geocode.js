// STORE DEPENDECIES IN VARIABLE
const request = require('request');

// CREATE GEOCODEADDRESS FUNCTION
var geocodeAddress = (address, callback) => {
	// ENCODE USER INPUT FOR URL
	var encodedAddress = encodeURIComponent(address);
	// SEND REQUEST TO GOOGLE API
	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA4_k5Tm12dl2-g-JOUP2YQuDUD1GynHaI`,
		json: true
	}, (error, response, body) => {
		// IF USER CANNOT CONNECT TO GOOGLE API
		if (error) {
			callback('Unable to connect to Google servers.')
		// IF GOOGLE API CANNOT FIND ADDRESS
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address.');
		// IF GOOGLE API FINDS ADDRESS
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}

	});
};

// EXPORT FUNCTION
module.exports = {
	geocodeAddress
};