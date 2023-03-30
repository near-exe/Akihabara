//Variables con los metodos de express y mysql
const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');

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

  //Funcion que coge la data del login y realiza un query de insert a la base de datos
  /*
  app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
  
    const sql = `INSERT INTO persons (PersonID, FirstName) VALUES (?, ?)`;
    const values = [id,name];
  
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log('Data insertada en la base de datos');
      res.send('Datos subidos de manera satisfactoria');
    });
  });
*/
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

    const sql = `INSERT INTO usuarios (Username, Password, Direccion, Email) VALUES (?, ?, ?, ?)`;
    const values = [user,password,direction,email];
  
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log('Data insertada en la base de datos');
      
      //En desarrollo, logica para cuando el input paso los tests y puede ser subido
      
      //res.send('Su usuario ha sido registrado de manera satisfactoria!');
      setTimeout(function() {
        res.redirect("./html/login.html");
      }, 5000);
    });
  });

  //Prender la escucha en el puerto 3000
  app.listen(port, () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
  });
  