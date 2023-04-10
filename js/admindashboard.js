const artColumns = document.querySelectorAll("divisionTabla");
//Tomar la data de todos los articulos en la base de datos
fetch('/articulos')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    
});
//Coger la data que se manda desde el backend(un json con la tabla completa de compras vean la consola para que vean el output)
fetch('/compras')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data.forEach(element => {
      artColumns.forEach(element => {
        const elementDiv = document.createElement('div');
          elementDiv.innerHTML = `<p>${element.Username}</p>`;
          element.appendChild(elementDiv);
      });
    }); 
});

