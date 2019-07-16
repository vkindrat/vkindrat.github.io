var nome = document.querySelector("#campo");
		var texto = document.querySelector("#titulo");
		var botao = document.querySelector("#botao");
		var opcoes1 = document.querySelector(".opcoes");
		var opcoes2 = document.querySelector(".opcoes-2");
		var botao2 = document.querySelector(".botao-volta");


		  if(localStorage.getItem('nome')){
            troca(localStorage.getItem('nome'));
        }


		
		function troca(){
			
			texto.textContent = "Olá, " + nome.value;
			nome.classList.add("input-esconde");
			botao.classList.add("botao-esconde");
			localStorage.setItem('nome', nome.value);
			opcoes1.classList.remove("opcoes");
			opcoes2.classList.remove("opcoes-2");
			



			

			

		}

		
	


	
		var nome = document.querySelector("#campo");

		function validaNome(nome){

  
		   var letras = /^[A-Za-z]+$/;
		   if(nome != null && nome.value.match(letras))
		     {
		      troca();
		     }
		   else
		     {
		     alert("Formato incorreto.");
		     return false;
		     }
		  }
		console.log(nome);


	
	
		function volta(){

		localStorage.setItem('nome', nome.value);

		window.history.back();
	}

	