  

// INTENTO DEFINITIVO

// obtener referencia al div del carrito en el DOM
const carritoDiv = document.getElementById('carrito');

// crear una lista vacía para almacenar las cartas
let carrito = [];

// función para actualizar el contenido del carrito en el HTML
function actualizarCarrito() {
  // limpiar el contenido anterior del carrito
  carritoDiv.innerHTML = '';
  
  // agregar cada carta en el carrito al HTML
  carrito.forEach((carta, index) => {
    const cartaDiv = document.createElement('div');
    cartaDiv.innerHTML = `
      <img src="${carta.imagen}" alt="${carta.nombre}">
      <div>
        <h3>${carta.nombre}</h3>
        <p>Precio: $${carta.precio.toFixed(2)}</p>
        <p>Cantidad: ${carta.cantidad}</p>
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
      </div>
    `;
    carritoDiv.appendChild(cartaDiv);
  });
  
  // mostrar el total del carrito
  const totalDiv = document.createElement('div');
  const total = carrito.reduce((suma, carta) => suma + (carta.precio * carta.cantidad), 0);
  totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
  carritoDiv.appendChild(totalDiv);
}

// cargar el carrito desde el almacenamiento local si existe
const carritoLocalStorage = localStorage.getItem('carrito');
if (carritoLocalStorage) {
  carrito = JSON.parse(carritoLocalStorage);
  actualizarCarrito();
}

// función para eliminar una carta del carrito
function eliminarDelCarrito(index) {
  // reducir la cantidad de la carta en el carrito
  carrito[index].cantidad--;

  // eliminar la carta del carrito si su cantidad es cero
  if (carrito[index].cantidad === 0) {
    carrito.splice(index, 1);
  }

  // guardar el carrito en el almacenamiento local y actualizar el HTML del carrito
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();
}