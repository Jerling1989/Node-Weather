// STORE DEPENDENCIES IN VARIABLES
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
		console.log(JSON.stringify(results, undefined, 2));
	}
});

