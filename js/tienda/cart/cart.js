
const cart = []

// Función para calcular el precio total de todos los productos en el carrito
const calcularTotal = () => {
    let total = 0;
    for (const item of cart) {
        total += item.precioTotal;
    }
    return total;
};

const addToCart = (id) => {
    const result = prods.find(prod => prod.id === id);
    if (result) {
        const existingProductIndex = cart.findIndex(item => item.id === id);
        if (existingProductIndex !== -1) {
            // Si el producto ya existe en el carrito, incrementamos la cantidad y el precio total
            cart[existingProductIndex].cantidad++;
            cart[existingProductIndex].precioTotal = cart[existingProductIndex].precio * cart[existingProductIndex].cantidad;
        } else {
            // Si el producto no existe en el carrito, lo agregamos como un nuevo elemento con su precio total
            cart.push({
                id: result.id,
                precio: result.precio,
                marca: result.marca,
                cantidad: 1,
                precioTotal: result.valor
            });
        }
        mostrarCarrito();
        guardarCarritoEnSessionStorage(); // Guardar el carrito actualizado en el sessionStorage
    }
};

// Función para guardar el carrito actual en el sessionStorage
const guardarCarritoEnSessionStorage = () => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
};

// Función para cargar el carrito desde el sessionStorage
const cargarCarritoDesdeSessionStorage = () => {
    const cartFromStorage = sessionStorage.getItem('cart');
    if (cartFromStorage) {
        cart = JSON.parse(cartFromStorage);
    }
};


// Llamar a la función de carga del sessionStorage al cargar la página
cargarCarritoDesdeSessionStorage();