class Productos {

	constructor(id, producto, marca, stock, precio, imagen, descripcion) {
		this.id = id
		this.producto = producto
		this.marca = marca
		this.imagen = imagen
		this.stock = stock
		this.cantidad = 1
		this.precio = precio
		this.descripcion = descripcion
	}
}


const bebida = new Productos(0, "Whisky", "Jhony Walker", 10, 109117.75, imagenes.whisky, descripciones.whisky)
const bebida1 = new Productos(1, "Gin", "Beefeater", 5, 2500)
const bebida2 = new Productos(2, "Gin", "Beefeater pink", 2, 7500)
const bebida3 = new Productos(3, "Gin", "Beefeater 24", 7, 5400)
const bebida4 = new Productos(4, "Vodka", "Absolut", 5, 3500, imagenes.vodka, descripciones.vodka)
const bebida5 = new Productos(5, "vodka", "Absolut Vainilla", 5, 3200, imagenes.vodka2, descripciones.vodka2)
const bebida6 = new Productos(6, "vodka", "Absolut Mango", 15, 3700, imagenes.vodka3, descripciones.vodka3)
const bebida7 = new Productos(7, "Fernet", "Branca", 25, 1500)
const bebida8 = new Productos(8, "Gin", "Bombay", 1, 4500)

const { marca, imagen, stock, precio, producto } = bebida


let prods = [bebida, bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7, bebida8]


