

let abreModal = document.querySelector(".abre-modal");
let abreModalCadastro = document.querySelector(".abre-modal-cadastro");
let fechaModals = document.querySelectorAll(".close");
let modalProduto = document.querySelector(".adicionaProduto");
let formProduto = document.querySelector(".formularioProduto");
let formModal = document.querySelector("#formModal");
let closeModal = document.querySelector(".close");



// MODAL PRODUTO
modalProduto.onclick = function(){
event.preventDefault();
	formModal.style.display ='block';
	
}



//MODAL LOGIN


window.onclick = function(){

	if(event.target == modalCart | event.target == formModal){
	modalCart.style.display = "none";
	formModal.style.display = "none";
	
	}

}

closeModal.onclick = function(){

	formModal.style.display = "none";
}

//CART


let cartTotal = document.querySelector(".icone-cart");
let modalCart = document.querySelector("#modal-cart")


 
cartTotal.onclick = function(){
	event.preventDefault();
	modalCart.style.display = "block";

}

	
		let product = document.getElementsByClassName("icone");
 		for(var i=0; i<product.length; i++){

 			let botaoCompra = product[i]
 			botaoCompra.addEventListener("click", botaoAdicionaAoCart)

 			}
 		

function updateCartTotal(){

	let cartItens = document.getElementsByClassName("itens-cart")[0]
	let cartLinha =  cartItens.getElementsByClassName("linha-cart")
	let total = 0

	for(i = 0; i < cartLinha.length; i++){

		let cartLinhaAtual = cartLinha[i]
		let priceElement = cartLinhaAtual.getElementsByClassName("cart-price") [0]
		let quantityElement = cartLinhaAtual.getElementsByClassName("cart-quantity-input")[0]

		let price =  parseFloat(priceElement.innerText.replace("R$", ""));
		let quantity = quantityElement.value;
		total = total + (price * quantity)
		

	}
	total = Math.round(total * 100) / 100
	document.getElementsByClassName("cart-total-price")[0].innerText = "R$" + total

}




document.getElementsByClassName("link-compra")[0].addEventListener("click", compraFinal)

function compraFinal(){
	alert("Compra efetuada com sucesso.")
	let itensCart = document.getElementsByClassName("itens-cart")[0]
	while(itensCart.hasChildNodes()){
		itensCart.innerHTML = '';
		
	}
	localStorage.removeItem("itens")
	updateCartTotal();
}





function botaoAdicionaAoCart(event){

	event.preventDefault()
	let botaoCompra = event.target
	let itemLoja = botaoCompra.parentElement
	let price = itemLoja.getElementsByClassName("price")[0].innerText
 	let title = itemLoja.getElementsByClassName("nome-produto")[0].innerText
 	adicionaAoCart(title,price)
 	updateCartTotal()
}





function adicionaAoCart(title,price){


	let linhaCart = document.createElement("div")
	let itensCart = document.getElementsByClassName("itens-cart")[0]
	linhaCart.classList.add("linha-cart")
	let itemNomeCart = itensCart.getElementsByClassName("cart-item-title")
	for(i = 0; i < itemNomeCart.length; i++){
		if(itemNomeCart[i].innerText == title){
			alert("Este item ja foi adicionado ao carrinho.")
			return
			
		}
	}
	
	let conteudoCart = `
						<div class="cart-item cart-column">
							<span class="cart-item-title">${title}</span>
						</div>
						<span class="cart-price cart-column">${price}</span>
						<input class="cart-quantity-input" type="number" value="1">
						<button class="btn btn-danger" type="button">X</button>
					</div>
					`
					linhaCart.innerHTML = conteudoCart;
	itensCart.append(linhaCart)
	linhaCart.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem)
	linhaCart.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)

	const itensJSON = localStorage.getItem('itens');
	const itensArray = JSON.parse(itensJSON) || [];
	const itens = {title,price};

	itensArray.push(itens);
	
	localStorage.setItem("itens", JSON.stringify(itensArray))
	
	

}



function adicionaDaStorage(title, price){
	let linhaCart = document.createElement("div")
	let itensCart = document.getElementsByClassName("itens-cart")[0]
	linhaCart.classList.add("linha-cart")
	let itemNomeCart = itensCart.getElementsByClassName("cart-item-title")
	
		
		
	
	
	let conteudoCart = `
						<div class="cart-item cart-column">
							<span class="cart-item-title">${title}</span>
						</div>
						<span class="cart-price cart-column">${price}</span>
						<input class="cart-quantity-input" type="number" value="1">
						<button class="btn btn-danger" type="button">X</button>
					</div>
					`
					linhaCart.innerHTML = conteudoCart;
	itensCart.append(linhaCart)
	linhaCart.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem)
	linhaCart.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)

	

}


window.onload = () => {
	if(localStorage.hasOwnProperty("itens")){
	let itemStorage = JSON.parse(localStorage.getItem("itens"))
	
	

	
	for(i = 0; i<itemStorage.length; i++){
		let itemStorageTitle = itemStorage[i].title
		let itemStoragePrice = itemStorage[i].price
		adicionaDaStorage(itemStorageTitle, itemStoragePrice)
		
	}

	
	

	}

	updateCartTotal()
}



let removeCart = document.getElementsByClassName("btn-danger")

for(i = 0; i < removeCart.length; i++){
	let button = removeCart[i]
	button.addEventListener("click", removeCartItem)

		
	
}


let quantityInput = document.getElementsByClassName("cart-quantity-input")
for(i = 0; i < quantityInput.length; i++){
	let input = quantityInput[i]
	input.addEventListener("change", quantityChanged)


	
}

function quantityChanged(event){

	let input = event.target
	if(isNaN(input.value) || input.value <= 0){

		input.value = 1;
	}
	updateCartTotal();
}

function removeCartItem(event){
	let clickedButton = event.target;
		clickedButton.parentElement.remove();

		let asd = clickedButton.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerText
		console.log(asd)



		let itemStorage = JSON.parse(localStorage.getItem("itens"))
			for(i = 0; i < itemStorage.length; i++){

					if(itemStorage[i].title === asd){


					itemStorage.splice(i,1)
					console.log(itemStorage)
					
					
					}	
					
				}

				localStorage.setItem('itens', JSON.stringify(itemStorage));	
				updateCartTotal();

			}
		

			
		
		









