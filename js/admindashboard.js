//Coger la data que se manda desde el backend(un json con la tabla completa de compras vean la consola para que vean el output)
fetch('/compras')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
});
