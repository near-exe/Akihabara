//Variables con los metodos de express/mysql/y el servidor https
const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');

//app.use(express.urlencoded({ extended: true }));

const server = http.createServer((req, res) => {
    const filePath = req.url === '/' ? './index.html' : `.${req.url}`;
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
    }
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == 'ENOENT') {
          res.writeHead(404);
          res.end('404 Not Found');
        } else {
          res.writeHead(500);
          res.end(`Error 500, problema con el servidor: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

//Prender la escucha en el puerto 3000
server.listen(port, () => {
  console.log(`El server esta corriendo en el puerto ${port}`);
});

//Variable con la conexion a la base de datos y sus metodos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'persons'
  });
  

  //Conexión con la base de datos
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión con la base de datos exitosa');
  });