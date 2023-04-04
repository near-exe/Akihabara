const destinationContainer = document.querySelector(".destination-container");
const elementData = JSON.parse(localStorage.getItem("elementToTransfer"));
const eliminarButton = document.getElementById("eliminar-button");

if (elementData) {
  const element = document.createElement("div");
  element.innerHTML = elementData.html;
  element.id = elementData.id;
  
  destinationContainer.appendChild(element);
}

eliminarButton.addEventListener("click", () => {
    localStorage.removeItem("elementToTransfer");
    elementDestino.innerHTML = "";
    location.reload(); // recarga la página, no funciona sheesh
  });

  function ocultarDiv() {
    var div = document.getElementById("miDiv");
    div.style.display = "none";
  }
  

