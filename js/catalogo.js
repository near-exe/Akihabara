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
}