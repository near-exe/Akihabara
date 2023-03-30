//Jacascript client side para manejar los input client side y mostrar mensajes de error 

const password = document.getElementById("Password");
const user = document.getElementById("Usuario");
const email = document.getElementById("Email");
const direction = document.getElementById("Direccion");
const msg = document.getElementById("msg");

//Session storage es para mantener persistencia del mensaje aunque se haga reload a la pagina,
//necesita unos fixes pero esta casi completa
msg.innerHTML = sessionStorage.getItem("MSG");

//Funcion que valida el input client side, hace los mismos checks que el server side pero 
//esta funcion despliega los mensajes de error y los guarda en variables de local storage
function validateInput ()
{
    let pass = password.value;
    let user1 = user.value;
    let email1 = email.value;
    let direction1 = direction.value;
    const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(pass == "" || user1 == "" || email1 == "" || direction1 == "")
    {
       sessionStorage.setItem("MSG","Faltan completar campos");
       msg.innerHTML = sessionStorage.getItem("MSG");
    }
    else if(pattern.test(pass))
    {
        sessionStorage.setItem("MSG","La contraseña contiene caracteres no permitidos (Ejemplo: ?,/*+-_)");
        msg.innerHTML = sessionStorage.getItem("MSG");
    }
    else
    {
        sessionStorage.setItem("MSG","");
        msg.innerHTML = sessionStorage.getItem("MSG");
    }
}