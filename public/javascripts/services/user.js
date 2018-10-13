app.factory('userFactory', ['$http', 'env', ($http, env) => {

	const getUser	= () => {
		return $http({
			url		: env.SERVICE_URI + '/getUser',
			method	: 'GET'
		})
		.then(response => {
			return response.data
		}, (err) => {
			console.error(err)
		})
	}

	return { getUser }

}])