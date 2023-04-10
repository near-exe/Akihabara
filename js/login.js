// loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.addEventListener("animationend", () => {
      document.body.removeChild(loader);
    });
  });


// después de que se verifique el inicio de sesión del usuario y se obtenga el nombre de usuario INTENTO 1
// localStorage.setItem('username', nombreDeUsuario);

// Obtener referencia al botón de login y al input de nombre de usuario INTENTO 2
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');

// Agregar evento click al botón de login
loginBtn.addEventListener('click', function() {
  // Obtener el nombre de usuario ingresado
  const username = usernameInput.value.trim();
  
  // Verificar si se ingresó un nombre de usuario válido
  if (username !== '') {
    // Guardar el nombre de usuario en el localStorage
    localStorage.setItem('username', username);
    
  }
});
