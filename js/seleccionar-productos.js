let totalCarrito;
let cantidadSeleccionada;
/**
 * Función para obtener los productos seleccionados y su cantidad
 * @param {Array} productosDisponibles - Lista de productos disponibles
 * @returns {Object} Objeto con los productos seleccionados y su cantidad
 */



// Crear una función que reciba como parámetro el producto seleccionado y la cantidad que se quiere agregar.


function obtenerProductosSeleccionados(productosDisponibles) {

	const productosSeleccionados = {};
	let seguirAgregando = true;

	while (seguirAgregando) {
		let msgProductsNames;
		prods.forEach((prod,index) => msgProductsNames += `
		${index} ${prod.marca}`)
		let eleccion = parseInt(prompt("Seleccione una bebida: " + msgProductsNames))

		let existeEnElCarrito = carrito.find(prod => prod.id === eleccion)

		if (existeEnElCarrito) {
			cantidadSeleccionada = parseInt(prompt("Cuantas bebidas queres llevar?"))
			// LLamo a la función para ver si el stock es mayor que la cantidad 
			existeEnElCarrito.cantidad += cantidadSeleccionada
		} else {
			//Busco el producto seleccionado 
			let prodSeleccionado = prods.find(prod => prod.id === eleccion)
			cantidadSeleccionada = parseInt(prompt("Cuantas bebidas queres llevar?"))
			// LLamo a la función para ver si el stock es mayor que la cantidad 
			prodSeleccionado.cantidad = cantidadSeleccionada
			carrito.push(prodSeleccionado)
		}

		totalCarrito = carrito.reduce((acc,prod) => acc + (prod.precioUnitario * prod.cantidad),0)
		console.log(totalCarrito);

		const agregarOtraBebida = prompt("¿Deseas agregar otra bebida? (s/n)").toLowerCase();
		seguirAgregando = agregarOtraBebida === "s";
	}
	console.table(carrito);
	totalCarrito = carrito.reduce((acc,prod) => acc + (prod.precioUnitario * prod.cantidad),0)
	console.log("Total carrito: " + totalCarrito)


	return productosSeleccionados;
}
const prueba = obtenerProductosSeleccionados(productos);
console.log(prueba)