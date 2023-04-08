// loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.addEventListener("animationend", () => {
      document.body.removeChild(loader);
    });
  });


  //Mensajes de feedback
  const user = document.getElementById("user");
  const password = document.getElementById("password");
  const msg = document.getElementById("msg");

  //sessionStorage.setItem("LoginMSG" , "");
  msg.innerHTML = sessionStorage.getItem("LoginMSG");
  localStorage.setItem("Logged", "False");


  function Check()
  {
        //Traer la data de la ruta /logincheck que se manda desde el backend (Si se paso los checks del login)
        fetch('/logincheck')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          let flag = data;
          if(flag)
          {
            return true;
          }
          else
          {
            return false;
          }
        });
  }

  function validateInput ()
  {
    let pass = password.value;
    let user1 = user.value;
    if(pass == "" || user1 == "")
    {
       sessionStorage.setItem("LoginMSG","Faltan completar campos");
       msg.innerHTML = sessionStorage.getItem("LoginMSG");
    }
    else if(!Check())
    {
        sessionStorage.setItem("LoginMSG","Nombre de usuario o contraseña incorrectos");
        msg.innerHTML = sessionStorage.getItem("LoginMSG");
    }
    else
    {
        sessionStorage.setItem("LoginMSG","");
        msg.innerHTML = sessionStorage.getItem("LoginMSG");
        localStorage.setItem("Logged","True");
    }
  }