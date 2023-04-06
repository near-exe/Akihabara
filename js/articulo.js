var FotoPrincipal = document.getElementById("FotoPrincipal");
var FotoChiquita = document.getElementsByClassName("fotosChiquitas");

//Funcion para cambiar foto grande
FotoChiquita[0].onclick = function () {
    FotoPrincipal.src = FotoChiquita[0].src;
}
FotoChiquita[1].onclick = function () {
    FotoPrincipal.src = FotoChiquita[1].src;
}
FotoChiquita[2].onclick = function () {
    FotoPrincipal.src = FotoChiquita[2].src;
}
