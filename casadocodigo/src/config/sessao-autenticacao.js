const passport = require('passport');
const uuid = require('uuid');
const sessao = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const UsuarioDao = require('../app/infra/usuario-dao.js');
const db = require('./database.js');
const flash = require('express-flash')


module.exports = (app) => {

passport.use(new LocalStrategy(

		{
			usernameField:'email',
			passwordField:'senha'

		},
		(email, senha, done) =>{
			const usuarioDao = new UsuarioDao(db)
			usuarioDao.buscaPorEmail(email)
				.then(usuario => {
					if(!usuario || senha != usuario.senha){
						return done(null, false, {
							message :'Login e/ou senha incorretos.'
						});
					}
					
					return done(null, usuario);
				})
				.catch(erro => done(erro,false)
				
				)
		}
	))

	passport.serializeUser((usuario, done) => {

		const usuarioSessao = {
			nome: usuario.nome_completo,
			email: usuario.email
		}

		done(null, usuarioSessao);
	});

	passport.deserializeUser((usuarioSessao, done) => {

		done(null,usuarioSessao);
	})


	app.use(sessao({
		secret:'node alura',
		genid: function(req){
			return uuid();
		},

		resave:false,
		saveUninitialized: false,
		cookie: { secure: false }
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	app.use(function(req, resp, next){

		req.passport = passport
		next();
	});


app.get('/logout', function(req, resp){
  if (req.isAuthenticated()) {
    req.logOut()
    return resp.redirect('/login') // Handle valid logout
  }

  return resp.status(401) // Handle unauthenticated response
})






};