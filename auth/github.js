const passport			= require('passport')
const GithubStrategy	= require('passport-github').Strategy

// models
const User			= require('../models/users')

passport.use(
	new GithubStrategy({
		clientID		: process.env.GITHUB_CLIENT_ID,
		clientSecret	: process.env.GITHUB_CLIENT_SECRET,
		callbackURL	: process.env.GITHUB_CALLBACK_URL
	},
	(accessToken, refreshToken, profile, done) => {
		const data	= profile._json

		User.findOrCreate({
			github_id			: data.id
		}, {
			name				: data.name.split(' ')[0],
			surname			: data.name.split(' ')[1],
			profilePhotoUrl	: data.avatar_url
		}, (err, user) => {
			return done(err, user)
		})

	})
)

passport.serializeUser((user, done) => {
	done(null, user)
})

passport.deserializeUser((user, done) => {
	done(null, user)
})

module.exports	= passport