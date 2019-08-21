let modal = document.querySelector("#modal-login");

let modalCadastro = document.querySelector("#modal-cadastro");

let abreModal = document.querySelector(".abre-modal");
let abreModalCadastro = document.querySelector(".abre-modal-cadastro");

let fechaModal = document.querySelector(".close");

abreModal.onclick = function(){
	
        modal.style.display = "block";
         
}

abreModalCadastro.onclick = function(){
	
        modalCadastro.style.display = "block";
        
}



fechaModal.onclick = function(){

	
	modal.style.display = "none";
	modalCadastro.style.display = "none";
	
}

window.onclick = function(){

	if(event.target == modal | event.target == modalCadastro){
	modal.style.display = "none";
	modalCadastro.style.display = "none"
	}
}

console.log(fechaModal);
