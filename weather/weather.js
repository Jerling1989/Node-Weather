// STORE DEPENDENCIES IN VARIABLE
const request = require('request');

// CREATE GETWEATHER FUNCTION
var getWeather = (lat, lng, callback) => {
	// SEND REQUEST TO FORECAST API
	request({
		url: `https://api.darksky.net/forecast/3444238370cfa779e20ad5c7fc8a3b2c/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		// IF USER CANNOT CONNECT TO FORECAST API
		if (error) {
			callback('Unable to connect to forecast.io servers.');
		// IF FORECAST API RETURNS FORECAST
		} else if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				feelsLike: body.currently.apparentTemperature
			});
		// IF FORECAST API CANNOT FIND FORECAST
		} else {
			callback('Unable to fetch weather');
		}
	});
}

// EXPORT FUNCTION
module.exports = {
	getWeather
}

