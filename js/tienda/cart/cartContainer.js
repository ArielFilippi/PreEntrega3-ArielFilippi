/**
 * Constructor de Cards del Carrito
 * @param {*} Array con productos del carrito 
 * @returns div con Card
 */
const createItem = ({ imagen, precio, marca, cantidad, precioTotal }) => {

	const template = `
		<img width="150rem" src='${imagen}'>
		<h5>${marca}</h5>
		<h6>Precio: ${precio}</h6>
		<h6>Cantidad: ${cantidad}</h6>
		<h6>Total: ${precioTotal}</h6>`

	const container = document.createElement('div')
	container.className = "card my-2 itemContainer"
	container.innerHTML = template
	return container
}



/**
 * Rellenar el container HTML de 
Carrito con los valores proporcionados
 * @param {*} cart Array del carrito
 */
const showCart = (cart) => {

	const container = document.getElementById('cartContainer')
	container.classList.add('bg-body-secondary', 'itemsContainer')
	container.innerHTML = ''

	for (item of cart)
		container.append(createItem(item))

	createTotal(container)
	createButton(container)
}



const createTotal = (container) => {
	const totalContainer = document.createElement('div')
	totalContainer.className = "card my-2 px-2 bg-body-tertiary fw-bold itemContainer"
	totalContainer.innerHTML = 'Total: $' + calcTotal()
	container.append(totalContainer)
}



const createButton = (container) => {
	const button = document.createElement('button')
	button.className = "btn btn-warning"
	button.innerText = "Comprar"
	container.append(button)
}