
// Obtener el botón presionado desde el query string de la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articulo = urlParams.get('articulo');

// Obtener el elemento del DOM donde se mostrará la información del artículo
const idElement = document.getElementById('ID');
const tituloElement = document.getElementById('titulo');
const descripcionElement = document.getElementById('descripcion');
const precioVisible = document.getElementById('precio');
const precioNum = document.getElementById('precioNum'); 
const FotoPrincipal = document.getElementById('FotoPrincipal');
const FotoChiquita = document.getElementsByClassName("fotosChiquitas");

// Mostrar la información correspondiente al artículo
if (articulo === '1') {
  tituloElement.textContent = 'Tanjiro';
  descripcionElement.textContent = 'Esta figura de acción de Tanjiro Kamado de Demon Slayer: Kimetsu no Yaiba mide 60 centímetros de alto y está hecha de material de PVC de alta calidad. Es una figura altamente detallada y es perfecta para los fanáticos de Demon Slayer que quieran coleccionar productos de alta calidad de su personaje favorito.';
  precioVisible.textContent='$100.69'
  FotoPrincipal.src = '../imagenes/tanjiro1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '100.69';
  idElement.textContent = articulo;

} else if (articulo === '2') {
  tituloElement.textContent = 'Boku no hero set';
  descripcionElement.textContent = 'Este conjunto de figuras de Boku no Hero Academia presenta a los personajes principales de la serie de anime y manga. Cada figura mide aproximadamente 10 centímetros de alto y está hecha de material de PVC de alta calidad. Este conjunto de figuras de Boku no Hero Academia es perfecto para los fanáticos de la serie que quieren coleccionar productos de alta calidad de sus personajes favoritos.'
  precioVisible.textContent='$499.49'
  FotoPrincipal.src = '../imagenes/bokunohero1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '499.49';
  idElement.textContent = articulo;

} else if (articulo === '3') {
  tituloElement.textContent = 'Cosplay Zenitsu';
  descripcionElement.textContent = 'Este cosplay de Zenitsu Agatsuma de Demon Slayer: Kimetsu no Yaiba es una réplica impresionante del atuendo del personaje. Incluye la gabardina amarilla y naranja con capucha, pantalones y zapatillas blancas. El cosplay también presenta el pendiente característico de Zenitsu en la oreja derecha y una peluca amarilla para replicar su cabello distintivo. Este traje es una opción perfecta para los fanáticos de Zenitsu que buscan un cosplay auténtico y detallado.';
  precioVisible.textContent='$99.99'
  FotoPrincipal.src = '../imagenes/cosplay-zenitsu-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '99.99';
  idElement.textContent = articulo;
}
else if (articulo === '4') {
  tituloElement.textContent = 'Deku';
  descripcionElement.textContent = 'Esta figura de Deku de Boku no Hero Academia es una representación detallada y fiel del personaje principal. Con una altura de alrededor de 15 centímetros y hecha de material de PVC de alta calidad, presenta a Deku en su icónico traje de héroe verde y negro, con varios puntos de articulación para diferentes poses de acción. Esta figura es una excelente adición a la colección de cualquier fanático de Boku no Hero Academia.'
  precioVisible.textContent='$110.99'
  FotoPrincipal.src = '../imagenes/deku1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '110.99';
  idElement.textContent = articulo;
}
else if (articulo === '5') {
  tituloElement.textContent = 'Itadori';
  descripcionElement.textContent = 'Esta figura de Itadori de Jujutsu Kaisen es una impresionante representación del personaje principal. Mide aproximadamente 17 centímetros de alto y está hecha de material de PVC de alta calidad. La figura presenta a Itadori en su uniforme de jujutsu, con detalles finos y precisos en su diseño. Además, tiene varios puntos de articulación que permiten colocarlo en diferentes poses de acción. Esta figura es una excelente opción para los fanáticos de Jujutsu Kaisen que buscan una representación auténtica y detallada de su personaje favorito.'
  precioVisible.textContent='$120.49'
  FotoPrincipal.src = '../imagenes/jujutsukaisen1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '120.49';
  idElement.textContent = articulo;
}
else if (articulo === '6') {
  tituloElement.textContent = 'Llaveros haikyuu';
  descripcionElement.textContent = 'Estos llaveros de Haikyuu son una excelente opción para los fanáticos del anime y del voleibol. Hechos de material de PVC de alta calidad. Cada llavero mide alrededor de 5 centímetros de altura y tiene un gancho de metal para sujetarlo fácilmente a las llaves, bolsos o cualquier otro objeto. Los detalles precisos en cada llavero hacen que sean una adición imprescindible para cualquier colección de Haikyuu.'
  precioVisible.textContent='$9.49'
  FotoPrincipal.src = '../imagenes/llaveros-haikyuu-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '9.49';
  idElement.textContent = articulo;
}
else if (articulo === '7') {
  tituloElement.textContent = 'sololeveling manga';
  descripcionElement.textContent = 'El manga de Solo Leveling es una adaptación del popular manhwa coreano del mismo nombre. La historia sigue a Jinwoo Sung, un cazador de rango E que se encuentra atrapado en un mundo donde monstruos y cazadores existen. Después de sobrevivir a una mazmorra de nivel D solo, Jinwoo adquiere una habilidad única que le permite subir de nivel y convertirse en un cazador más poderoso. A medida que se adentra en misiones más peligrosas y descubre secretos ocultos sobre el mundo de los cazadores, Jinwoo debe luchar por proteger a su familia y amigos. El manga está lleno de acción emocionante, personajes interesantes y un mundo de fantasía vibrante.'
  precioVisible.textContent='$99.49'
  FotoPrincipal.src = '../imagenes/manga-sololeveling-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '99.49';
  idElement.textContent = articulo;
}
else if (articulo === '8') {
  tituloElement.textContent = 'Naruto';
  descripcionElement.textContent = 'Esta figura de Naruto es una representación detallada y fiel del personaje principal en su icónico traje naranja y negro. Con una altura de aproximadamente 15 centímetros y hecha de material de PVC de alta calidad, presenta a Naruto con su cabeza de zorro, con detalles finos y precisos en su diseño. La figura también tiene varios puntos de articulación que permiten colocarla en diferentes poses de acción. Esta figura es una excelente opción para los fanáticos de Naruto que buscan una representación auténtica y detallada de su personaje favorito en una pose icónica.'
  precioVisible.textContent='$199.49'
  FotoPrincipal.src = '../imagenes/naruto1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='imagenes/tanjiro1-RB.png';
  FotoChiquita[2].src ='imagenes/tanjiro2.jpg';
  precioNum.textContent = '199.49';
  idElement.textContent = articulo;
}

else {
  tituloElement.textContent = 'Artículo no encontrado';
  descripcionElement.textContent = 'Lo sentimos, el artículo solicitado no existe.';
}



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