var getUser = (id, callback) => {
	var user = {
		id: 31,
		name: 'John'
	};

	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(31, (userObj) => {
	console.log(userObj);
});