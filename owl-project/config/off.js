module.exports = {

	ensureAuthenticated: function(req,res,next){

		if(req.isAuthenticated()){
			return next()
		}

		req.flash('error_msg')
		res.redirect('/user/login')
		
	}
}