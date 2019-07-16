



var peso = document.querySelector(".peso");
var altura = document.querySelector(".altura");
var texto = document.querySelector(".digite-altura");
var textodois = document.querySelector(".digite-peso")
var titulo = document.querySelector(".titulo");

var resultadoFinal = document.querySelector(".imc-resultado");
var botaoCalcula = document.querySelector(".botao-calcula");


function calcula(){

	var resultado = peso.value / (altura.value * 2)
			botaoCalcula.classList.add("esconde")
			peso.classList.add("esconde");
			altura.classList.add("esconde");
			texto.classList.add("esconde");
			textodois.classList.add("esconde");
			titulo.classList.add("esconde");
			

			
			resultadoFinal.textContent = "O seu IMC é " + resultado.toPrecision(3);

	console.log(resultado.toPrecision(4));
}



function volta(){

	window.history.back();
}