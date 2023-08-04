const mostrarCarrito = () => {

	const container = document.getElementById('cartContainer')
	container.innerText = JSON.stringify(cart)

	const button = document.createElement('button')
	button.innerText = "Comprar"
	button.className = "btn btn-warning"

	const mostrarTexto = () => console.log('estas sobre el botón')
	const salisteTexto = () => {
		console.log('saliste del botón')
		button.removeEventListener('mouseover', mostrarTexto)
	}



	button.addEventListener('mouseover', mostrarTexto)
	button.addEventListener('mouseleave', salisteTexto)

	container.append(button)


}