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
    database: 'testing'
  });
  

  //Conexión con la base de datos
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión con la base de datos exitosa');
  });

  //Funcion que coge la data del login y realiza un query de insert a la base de datos
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

  //Prender la escucha en el puerto 3000
  app.listen(port, () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
  });
  