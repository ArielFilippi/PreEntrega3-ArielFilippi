const addToCart = (id) => {

	const result = prods.find(prod => prod.id === id);

	if (result) {

		const existInCart = cart.some(item => item.id === id)

		existInCart
			? modifyProduct(id, 'add')
			: addProduct(result)

		updateCart()
	}
}


const removeToCart = (id) => {

	const result = prods.find(prod => prod.id === id);

	if (result) {

		const product = cart.find(prod => prod.id === id)

		if (!product) return

		product.cantidad > 1
			? modifyProduct(id, 'remove')
			: deleteProduct(id)

		updateCart()
	}
}


const updateCart = () => {
	saveToStorage(cart)
	showCart(cart)
}



