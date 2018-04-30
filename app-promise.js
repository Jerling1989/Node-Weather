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

// ENCODE USER ADDRESS ARGUMENT TO BE ENCODED FOR URL
var encodedAddress = encodeURIComponent(argv.a);
// ADD ENCODED ADDREDD TO API URL
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA4_k5Tm12dl2-g-JOUP2YQuDUD1GynHaI`;

// RUN AXIOS PROMISE FOR LOCATION URL
axios.get(geocodeUrl).then((response) => {
	// IF ADDRESS CANNOT BE FOUND THROW TO ERROR SECTION
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address.');
	}
	// STORE ADDRESS LOCATAIN INFO IN VARAIABLE
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	// USE LOCATION INFO FOR WEATHER API URL
	var weatherUrl = `https://api.darksky.net/forecast/3444238370cfa779e20ad5c7fc8a3b2c/${lat},${lng}`;
	// LOG FORMATTED ADDRESS TO CONSOLE
	console.log(response.data.results[0].formatted_address);

	// RUN AXIO PROMISE FOR WEATHER URL
	return axios.get(weatherUrl);
	// RESPONSE FROM WEATHER API
}).then((response) => {
	// STORE WEATHER INFO INTO VARIABLES
	var temperature = response.data.currently.temperature;
	var feelsLike = response.data.currently.apparentTemperature;
	// LOG WEATHER INFO TO CONSOLE
	console.log(`It's currently ${temperature}, it feels like ${feelsLike}.`);

	// LOG THE PROPER ERROR IF IT EXISTS
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers.');
	}	else {
		console.log(e.message);
	}
});