// STORE DEPENDENCIES IN VARIABLES
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

// CALL THE GEOCODE ADDRESS FUNCTION
geocode.geocodeAddress(argv.a, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		// CALL THE GET WEATHER FUNCTION
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`It's currently ${weatherResults.temperature}, but it feels like ${weatherResults.feelsLike}.`);
			}
		}); 
	}
});



