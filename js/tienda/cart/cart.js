const cart = []

const addToCart = (id) => {

	const result = prods.find(prod => prod.id === id)

	// cosnt comparacion = cart.find(item => item.id === id)
	// 	if (result existe dentro de cart) {
	// 		modificar ese valor que está en cart
	// 	}
	// 	else {
	cart.push(result)
	// 	}

	mostrarCarrito()

}