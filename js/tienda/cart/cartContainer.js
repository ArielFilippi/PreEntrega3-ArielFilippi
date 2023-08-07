
const mostrarCarrito = () => {

	const container = document.getElementById('cartContainer')
	container.innerText = JSON.stringify(cart)

	const button = document.createElement('button')
	button.innerText = "Comprar"
	button.className = "btn btn-warning"
	
	container.append(button)
}