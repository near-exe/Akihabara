
$(document).ready(function(){
    $('#search-input').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.contenedor-img .card').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

const inputText = $('#search-input');
$('#btn-figuras').click(() => {
  inputText.val($('#btn-figuras').text());
  
});

$('#btn-Peluche').click(() => {
  inputText.val($('#btn-Peluche').text());
});

$('#btn-Ropa').click(() => {
  inputText.val($('#btn-Ropa').text());
});

$('#btn-Cosplay').click(() => {
  inputText.val($('#btn-Cosplay').text());
});

$('#btn-Llaveros').click(() => {
  inputText.val($('#btn-Llaveros').text());
});

$('#btn-Manga').click(() => {
  inputText.val($('#btn-Manga').text());
});

$('#btn-Accesorios').click(() => {
  inputText.val($('#btn-Accesorios').text());
});


// // Funciones para que el search bar busque automaticamente

// // // ALTERNATIVA 1
// inputText.addEventListener('input', () => {
//     const inputVal = inputText.value.toLowerCase();
//     const buttons = [btnFiguras, btnPeluches, btnRopa, btnCosplay, btnLlaveros, btnManga, btnAccesorios];
//     for (const button of buttons) {
//       if (button.textContent.toLowerCase().includes(inputVal)) {
//         button.click();
//         break;
//       }
//     }

//  });

// ALTERNATIVA 2
// inputText.addEventListener('input', () => {
//     const inputVal = inputText.value.toLowerCase();
//     const buttons = [btnFiguras, btnPeluches, btnRopa, btnCosplay, btnLlaveros, btnManga, btnAccesorios];
  
//     const buttonMatch = buttons.find(button => button.textContent.toLowerCase().includes(inputVal));
  
//     if (buttonMatch) {
//       buttonMatch.click();
//     }
// });
  