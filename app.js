//Variables con los metodos de express y mysql
const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;


//Servidor con todos los archivos del proyecto y middlewares para pasar la data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./'));
app.use(express.json());


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
        }, 500);
      });
    });
  });


  
  //Funcion para el log in de la pagina (En desarrollo)
  
  let logged = false; //Variable para tener constancia si esta logueado o no
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
        return res.status(500).send('Error interno del servidor');
      }
  
      // Chequear si el user existe en primer lugar
      if (results.length === 0) {
        logged = false;
        return res.redirect("./html/login.html")
      }

      //Aqui se guarda lo que devuelve el query, para acceder a cualquier atributo
      //del resultado de ese query, solo es poner user.atributo, en este caso .Password
      const user = results[0];
  
      // Compare entered password with stored hashed password using bcrypt
      bcrypt.compare(password, user.Password, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error del servidor');
        }

        //Condicional de si las contraseñas son las mismas(Son el mismo hash)
        if (result) {
          res.redirect('./');
          logged=true;
        } else {
          logged=false;
          return res.redirect("./html/login.html");
        }
      });
    });
  });

  //Agregar cantidad de articulos a la base de datos
  app.post('/add', function(req,res){
    let nombre = req.body.articulo;
    let cantidad = parseInt(req.body.cantidad);
    const query = 'SELECT COUNT(*) AS count FROM articulos WHERE Nombre = ?';
    if(nombre == "" || cantidad == null)
    {
      return res.redirect("./html/admindashboard.html");
    }
    connection.query(query,[nombre], function(error,results,fields) //Este query es para ver si el elemento si quiera existe en la base de datos
    {
      if (error) throw error;
      const count  = results[0].count;
      if(count <= 0)
      {
        return res.redirect("./html/admindashboard.html");
      }
        connection.query('SELECT * FROM articulos WHERE Nombre = ?', [nombre] , function(error,results,fields){
            if(error) throw error;
            let toSum = parseInt(results[0].Cantidad); //Elemento del database que se va a sumar con el del form
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
  });
  
  //API que coge las cantidades de la base de datos para poderse usar en el front end
  app.get('/data', function(req, res) {
  connection.query('SELECT cantidad FROM articulos', function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

let articulos;
//Funcion para conseguir los articulos que tiene el carrito en formato json
app.post('/buy', function(req,res)
{
   articulos = req.body;
});

  let buydata;
  //Funcion para conseguir los datos de la compra
  app.post('/buydata', function(req,res)
  {
    buydata = req.body;
  });

//Funcion para registrar la compra
app.post('/usedata', function(req,res){
  let n =  Object.keys(articulos).length; //Variable con el size del carrito (cantidad de articulos diferentes)
  for(let i = 0; i < n; i++ )
  {
    connection.query('SELECT * FROM articulos WHERE Nombre = ?', [articulos[i].nombre] , function(error,results,fields){
      if(error) throw error;
      let toPush = results[0].Cantidad-articulos[i].cantidad;
      //Chequear si la cantidad que se quiere comprar excede las existencias
      if(articulos[i].cantidad > results[0].Cantidad)
      {
        return res.redirect("./html/carrito.html");
      }
      connection.query('UPDATE articulos SET Cantidad = ? WHERE Nombre = ?', [toPush, articulos[i].nombre], function (error, results, fields) {
          if (error)
          {
            throw error;
          }
          console.log("Cantidad de articulos comprada");
      });
    });
  }
  let user = buydata.user;
  let price = buydata.preciototal;
  let articles = buydata.articulos;
  let cantidad = buydata.cantidad;
  const sql = `INSERT INTO compras (Username, PrecioTotal, Cantidad, Articulos) VALUES (?, ?, ?, ?)`;
  const values = [user,price,cantidad,articles];

  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('Compra insertada en la base de datos');
  });
  res.redirect("./html/confirmacion.html");
});

//Login del admin 
app.post('/admin-form', (req, res) => {
  const username = req.body.user;
  const password = req.body.password;

  if(username == "" || password == "")
  {
    res.redirect("./html/login.html");
  }
  const sql = 'SELECT * FROM admin WHERE Username = ?';
  const values = [username];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error interno del servidor');
    }

    // Chequear si el user existe en primer lugar
    if (results.length === 0) {
      return res.redirect("./html/adminlogin.html")
    }

    //Aqui se guarda lo que devuelve el query, para acceder a cualquier atributo
    //del resultado de ese query, solo es poner user.atributo, en este caso .Password
    const user = results[0];

    // Compare entered password with stored hashed password using bcrypt
    bcrypt.compare(password, user.Password, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error del servidor');
      }

      //Condicional de si las contraseñas son las mismas(Son el mismo hash)
      if (result) {
        res.redirect('./html/admindashboard.html');
      } else {
        return res.redirect("./html/adminlogin.html");
      }
    });
  });
});

app.get('/compras', function(req, res) {
  connection.query('SELECT * FROM compras', function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/articulos', function(req, res) {
  connection.query('SELECT * FROM articulos', function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});


  //Prender la escucha en el puerto 8080
  app.listen(port, () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
  });
  

