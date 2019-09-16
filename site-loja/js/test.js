
// MODAL


let modalLogin = document.querySelector("#modal-login");
let modalCadastro = document.querySelector("#modal-cadastro");
let fechaModals = document.querySelectorAll(".close");
let abreModal = document.querySelector(".abre-modal");
let abreModalCadastro = document.querySelector(".abre-modal-cadastro")
let abreModalCart = document.querySelector(".icone-login");
let modalCart = document.querySelector("#modal-cart");

abreModal.onclick = function(){

	modalLogin.style.display = "block";
}

abreModalCadastro.onclick = function(){

	modalCadastro.style.display = "block";
}

fechaModals.forEach(fechaModal =>{

	fechaModal.addEventListener("click", function(){

		modalLogin.style.display = "none";
		modalCadastro.style.display = "none";

	})

})

window.onclick = function(){

	if(event.target == modalLogin || event.target == modalCadastro || event.target == modalCart){

		modalLogin.style.display = "none";
		modalCadastro.style.display = "none";
		modalCart.style.display = "none";
	}
}


abreModalCart.onclick = function(){

	event.preventDefault();
	modalCart.style.display = "block";
}


//CART

let cartTotal = document.getElementsByClassName("icone-login")

let product = document.getElementsByClassName("icone");

for(i = 0; i <product.length; i++){
	let botaoCompra = product[i]
	botaoCompra.addEventListener("click", botaoAdicionaAoCart)
}

document.getElementsByClassName("link-compra")[0].addEventListener("click", compraFinal)

function compraFinal(){

	alert("Compra efetuada com sucesso.")
	let itensCart = document.getElementsByClassName("itens-cart")[0]
	while(itensCart.hasChildNodes()){
		itensCart.remove(itensCart.firstChild())
	}
	updateCartTotal();
}

function botaoAdicionaAoCart(event){
	event.preventDefault()
	let botaoCompra = event.target;
	let itemLoja = botaoCompra.parentElement
	let price = itemLoja.getElementsByClassName("price")[0].innerText
	let title = itemLoja.getElementsByClassName("nome-produto")[0].innerText
	
	adicionaAoCart(title, price)
	updateCartTotal();
	


}


let cartArray = [];

function adicionaAoCart(title, price){

	let linhaCart = document.createElement("div")
	
	let itensCart = document.getElementsByClassName("itens-cart")[0]
	
	linhaCart.classList.add("linha-cart")
	let itemNomeCart = itensCart.getElementsByClassName("cart-item-title")
	for( i=0; i<itemNomeCart.length; i++){
		if(itemNomeCart[i].innerText == title){
			alert("Este item já foi adicionado ao carrinho.")
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
				itensCart = {titulo:title,
							preco:price
							};
				cartArray.push(itensCart)


				localStorage.setItem('itens', JSON.stringify(cartArray))
				const data = JSON.parse(localStorage.getItem('itens'))
				console.log(cartArray)

				

				
		}


let removeCart = document.getElementsByClassName("btn-danger")
for(i=0; i<removeCart.length; i++){
	let button = removeCart[i]
	button.addEventListener("click", removeCartItem)
}


let quantityInput = document.getElementsByClassName("cart-quantity-input")
for(i=0; i<quantityInput.length; i++){
	let input = quantityInput[i]
	button.addEventListener("change", quantityChanged)
}


function quantityChanged(event){

	let input = event.target;
	if(isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}

	updateCartTotal();
}

function removeCartItem(event){

	let clickedButton = event.target;
	clickedButton.parentElement.remove();
	updateCartTotal();
}


function updateCartTotal(){
	let cartItens = document.getElementsByClassName("itens-cart")[0]
	let cartLinha = document.getElementsByClassName("linha-cart")
	let total = 0;

	for(i=0; i<cartLinha.length; i++){

		let cartLinhaAtual = cartLinha[i]
		let priceElement = cartLinhaAtual.getElementsByClassName("cart-price")[0]
		let quantityElement = cartLinhaAtual.getElementsByClassName("cart-quantity-input")[0]

		let price = parseFloat(priceElement.innerText.replace("R$", ""));
		let quantity = quantityElement.value;
		total = total + (price * quantity)

	}

	total = Math.round(total * 100) / 100;
	document.getElementsByClassName("cart-total-price")[0].innerText = "R$ " + total
	
}
