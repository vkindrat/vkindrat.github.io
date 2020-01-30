const BaseControlador = require('../controladores/base-controladores.js')

const baseControlador = new BaseControlador();

const rotasBase = BaseControlador.rotas()

module.exports = (app) => {

app.get(rotasBase.home, baseControlador.home());



app.route(rotasBase.login)
	.get(baseControlador.login())
	.post(baseControlador.inicializaLogin());



}

