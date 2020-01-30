const LivroControlador = require('../controladores/controladores.js');

const livroControlador = new LivroControlador();

const Livro = require('../modelos/livro')

const BaseControlador = require('../controladores/controladores')

const baseControlador = new BaseControlador();



module.exports = (app) => {

const rotasLivro = LivroControlador.rotas()

app.use(rotasLivro.autenticadas, function(req, resp, next){

	if(req.isAuthenticated()){
		next()
	} else{
		resp.redirect('/login')
	};

});

app.get(rotasLivro.lista, livroControlador.lista());

app.get(rotasLivro.edita, livroControlador.formularioEdicao());

app.route(rotasLivro.cadastro)
	.get(livroControlador.formularioCadastro())
	.post(Livro.validacao(), livroControlador.cadastra())
	.put(livroControlador.edita());




app.delete(rotasLivro.remove, livroControlador.remove())

}

