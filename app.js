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



  //Funcion para el log in de la pagina (En desarrollo)
  app.post('/login-form', (req, res) => {
    const username = req.body.user;
    const password = req.body.password;

    if(username == "" || password == "")
    {
      res.redirect("./html/login.html");
    }
    const sql = 'SELECT * FROM usuarios WHERE Username = ?';
    const values = [username];

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
      }
  
      // Chequear si el user existe en primer lugar
      if (results.length === 0) {
        return res.status(400).send('Invalid username or password');
      }

      //Aqui se guarda lo que devuelve el query, para acceder a cualquier atributo
      //del resultado de ese query, solo es poner user.atributo, en este caso .Password
      const user = results[0];
  
      // Compare entered password with stored hashed password using bcrypt
      bcrypt.compare(password, user.Password, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal server error');
        }

        //Condicional de si las contraseñas son las mismas(Son el mismo hash)
        if (result) {
          res.redirect('./');
        } else {
          res.status(400).send('Invalid username or password');
        }
      });
    });
  });

  //Agregar cantidad de articulos a la base de datos
  app.post('/add', function(req,res){
    let nombre = req.body.articulo;
    let cantidad = parseInt(req.body.cantidad);
    connection.query('SELECT * FROM articulos WHERE Nombre = ?', [nombre] , function(error,results,fields){
      if(error) throw error;

      //Taba pensando como validar que el registro existe , eto ta in progress
      /*
      const count = results[0].count;
      if(count <= 0)
      {
        return res.redirect("./html/admindashboard.html");
      }
      */
      let toSum = parseInt(results[0].Cantidad);
      let toAdd = cantidad+toSum;
      // Query de hacer el cambio en la base de datos
    connection.query('UPDATE articulos SET Cantidad = ? WHERE Nombre = ?', [toAdd, nombre], function (error, results, fields) {
      if (error)
      {
        throw error;
      }
      console.log("Cantidad de articulos agregada");
      res.redirect("./html/admindashboard.html");
      });
    });
  });
  
  //Especie de API que coge las cantidades de la base de datos para poderse usar en el front end
  app.get('/data', function(req, res) {
  connection.query('SELECT cantidad FROM articulos', function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

  //Prender la escucha en el puerto 8080
  app.listen(port, () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
  });
  