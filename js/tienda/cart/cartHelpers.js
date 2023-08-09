const addProduct = (product) => {

	delete product.stock
	delete product.descripcion
	const { precio, cantidad } = product
	product.precioTotal = precio * cantidad;
	cart = [...cart, product]
}


const modifyProduct = (id, action) => {

	const index = cart.findIndex(item => item.id === id);

	if (action === 'add')
		cart[index].cantidad++;
	if (action === 'remove')
		cart[index].cantidad--;

	const { precio, cantidad } = cart[index]
	cart[index].precioTotal = precio * cantidad;
}


const deleteProduct = (id) => {
	const newCart = cart.filter(prod => prod.id !== id)
	cart = newCart
}


const saveToStorage = (cart) =>
	localStorage.setItem('cart', JSON.stringify(cart))


const calcTotal = () => {
	let total = 0;
	for (const item of cart)
		total += item.precioTotal;
	return total;
};