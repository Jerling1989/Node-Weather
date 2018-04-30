// STORE DEPENDENCIES IN VARIABLES
const yargs = require('yargs');
const axios = require('axios');


// STRUCTURE USER COMMANDS
const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA4_k5Tm12dl2-g-JOUP2YQuDUD1GynHaI`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address.');
	}

	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/3444238370cfa779e20ad5c7fc8a3b2c/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);

}).then((response) => {
	var temperature = response.data.currently.temperature;
	var feelsLike = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}, it feels like ${feelsLike}.`);

}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers.');
	}	else {
		console.log(e.message);
	}
});


