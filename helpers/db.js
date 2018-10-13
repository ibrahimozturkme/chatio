const mongoose	= require('mongoose')

module.exports	= () => {
	mongoose.connect(process.env.DB_STRING, {
		useCreateIndex		: 1,
		useNewUrlParser	: 1
	})
	
	mongoose.connection.on('open', () => {
		console.log('[MongoDB] Connected!')
	})
	
	mongoose.connection.on('error', (err) => {
		console.log('[MongoDB] Error: ' + err)
	})
}