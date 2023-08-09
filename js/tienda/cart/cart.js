let cart = [];

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
            cart[existingProductIndex].cantidad++;
            cart[existingProductIndex].precioTotal = cart[existingProductIndex].precio * cart[existingProductIndex].cantidad;
        } else {
            cart.push({
                id: result.id,
                precio: result.precio,
                marca: result.marca,
                cantidad: 1,
                precioTotal: result.precio  // Corregido: usar result.precio en lugar de result.valor
            });
        }
        mostrarCarrito();  // Asumiendo que esta función está definida en otro lugar
        guardarCarritoEnSessionStorage();
    }
};

const guardarCarritoEnSessionStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const cargarCarritoDesdeSessionStorage = () => {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
        cart = JSON.parse(cartFromStorage);
    }
};

// Llamar a la función de carga del sessionStorage al cargar la página
cargarCarritoDesdeSessionStorage();