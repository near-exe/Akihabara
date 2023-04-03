//Variables con los metodos de express y mysql
const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Servidor con todos los archivos del proyecto
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./'));

//Variable con la conexion a la base de datos y sus metodos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'akihabara'
  });
  

  //Conexión con la base de datos
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión con la base de datos exitosa');
  });

  
  //Chequear si la contraseña tiene un caracter que no es alfanumérico
  function PassCheck(password)
  {
    const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if(pattern.test(password))
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  //Chequear si alguno de los inputs esta vacío
  function isEmpty(s1,s2,s3,s4)
  {
    if(s1 == "" || s2 == "" || s3 == "" || s4 == "")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  app.post('/submit-form', (req, res) => {
    const user = req.body.Usuario;
    const password = req.body.password;
    const direction = req.body.Direccion;
    const email = req.body.Email;
    
    //Validacion del input, si algo esta mal se redirecciona al sign up denuevo con un mensaje de error que se
    //manda client side.
    if(!PassCheck(password) || isEmpty(user,password,direction,email))
    {
      return res.redirect('./html/signup.html');
    }

    //Hashing de la contraseña,saltRounds es la complejidad con la que se va a encriptar el string
    bcrypt.hash(password,saltRounds, (err,hash)=>{
      if(err)
      {
        console.error(err);
      }
      const sql = `INSERT INTO usuarios (Username, Password, Direccion, Email) VALUES (?, ?, ?, ?)`;
      const values = [user,hash,direction,email];
    
      connection.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log('Data insertada en la base de datos');
        setTimeout(function() {
          res.redirect("./html/login.html");
        }, 5000);
      });
    });
  });

  //Prender la escucha en el puerto 3000
  app.listen(port, () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
  });
  