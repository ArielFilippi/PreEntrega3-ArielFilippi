/**
 * 
 * @param {*} id asignado a cada producto1
 * @param {*} producto nombre del producto
 * @param {*} marca marca del producto
 * @param {*} stock cantidad de unidades existentes
 * @param {*} precioUnitario valor unitario de cada producto
 */
function productos(id, producto, marca, stock, precioUnitario) {
    this.id = id
    this.producto = producto
    this.marca = marca
    this.stock = stock
    this.cantidad = 0
    this.precioUnitario = precioUnitario
}

// Crear instancias del objeto utilizando la función constructora
const bebida = new productos(0, "Whisky", "Jhony Walker", 10, 109117.75)
const bebida1 = new productos(1, "Gin", "Beefeater", 5, 2500)
const bebida2 = new productos(2, "Gin", "Beefeater pink", 2, 7500)
const bebida3 = new productos(3, "Gin", "Beefeater 24", 7, 5400)
const bebida4 = new productos(4, "Vodka", "Absolut", 5, 3500)
const bebida5 = new productos(5, "vodka", "Absolut Vainilla", 5, 3200)
const bebida6 = new productos(6, "vodka", "Absolut Mango", 15, 3700)
const bebida7 = new productos(7, "Fernet", "Branca", 25, 1500)
const bebida8 = new productos(8, "Gin", "Bombay", 1, 4500)

let prods = [bebida, bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7, bebida8]

// Convertimos el array prods a una cadena JSON
const prodsJSON = JSON.stringify(prods);

// Guardamos la cadena JSON en el sessionStorage
sessionStorage.setItem('productos', prodsJSON);

// Recuperamos los datos del sessionStorage
const productosJSON = sessionStorage.getItem('productos');

// Convertimos la cadena JSON nuevamente a un array de objetos
const prodsRecuperados = JSON.parse(productosJSON);


let carrito = [];
// Ahora prodsRecuperados contiene los productos guardados previamente en el sessionStorage
console.table(prodsRecuperados);



