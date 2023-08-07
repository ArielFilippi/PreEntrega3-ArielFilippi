/**
 * 
 * @param {*} param0 
 * @returns 
 */
const template = ({ id, producto, marca, precio, descripcion, imagen }) =>
	`<div class="card" style="width: 18rem;">
				<img class="prodc" src="${imagen}" alt="${producto} ${marca}">
				<div class="card-body">
					<h5 class="card-title">${marca}</h5>
					<p class="card-text">${descripcion}</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item" id="0">$ ${precio}</li>
				</ul>
				<div class="card-body">
					<button onclick="addToCart(${id})" class="btn"><img class="pequeña" src="/images/cart-shopping-solid.svg" alt="comprar"></button>
				</div>
			</div>`


const mostrarProductos = () => {

	const container = document.querySelector('#productsContainer')

	const result = prods.map(prod => template(prod))
	container.innerHTML = result.join('')

}
