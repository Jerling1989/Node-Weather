var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('Arguments must be numbers');
			} else {
				resolve(a + b);
			}
		}, 1500);
	});
};


var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hey, it worked!');
		reject('Unable to fulfill promise');
	}, 2500);
});

somePromise.then((message) => {
	console.log('Success:', message);
}, (errorMessage) => {
	console.log('Error:', errorMessage);
});