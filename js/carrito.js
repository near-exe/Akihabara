  

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
    <div class="articulo">  
        <img class="foto-elemento-carrito" src="${carta.imagen}" alt="${carta.nombre}" >
        <h3>${carta.nombre}</h3>
        <p>Precio: $${carta.precio.toFixed(2)}</p>
        <p>Cantidad: ${carta.cantidad}</p>
        <button class="eliminar" onclick="eliminarDelCarrito(${index})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
            <path fill="black" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg>         
        </button>
    </div>  
    <div class="separador"><span></span></div>
    
    `;
    carritoDiv.appendChild(cartaDiv);
  });
  
  // mostrar el total del carrito
  const totalDiv = document.createElement('div');
  const total = carrito.reduce((suma, carta) => suma + (carta.precio * carta.cantidad), 0);
  totalDiv.innerHTML = 
  `
  <div id="calcTotal">Total: $${total.toFixed(2)}</div>
    <div class="PagoYCompra">
          <div class="list-choice">
              <div class="list-choice-title">METODO DE PAGO</div>
              <div class="list-choice-objects">
              <label>
                  <input type="radio" name="month"/><span>VISA</span>
              </label>
              <label>
                  <input type="radio" name="month"/><span>MASTERCARD</span>
              </label>
              <label>
                  <input type="radio" name="month"/><span>AMERICAN EXPRESS</span>
              </label>
              </div>
          </div>
          <button class="comprarBtn" onclick="confirmacionCompra()">Comprar</button>
      </div>
    
  `;
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

// Obtener referencia al span donde se mostrará el nombre de usuario
const usernameSpan = document.getElementById('username');
// Obtener el nombre de usuario del localStorage
const username = localStorage.getItem('username');

// Mostrar el nombre de usuario si está guardado en localStorage
if (username) {
    usernameSpan.textContent = username;
}

// Obtener referencias a los elementos HTML relevantes
const loginLink = document.getElementById('login-link');

// Verificar si el nombre de usuario está almacenado en localStorage
if (username) {
    // Mostrar el username
    usernameSpan.style.display = 'inline-block';
    // Si hay un nombre de usuario almacenado, mostrarlo en el span y cambiar el texto del enlace a "Logout"
    usernameSpan.textContent = username;
    loginLink.textContent = 'Logout';
    loginSignup.textContent = 'LOGOUT';
    // Agregar un manejador de eventos para el enlace de "Logout" que borra el nombre de usuario del localStorage y recarga la página
    loginLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir la acción predeterminada del enlace
      localStorage.removeItem('username'); // Borrar el nombre de usuario del localStorage
      window.location.reload(); // Recargar la página
    });
    
  }else{
    usernameSpan.style.display = 'none'; // Ocultar el username
}


// confirmacion compra

// anuncio "¡Artículo comrpado!" id del div
const compraAnuncio = document.getElementById('compra-anuncio');

function confirmacionCompra() {
  // anuncio "¡Artículo agregado!"
  compraAnuncio.style.display = 'flex';
}

// función para eliminar una carta del carrito
function eliminartodo(index) {
  // reducir la cantidad de la carta en el carrito
  index = 0;
  while(carrito[index] != carrito.length)
  {
    carrito[index].cantidad--;

    // eliminar la carta del carrito si su cantidad es cero
    if (carrito[index].cantidad === 0) {
      carrito.splice(index, 1);
    }
    // guardar el carrito en el almacenamiento local y actualizar el HTML del carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  actualizarCarrito();
}