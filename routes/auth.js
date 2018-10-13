const express			= require('express')
const router			= express.Router()
const passportGithub	= require('../auth/github')

router.get('/github', passportGithub.authenticate('github', {
	scope	: ['user public_repo']
}))

router.get('/github/callback', passportGithub.authenticate('github', { failureRedirect : '/error'}), (req, res) => {
	res.redirect('/chat')
})

module.exports	= router