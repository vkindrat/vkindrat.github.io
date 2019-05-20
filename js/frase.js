
$("#botao-frase").click(FraseAleatoria);
$("#botao-id").click(buscaFrase);


function FraseAleatoria(){



	$("#spinner").toggle();
	$.get("http://localhost:3000/frases", trocaFraseAleatoria)
	.fail(function(){

		$("#msg-erro").toggle();
		setTimeout(function(){
			$("#msg-erro").toggle();
	},2500);
		})
		.always(function(){

			$("#spinner").toggle();

		});

	

}

function trocaFraseAleatoria(data){

	var frase = $(".frase");
	var numeroAleatorio = Math.floor(Math.random() * data.length);

	frase.text(data[numeroAleatorio].texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);
}


function buscaFrase(){

	$("#spinner").toggle();

	var fraseId = $("#frase-id").val();
	var dados = {id: fraseId};


	$.get("http://localhost:3000/frases", dados, trocaFrase)
	.fail(function(){

		$("#msg-erro").toggle();
		setTimeout(function(){
			$("#msg-erro").toggle();
	},2500);
		})
		.always(function(){

			$("#spinner").toggle();

		});

}


function trocaFrase(data){

	console.log(data);

	var frase = $(".frase");
	frase.text(data.texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data.tempo);

}
