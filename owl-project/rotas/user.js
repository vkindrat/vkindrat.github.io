const express = require("express");
let router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport')

const User = require('../models/User');

router.get('/login', function(req, res){

	res.render("login")
})

router.get('/register', function(req, res){

	res.render("register")
})

router.post('/register', function(req, res){

	const{name,email,password,password2} = req.body
	let errors = [];

	if(!name || !email ||!password ||!password2){
		errors.push({message:'Por favor preencha todos os campos.'})
	}

	if(password !== password2){
		errors.push({msg: "Senha incorreta."})
	}

	if(password.length < 6){
		errors.push({msg:"Sua senha necessita mais de 5 caracteres."})
	}

	if(errors.length > 0){
		res.render('register', {
			errors,
			name,
			email,
			password,
			password2
		})
	}else{
		//Validação passou
		User.findOne({email:email})
			.then(user =>{
				if(user){

					errors.push({msg:'Email ja utilizado'})
					res.render('register', {
			errors,
			name,
			email,
			password,
			password2
		})
				}else{
					const newUser = new User({
						name,
						email,
						password
					});

					bcrypt.genSalt(10, (err,salt) => bcrypt.hash(newUser.password,salt, (err,hash) =>{

						if(err) throw err;

						newUser.password = hash

						newUser.save()
						.then(user => {
							req.flash('success_msg','Conta criada com sucesso.')
							res.redirect('/user/login')
						})
						.catch(err => console.log(err));
						
					}))


				}
			})
			
	}

	})



router.post('/login', function(req,res,next){

	passport.authenticate('local', {

		successRedirect:'/',
		failureRedirect:'/user/login',
		failureFlash:true
	})(req,res,next)
})


router.get('/logout', function(req,res){
	req.logout()
	req.flash('success_msg', 'Logout efetuado com sucesso.')
	res.redirect('/user/login')
})

module.exports = router;



