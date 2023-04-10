$(document).ready(function(){
    $('#search-input').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.contenedor-img .card').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

const btnFiguras = document.getElementById('btn-figuras');
const btnPeluches = document.getElementById('btn-Peluche');
const btnRopa = document.getElementById('btn-Ropa');
const btnCosplay = document.getElementById('btn-Cosplay');
const btnLlaveros = document.getElementById('btn-Llaveros');
const btnManga = document.getElementById('btn-Manga');
const btnAccesorios = document.getElementById('btn-Accesorios');
const inputText = document.getElementById('search-input');
const cantidadText = document.querySelectorAll('.text-body');
let cantidades = new Array();
btnFiguras.addEventListener('click', () => {
  inputText.value = btnFiguras.textContent;
});

btnPeluches.addEventListener('click', () => {
    inputText.value = btnPeluches.textContent;
});

btnRopa.addEventListener('click', () => {
    inputText.value = btnRopa.textContent;
});

btnCosplay.addEventListener('click', () => {
    inputText.value = btnCosplay.textContent;
});

btnLlaveros.addEventListener('click', () => {
    inputText.value = btnLlaveros.textContent;
});
btnManga.addEventListener('click', () => {
    inputText.value = btnManga.textContent;
});

btnAccesorios.addEventListener('click', () => {
    inputText.value = btnAccesorios.textContent;
});

// Funciones para que el search bar busque automaticamente

// ALTERNATIVA 1
// inputText.addEventListener('input', () => {
//     const inputVal = inputText.value.toLowerCase();
//     const buttons = [btnFiguras, btnPeluches, btnRopa, btnCosplay, btnLlaveros, btnManga, btnAccesorios];
  
//     for (const button of buttons) {
//       if (button.textContent.toLowerCase().includes(inputVal)) {
//         button.click();
//         break;
//       }
//     }
// });

// ALTERNATIVA 2
// inputText.addEventListener('input', () => {
//     const inputVal = inputText.value.toLowerCase();
//     const buttons = [btnFiguras, btnPeluches, btnRopa, btnCosplay, btnLlaveros, btnManga, btnAccesorios];
  
//     const buttonMatch = buttons.find(button => button.textContent.toLowerCase().includes(inputVal));
  
//     if (buttonMatch) {
//       buttonMatch.click();
//     }
// });
  

// INTENTO DEFINITIVO

// anuncio "¡Artículo agregado!" id del div
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
    var len = Object.keys(data).length;
    for(let i=0 ; i < len ;i++)
    {
        cantidades.push(data[i].cantidad); 
    }
   Llenar();
});

function Llenar()
{
    let i = 0;
    cantidadText.forEach(element => {
        element.innerHTML = `Cantidad disponible: ${cantidades[i]}`;
        i++;
    });
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