const { check, validationResult } = require('express-validator/check');

class Livro{

	static validacao(){
		return [
	check('titulo').isLength({ min: 5 }).withMessage('O título precisa conter no mínimo 5 caracteres.'),
	check('preco').isCurrency().withMessage('O preco precisa conter um valor monetário válido.')
		]
	}



}

module.exports = Livro;