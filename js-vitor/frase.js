
$("#botao-frase").click(FraseAleatoria);


function FraseAleatoria(){

	$.get("http://localhost:3000/frases", trocaFraseAleatoria);

}

function trocaFraseAleatoria(data){

	var frase = $(".frase");
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	frase.text(data[numeroAleatorio].texto);
}