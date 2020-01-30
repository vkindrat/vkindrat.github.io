const LivroControlador = require('./controladores.js')
const templates = require('../views/template.js')

class BaseControlador{

	static rotas(){
		return{
			home: '/',
			login:'/login'
		};
	}

	home(){

		return function(req,resp){

		resp.marko(templates.base.home)
		
		}
	}

	login(){

		return function(req,resp){

		resp.marko(templates.base.login);

		}
	}

	inicializaLogin(){

	
		return function(req,resp, next){

			const passport = req.passport;

			passport.authenticate('local', function(erro, usuario, info){

				if(info){
					console.log(erro)
					return resp.marko(templates.base.login)
				}

				if(erro){

					return next(erro)
				}

				req.login(usuario,(erro) => {

					if(erro){
						
						return next(erro)
					}

					return resp.redirect(LivroControlador.rotas().lista);

				})

			})(req,resp, next)
		}
	}

}

module.exports = BaseControlador;