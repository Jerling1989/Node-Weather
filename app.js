// // STORE DEPENDENCIES IN VARIABLES
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// // STRUCTURE USER COMMANDS
// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// // CALL THE GEOCODE ADDRESS FUNCTION
// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });


// 3444238370cfa779e20ad5c7fc8a3b2c

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/3444238370cfa779e20ad5c7fc8a3b2c/40.7779169,-74.7922202',
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to forecast.io servers.');
	} else if (!error && response.statusCode === 200) {
		console.log(`Temperature: ${body.currently.temperature}`);
	} else {
		console.log('Unable to fetch weather');
	}

	
});