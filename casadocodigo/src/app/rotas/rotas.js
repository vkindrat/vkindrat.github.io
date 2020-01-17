const { check, validationResult } = require('express-validator/check');

const LivroDao = require('../infra/livroDao');
const db = require('../../config/database');

const LivroControlador = require('../controladores/controladores.js');

const livroControlador = new LivroControlador();

const BaseControlador = require('../controladores/base-controladores.js')

const baseControlador = new BaseControlador();

module.exports = (app) => {


	app.get('/', baseControlador.home());




app.get('/livros', livroControlador.lista());



app.get('/livros/form', livroControlador.formularioCadastro());



app.get('/livros/form/:id', livroControlador.formularioEdicao());



app.post('/livros', [
	check('titulo').isLength({ min: 5 }).withMessage('O título precisa conter no mínimo 5 caracteres.'),
	check('preco').isCurrency().withMessage('O preco precisa conter um valor monetário válido.')
		],
		 livroControlador.cadastra());
	



app.put('/livros', livroControlador.edita());




app.delete('/livros/:id', livroControlador.remove())

}



