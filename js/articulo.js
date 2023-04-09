var FotoPrincipal = document.getElementById("FotoPrincipal");
var FotoChiquita = document.getElementsByClassName("fotosChiquitas");

//Funcion para cambiar foto grande
FotoChiquita[0].onclick = function () {
    FotoPrincipal.src = FotoChiquita[0].src;
}
FotoChiquita[1].onclick = function () {
    FotoPrincipal.src = FotoChiquita[1].src;
}
FotoChiquita[2].onclick = function () {
    FotoPrincipal.src = FotoChiquita[2].src;
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
const carrito = document.getElementById('cart-nav');

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

// agregar cosas al carrito
const compraAnuncio = document.getElementById('compra-anuncio');

// función para agregar una carta al carrito
function agregarAlCarrito(carta) {
	// obtener el carrito actual desde localStorage o crear uno vacío
	let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

	// verificar si la carta ya está en el carrito
	const index = carrito.findIndex(c => c.id === carta.id);

	if (index !== -1) {
		// si la carta ya está en el carrito, aumentar su cantidad
		carrito[index].cantidad++;
	} else {
		// si la carta no está en el carrito, agregarla
		carrito.push({...carta, cantidad: 1});
	}

	// guardar el carrito actualizado en localStorage
	localStorage.setItem('carrito', JSON.stringify(carrito));

    // anuncio "¡Artículo agregado!"
    compraAnuncio.style.display = 'block';
    setTimeout(function() {
        compraAnuncio.style.display = 'none';
    }, 800);
}

//Traer la data de la ruta /data que se manda desde el backend (Las cantidad de articulos)
fetch('/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //Codigo que va a ocurrir con la data que coge del backend
    console.log(data);  // rn solo un console log para ver que la data se manda bien
});