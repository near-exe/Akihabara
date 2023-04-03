const destinationContainer = document.querySelector(".destination-container");

const elementData = JSON.parse(localStorage.getItem("elementToTransfer"));

if (elementData) {
  const element = document.createElement("div");
  element.innerHTML = elementData.html;
  element.id = elementData.id;
  
  destinationContainer.appendChild(element);
}
