
// Obtener el botón presionado desde el query string de la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articulo = urlParams.get('articulo');

// Obtener el elemento del DOM donde se mostrará la información del artículo
const idElement = document.getElementById('ID');
const tituloElement = document.getElementById('titulo');
const descripcionElement = document.getElementById('descripcion');
const precioVisible = document.getElementById('precio');
const precioNum = document.getElementById('precioNum'); 
const FotoPrincipal = document.getElementById('FotoPrincipal');
const FotoChiquita = document.getElementsByClassName("fotosChiquitas");

// Mostrar la información correspondiente al artículo
if (articulo === '1') {
  tituloElement.textContent = 'Tanjiro';
  descripcionElement.textContent = 'Esta figura de acción de Tanjiro Kamado de Demon Slayer: Kimetsu no Yaiba mide 60 centímetros de alto y está hecha de material de PVC de alta calidad. Es una figura altamente detallada y es perfecta para los fanáticos de Demon Slayer que quieran coleccionar productos de alta calidad de su personaje favorito.';
  precioVisible.textContent='$100.69'
  FotoPrincipal.src = '../imagenes/tanjiro1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/tanjiro3.jpg';
  FotoChiquita[2].src ='../imagenes/tanjiro2.jpg';
  precioNum.textContent = '100.69';
  idElement.textContent = articulo;

} else if (articulo === '2') {
  tituloElement.textContent = 'Boku no hero set';
  descripcionElement.textContent = 'Este conjunto de figuras de Boku no Hero Academia presenta a los personajes principales de la serie de anime y manga. Cada figura mide aproximadamente 10 centímetros de alto y está hecha de material de PVC de alta calidad. Este conjunto de figuras de Boku no Hero Academia es perfecto para los fanáticos de la serie que quieren coleccionar productos de alta calidad de sus personajes favoritos.'
  precioVisible.textContent='$499.49'
  FotoPrincipal.src = '../imagenes/bokunohero1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/bokunohero1.jpg';
  FotoChiquita[2].src ='../imagenes/bokunohero1.jpg';
  precioNum.textContent = '499.49';
  idElement.textContent = articulo;

} else if (articulo === '3') {
  tituloElement.textContent = 'Cosplay Zenitsu';
  descripcionElement.textContent = 'Este cosplay de Zenitsu Agatsuma de Demon Slayer: Kimetsu no Yaiba es una réplica impresionante del atuendo del personaje. Incluye la gabardina amarilla y naranja con capucha, pantalones y zapatillas blancas. El cosplay también presenta el pendiente característico de Zenitsu en la oreja derecha y una peluca amarilla para replicar su cabello distintivo. Este traje es una opción perfecta para los fanáticos de Zenitsu que buscan un cosplay auténtico y detallado.';
  precioVisible.textContent='$99.99'
  FotoPrincipal.src = '../imagenes/cosplay-zenitsu-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/cosplay-zenitsu-1RB.png';
  FotoChiquita[2].src ='../imagenes/cosplay-zenitsu-1RB.png';
  precioNum.textContent = '99.99';
  idElement.textContent = articulo;
}
else if (articulo === '4') {
  tituloElement.textContent = 'Deku';
  descripcionElement.textContent = 'Esta figura de Deku de Boku no Hero Academia es una representación detallada y fiel del personaje principal. Con una altura de alrededor de 15 centímetros y hecha de material de PVC de alta calidad, presenta a Deku en su icónico traje de héroe verde y negro, con varios puntos de articulación para diferentes poses de acción. Esta figura es una excelente adición a la colección de cualquier fanático de Boku no Hero Academia.'
  precioVisible.textContent='$110.99'
  FotoPrincipal.src = '../imagenes/deku1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/deku1.jpg';
  FotoChiquita[2].src ='../imagenes/deku1-RB.png';
  precioNum.textContent = '110.99';
  idElement.textContent = articulo;
}
else if (articulo === '5') {
  tituloElement.textContent = 'Itadori';
  descripcionElement.textContent = 'Esta figura de Itadori de Jujutsu Kaisen es una impresionante representación del personaje principal. Mide aproximadamente 17 centímetros de alto y está hecha de material de PVC de alta calidad. La figura presenta a Itadori en su uniforme de jujutsu, con detalles finos y precisos en su diseño. Además, tiene varios puntos de articulación que permiten colocarlo en diferentes poses de acción. Esta figura es una excelente opción para los fanáticos de Jujutsu Kaisen que buscan una representación auténtica y detallada de su personaje favorito.'
  precioVisible.textContent='$120.49'
  FotoPrincipal.src = '../imagenes/jujutsukaisen1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/jujutsukaisen2.jpg';
  FotoChiquita[2].src ='../imagenes/jujutsukaisen3.jpg';
  precioNum.textContent = '120.49';
  idElement.textContent = articulo;
}
else if (articulo === '6') {
  tituloElement.textContent = 'Llaveros haikyuu';
  descripcionElement.textContent = 'Estos llaveros de Haikyuu son una excelente opción para los fanáticos del anime y del voleibol. Hechos de material de PVC de alta calidad. Cada llavero mide alrededor de 5 centímetros de altura y tiene un gancho de metal para sujetarlo fácilmente a las llaves, bolsos o cualquier otro objeto. Los detalles precisos en cada llavero hacen que sean una adición imprescindible para cualquier colección de Haikyuu.'
  precioVisible.textContent='$9.49'
  FotoPrincipal.src = '../imagenes/llaveros-haikyuu-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/llaveros-haikyuu-1RB.png';
  FotoChiquita[2].src ='../imagenes/llaveros-haikyuu-1RB.png';
  precioNum.textContent = '9.49';
  idElement.textContent = articulo;
}
else if (articulo === '7') {
  tituloElement.textContent = 'sololeveling manga';
  descripcionElement.textContent = 'El manga de Solo Leveling es una adaptación del popular manhwa coreano del mismo nombre. La historia sigue a Jinwoo Sung, un cazador de rango E que se encuentra atrapado en un mundo donde monstruos y cazadores existen. Después de sobrevivir a una mazmorra de nivel D solo, Jinwoo adquiere una habilidad única que le permite subir de nivel y convertirse en un cazador más poderoso. A medida que se adentra en misiones más peligrosas y descubre secretos ocultos sobre el mundo de los cazadores, Jinwoo debe luchar por proteger a su familia y amigos. El manga está lleno de acción emocionante, personajes interesantes y un mundo de fantasía vibrante.'
  precioVisible.textContent='$99.49'
  FotoPrincipal.src = '../imagenes/manga-sololeveling-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/manga-sololeveling-1RB.png';
  FotoChiquita[2].src ='../imagenes/manga-sololeveling-1RB.png';
  precioNum.textContent = '99.49';
  idElement.textContent = articulo;
}
else if (articulo === '8') {
  tituloElement.textContent = 'Naruto';
  descripcionElement.textContent = 'Esta figura de Naruto es una representación detallada y fiel del personaje principal en su icónico traje naranja y negro. Con una altura de aproximadamente 15 centímetros y hecha de material de PVC de alta calidad, presenta a Naruto con su cabeza de zorro, con detalles finos y precisos en su diseño. La figura también tiene varios puntos de articulación que permiten colocarla en diferentes poses de acción. Esta figura es una excelente opción para los fanáticos de Naruto que buscan una representación auténtica y detallada de su personaje favorito en una pose icónica.'
  precioVisible.textContent='$199.49'
  FotoPrincipal.src = '../imagenes/naruto1-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/naruto2.png';
  FotoChiquita[2].src ='../imagenes/naruto4.png';
  precioNum.textContent = '199.49';
  idElement.textContent = articulo;
}
else if (articulo === '9') {
  tituloElement.textContent = 'Gojo';
  descripcionElement.textContent = 'Gojo Satoru es uno de los personajes principales del manga y anime Jujutsu Kaisen. Es un hechicero poderoso y carismático, con habilidades únicas como la manipulación del espacio y la capacidad de neutralizar maldiciones. Tiene una personalidad alegre y despreocupada, pero también puede ser muy astuto y manipulador cuando se trata de proteger a sus seres queridos y cumplir con su deber como Jujutsu Sorcerer.'
  precioVisible.textContent='$299.49'
  FotoPrincipal.src = '../imagenes/figura-gojo-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/figura-gojo-2.png';
  FotoChiquita[2].src ='../imagenes/figura-gojo-3.png';
  precioNum.textContent = '299.49';
  idElement.textContent = articulo;
}
else if (articulo === '10') {
  tituloElement.textContent = 'Nagi';
  descripcionElement.textContent = 'Esta figura de Nagi de Bluelock es una representación fiel y detallada del personaje. Con una altura de aproximadamente 18 centímetros, está hecha de material de PVC de alta calidad y presenta a Nagi en su uniforme de fútbol. La figura también tiene varios puntos de articulación que permiten colocarla en diferentes poses de acción.'
  precioVisible.textContent='$279.09'
  FotoPrincipal.src = '../imagenes/figura-nagi-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/figura-nagi-2.png';
  FotoChiquita[2].src ='../imagenes/figura-nagi-3.png';
  precioNum.textContent = '279.09';
  idElement.textContent = articulo;
}
else if (articulo === '11') {
  tituloElement.textContent = 'Peluche Gojo';
  descripcionElement.textContent = 'Este peluche de Gojo es una adición suave y esponjosa a cualquier colección de merchandising de Jujutsu Kaisen. Con una altura de aproximadamente 20 centímetros, está hecho de material de felpa de alta calidad y presenta a Gojo en su icónico atuendo y con su cabello blanco y ojos vendados. El peluche es perfecto para abrazar o exhibir en un estante junto a otras figuras y artículos de Jujutsu Kaisen.'
  precioVisible.textContent='$19.09'
  FotoPrincipal.src = '../imagenes/figura-nagi-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/figura-nagi-2.png';
  FotoChiquita[2].src ='../imagenes/figura-nagi-3.png';
  precioNum.textContent = '19.09';
  idElement.textContent = articulo;
}
else if (articulo === '12') {
  tituloElement.textContent = 'Peluche Kakashi';
  descripcionElement.textContent = 'Este peluche de Kakashi es una adición suave y encantadora a cualquier colección de merchandising de Naruto. Con una altura de aproximadamente 20 centímetros, está hecho de material de felpa de alta calidad y presenta a Kakashi en su icónico atuendo de ninja y con su máscara negra. El peluche es perfecto para abrazar o exhibir en un estante junto a otras figuras y artículos de Naruto.'
  precioVisible.textContent='$19.09'
  FotoPrincipal.src = '../imagenes/peluche-kakashi-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/peluche-kakashi-2.png';
  FotoChiquita[2].src ='../imagenes/peluche-kakashi-3.png';
  precioNum.textContent = '19.09';
  idElement.textContent = articulo;
}
else if (articulo === '13') {
  tituloElement.textContent = 'Peluche Koro';
  descripcionElement.textContent = 'Este peluche de Koro Sensei es una adición suave y adorable a cualquier colección de merchandising de Assassination Classroom. Con una altura de aproximadamente 20 centímetros, está hecho de material de felpa de alta calidad y presenta a Koro Sensei en su forma de pulpo amarillo. El peluche es perfecto para abrazar o exhibir en un estante junto a otras figuras y artículos de Assassination Classroom.'
  precioVisible.textContent='$19.09'
  FotoPrincipal.src = '../imagenes/peluche-koro-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/peluche-koro-2.png';
  FotoChiquita[2].src ='../imagenes/peluche-koro-3.png';
  precioNum.textContent = '19.09';
  idElement.textContent = articulo;
}
else if (articulo === '14') {
  tituloElement.textContent = 'Kunai';
  descripcionElement.textContent = 'Este kunai de Naruto es una réplica auténtica del arma utilizada por los ninjas en la serie. Con una longitud de aproximadamente 25 centímetros, está hecho de material de acero inoxidable resistente y cuenta con detalles precisos en su diseño, incluyendo la envoltura de cuero en el mango y el símbolo de Konoha en la hoja. Este kunai es perfecto para los fanáticos de Naruto que buscan agregar un toque auténtico a su cosplay o para exhibir en una colección de armas ninja.'
  precioVisible.textContent='$15.09'
  FotoPrincipal.src = '../imagenes/accesorios-kunais-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/accesorios-kunais-2.png';
  FotoChiquita[2].src ='../imagenes/accesorios-kunais-3.png';
  precioNum.textContent = '15.09';
  idElement.textContent = articulo;
}
else if (articulo === '15') {
  tituloElement.textContent = 'Kisame';
  descripcionElement.textContent = 'Esta figura de Kisame es una representación impresionante y detallada del infame ninja de la serie Naruto. Con una altura de aproximadamente 22 centímetros, está hecha de material de PVC de alta calidad y presenta a Kisame con su característica apariencia de tiburón. Es perfecta para cualquier fanático de Naruto que desee agregar a Kisame a su colección de figuras.'
  precioVisible.textContent='$300.09'
  FotoPrincipal.src = '../imagenes/figuras-kisame-1.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/figuras-kisame-2.png';
  FotoChiquita[2].src ='../imagenes/figuras-kisame-3.png';
  precioNum.textContent = '300.09';
  idElement.textContent = articulo;
}
else if (articulo === '16') {
  tituloElement.textContent = 'Pochita';
  descripcionElement.textContent = 'Este peluche de Pochita es una adición suave y encantadora a cualquier colección de merchandising de Chainsaw Man. Con una altura de aproximadamente 20 centímetros, está hecho de material de felpa de alta calidad y presenta a Pochita en su forma de perro demonio. El peluche tiene detalles precisos en su diseño, incluyendo sus grandes ojos rojos y sus afilados dientes. Es perfecto para abrazar o exhibir en un estante junto a otras figuras y artículos de Chainsaw Man.'
  precioVisible.textContent='$30.49'
  FotoPrincipal.src = '../imagenes/peluche-pochita-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/peluche-pochita-2RB.png';
  FotoChiquita[2].src ='../imagenes/peluche-pochita-3RB.png';
  precioNum.textContent = '30.49';
  idElement.textContent = articulo;
}
else if (articulo === '17') {
  tituloElement.textContent = 'Abrigo gojo';
  descripcionElement.textContent = 'Este abrigo con la imagen de Gojo es una prenda de vestir elegante y llamativa que presenta una impresión nítida y detallada del personaje de Jujutsu Kaisen. Hecho de materiales de alta calidad, el abrigo es cómodo de usar y tiene un diseño unisex que lo hace adecuado para cualquier fanático de la serie. Además de ser una excelente pieza de moda para usar en cualquier ocasión, este abrigo también es una adición fantástica a cualquier colección de merchandising de Jujutsu Kaisen.'
  precioVisible.textContent='$79.10'
  FotoPrincipal.src = '../imagenes/ropa-gojo-1RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/ropa-gojo-2RB.png';
  FotoChiquita[2].src ='../imagenes/ropa-gojo-3RB.png';
  precioNum.textContent = '79.10';
  idElement.textContent = articulo;
}
else if (articulo === '18') {
  tituloElement.textContent = 'Abrigo jujutsu';
  descripcionElement.textContent = 'Este abrigo de Jujutsu Kaisen presenta una impresión detallada de Itadori y Gojo en la parte posterior, lo que lo hace perfecto para cualquier fanático de la serie. El abrigo es elegante y cómodo de usar, con un diseño unisex que lo hace adecuado para cualquier persona. Además de ser una prenda de moda llamativa, este abrigo también es una excelente adición a cualquier colección de merchandising de Jujutsu Kaisen.'
  precioVisible.textContent='$79.10'
  FotoPrincipal.src = '../imagenes/Ropa-gojo-itadori.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/Ropa-gojo-itadori2.png';
  FotoChiquita[2].src ='../imagenes/Ropa-gojo-itadori3.png';
  precioNum.textContent = '79.10';
  idElement.textContent = articulo;
}
else if (articulo === '19') {
  tituloElement.textContent = 'Accesorios ninja';
  descripcionElement.textContent = 'Estos accesorios ninja de Naruto son una excelente adición a cualquier cosplay o disfraz de la serie. El conjunto incluye una diadema con el emblema de la hoja de la aldea de Konoha, y dos kunais de plástico con detalles detallados. Estos accesorios también son excelentes para cualquier fanático de Naruto que busque agregar un toque auténtico a su colección de merchandising.'
  precioVisible.textContent='$39.49'
  FotoPrincipal.src = '../imagenes/accesorios-RB.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/accesorios-RB1.png';
  FotoChiquita[2].src ='../imagenes/accesorios-RB2.png';
  precioNum.textContent = '39.49';
  idElement.textContent = articulo;
}
else if (articulo === '20') {
  tituloElement.textContent = 'Llavero Naruto';
  descripcionElement.textContent = 'Este llavero de kunai de Naruto es el complemento perfecto para cualquier fanático de la serie. El kunai está detallado con la empuñadura y hoja típica de la herramienta ninja, y tiene un acabado plateado brillante. Además de ser un llavero funcional, también es una excelente adición a cualquier colección de merchandising de Naruto, y es una forma fácil de mostrar tu amor por la serie.'
  precioVisible.textContent='$13.69'
  FotoPrincipal.src = '../imagenes/llavero-Naruto.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/llavero-Naruto.png';
  FotoChiquita[2].src ='../imagenes/llavero-Naruto.png';
  precioNum.textContent = '13.69';
  idElement.textContent = articulo;
}
else if (articulo === '21') {
  tituloElement.textContent = 'Cosplay Akatsuki';
  descripcionElement.textContent = 'Un cosplay de la capa de Akatsuki es una excelente manera de hacer una entrada dramática en cualquier evento de cosplay o convención. La capa presenta un diseño llamativo y reconocible, con el emblema rojo de Akatsuki en la espalda y un patrón nuboso en todo el material negro. Además, el cosplay viene con accesorios adicionales como anillos y el sombrero de paja de Akatsuki para completar el look. Si eres un fanático de Naruto y estás buscando un disfraz impresionante, la capa de Akatsuki es definitivamente una opción a considerar.'
  precioVisible.textContent='$25.49'
  FotoPrincipal.src = '../imagenes/cosplay-Akatsuki01.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/cosplay-Akatsuki02.png';
  FotoChiquita[2].src ='../imagenes/cosplay-Akatsuki03.png';
  precioNum.textContent = '25.49';
  idElement.textContent = articulo;
} 
else if (articulo === '22') {
  tituloElement.textContent = 'Cosplay Minato';
  descripcionElement.textContent = 'La capa de Minato es un elemento icónico de la serie Naruto. Con su diseño elegante y reconocible, la capa presenta un fondo blanco con adornos rojos y naranjas. El emblema del pueblo de Konoha en la espalda es fácilmente reconocible por cualquier fanático de la serie. Además de ser un elemento clave para cualquier cosplay de Minato, la capa también es una excelente adición a cualquier colección de merchandising de Naruto. Con su combinación de estilo y simbolismo, la capa de Minato es una pieza de ropa única y atractiva para cualquier fanático de la serie.'
  precioVisible.textContent='$30.49'
  FotoPrincipal.src = '../imagenes/cosplay-Minato01.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/cosplay-Minato02.png';
  FotoChiquita[2].src ='../imagenes/cosplay-Minato03.png';
  precioNum.textContent = '30.49';
  idElement.textContent = articulo;
}
else if (articulo === '23') {
  tituloElement.textContent = 'Cosplay Sonic';
  descripcionElement.textContent = 'Este cosplay de Sonic es la elección perfecta para cualquier fan de los videojuegos. Con su estilo auténtico y detallado, esta indumentaria presenta una camiseta, pantalones y guantes a juego en el icónico color azul de Sonic. La cabeza de Sonic está representada por una mascarilla facial y peluca de alta calidad, mientras que los zapatos rojos distintivos completan el look. Agrega las orejas y la cola opcionales para llevar tu cosplay al siguiente nivel. Con este cosplay completo de Sonic, estarás listo para correr a toda velocidad en tu próxima convención o evento temático.'
  precioVisible.textContent='$30.49'
  FotoPrincipal.src = '../imagenes/cosplay-Sonic01-removebg-preview.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/cosplay-Sonic01.jpg';
  FotoChiquita[2].src ='../imagenes/cosplay-Sonic02.jpg';
  precioNum.textContent = '30.49';
  idElement.textContent = articulo;
}
else if (articulo === '24') {
  tituloElement.textContent = 'Llavero Goku';
  descripcionElement.textContent = 'Este llavero de Goku es un accesorio imprescindible para cualquier fan de Dragon Ball. Presenta una figura en miniatura del legendario guerrero Saiyan en su icónica pose de lucha, con una atención excepcional al detalle en su diseño. El llavero es resistente y duradero, lo que lo hace ideal para usar todos los días y mostrar tu amor por Goku. Con su tamaño compacto, también es perfecto para llevar en tu bolsillo o en tu llavero. Este llavero de Goku es un regalo perfecto para cualquier fanático de la serie que quiera llevar su amor por Dragon Ball siempre con ellos.'
  precioVisible.textContent='$8.49'
  FotoPrincipal.src = '../imagenes/llavero-Goku.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/llavero-Goku1.png';
  FotoChiquita[2].src ='../imagenes/llavero-Goku2.png';
  precioNum.textContent = '8.49';
  idElement.textContent = articulo;
}
else if (articulo === '25') {
  tituloElement.textContent = 'Llavero Zoro';
  descripcionElement.textContent = 'Este llavero de Zoro es un accesorio perfecto para cualquier fan de One Piece. Presenta una figura en miniatura del espadachín de la tripulación de los Sombreros de Paja en su icónica pose de lucha, con una atención excepcional al detalle en su diseño. El llavero es resistente y duradero, lo que lo hace ideal para usar todos los días y mostrar tu amor por Zoro. Con su tamaño compacto, también es perfecto para llevar en tu bolsillo o en tu llavero. Este llavero de Zoro es un regalo perfecto para cualquier fanático de la serie que quiera llevar su amor por One Piece siempre con ellos.'
  precioVisible.textContent='$7.99'
  FotoPrincipal.src = '../imagenes/llavero-Zoro.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/llavero-Zoro1.png';
  FotoChiquita[2].src ='../imagenes/llavero-Zoro2.png';
  precioNum.textContent = '7.99';
  idElement.textContent = articulo;
}
else if (articulo === '26') {
  tituloElement.textContent = 'Llavero One Piece';
  descripcionElement.textContent = 'Este llavero de One Piece cuenta con el icónico sombrero de paja de Monkey D. Luffy, el protagonista de la serie, en un diseño detallado y de alta calidad. Hecho de materiales duraderos, este llavero es el complemento perfecto para cualquier fanático de One Piece que quiera mostrar su amor por la serie en su vida cotidiana. Con un tamaño compacto, es fácil de llevar a cualquier lugar y es un gran regalo para cualquier amante del anime y manga.'
  precioVisible.textContent='$8.99'
  FotoPrincipal.src = '../imagenes/llavero-OnePiece.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/llavero-OnePiece1.png';
  FotoChiquita[2].src ='../imagenes/llavero-OnePiece2.png';
  precioNum.textContent = '8.99';
  idElement.textContent = articulo;
}
else if (articulo === '27') {
  tituloElement.textContent = 'Manga Kimetsu';
  descripcionElement.textContent = '"Kimetsu no Yaiba" es un manga de acción y aventuras que sigue la historia de Tanjiro Kamado, un joven que busca venganza después de que su familia fue asesinada por demonios. Con la ayuda de sus amigos y de su espada, Tanjiro enfrenta a poderosos demonios en su búsqueda por encontrar una cura para su hermana que se convirtió en demonio. La trama intrigante, los personajes bien desarrollados y el arte impresionante hacen de este manga una experiencia emocionante y cautivadora para cualquier fan del género.'
  precioVisible.textContent='$129.99'
  FotoPrincipal.src = '../imagenes/manga-kimetsuNoYaiba.jpg';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/manga-kimetsuNoYaiba1.jpg';
  FotoChiquita[2].src ='../imagenes/manga-kimetsuNoYaiba2.jpg';
  precioNum.textContent = '129.99';
  idElement.textContent = articulo;
}
else if (articulo === '28') {
  tituloElement.textContent = 'Manga BNHA';
  descripcionElement.textContent = 'El manga de Boku no Hero Academia, creado por Kohei Horikoshi, es una emocionante aventura de superhéroes que sigue las hazañas de Izuku Midoriya y sus amigos en la academia U.A. High School. Con una trama emocionante y personajes entrañables, este manga se ha convertido en uno de los más populares del género shonen en los últimos años. Desde la lucha contra villanos peligrosos hasta los enfrentamientos entre los estudiantes, el manga de BNHA nunca deja de emocionar a sus lectores.'
  precioVisible.textContent='$115.49'
  FotoPrincipal.src = '../imagenes/manga-BokuNoHero.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/manga-BokuNoHero.png';
  FotoChiquita[2].src ='../imagenes/manga-BokuNoHero.png';
  precioNum.textContent = '115.49';
  idElement.textContent = articulo;
}
else if (articulo === '29') {
  tituloElement.textContent = 'Manga Tokyo Ghoul';
  descripcionElement.textContent = 'El manga de Tokyo Ghoul, creado por Sui Ishida, es un oscuro y emocionante relato de horror y acción que sigue la vida de Kaneki Ken, un joven universitario que se convierte en mitad humano, mitad ghoul después de ser atacado por uno de ellos. A medida que Kaneki lucha por su lugar en un mundo peligroso y dividido, se encuentra con una serie de personajes complejos y conflictivos, cada uno luchando por su propia supervivencia y propósito en la sociedad de ghouls y humanos. Con una narrativa emocionalmente intensa y arte detallado y expresivo, Tokyo Ghoul es un manga imprescindible para los fanáticos del género de horror y la narración de historias intrigantes.'
  precioVisible.textContent='$85.49'
  FotoPrincipal.src = '../imagenes/manga-TokyoGhoul.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/manga-TokyoGhou2.png';
  FotoChiquita[2].src ='../imagenes/manga-TokyoGhou3.png';
  precioNum.textContent = '85.49';
  idElement.textContent = articulo;
}
else if (articulo === '30') {
  tituloElement.textContent = 'Manga One Piece';
  descripcionElement.textContent = 'El manga de One Piece es una obra de Eiichiro Oda que sigue las aventuras de Monkey D. Luffy, un joven pirata con la habilidad de estirarse como un chicle después de comer una Fruta del Diablo. Junto con su tripulación, los Piratas del Sombrero de Paja, Luffy busca el legendario tesoro conocido como One Piece mientras se enfrenta a enemigos poderosos y descubre secretos sobre su pasado. El manga se ha publicado desde 1997 y ha sido adaptado a múltiples formas de medios, incluyendo anime, películas y videojuegos. Es uno de los mangas más populares y de mayor duración en la historia de la industria.'
  precioVisible.textContent='$99.99'
  FotoPrincipal.src = '../imagenes/manga-OnePiece.png';
  FotoChiquita[0].src = FotoPrincipal.src;
  FotoChiquita[1].src ='../imagenes/manga-OnePiece.png';
  FotoChiquita[2].src ='../imagenes/manga-OnePiece.png';
  precioNum.textContent = '99.99';
  idElement.textContent = articulo;
}
else {
  tituloElement.textContent = 'Artículo no encontrado';
  descripcionElement.textContent = 'Lo sentimos, el artículo solicitado no existe.';
}



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



// Obtener referencia al span donde se mostrará el nombre de usuario
const usernameSpan = document.getElementById('username');
// Obtener el nombre de usuario del localStorage
const username = localStorage.getItem('username');

// Mostrar el nombre de usuario si está guardado en localStorage
if (username) {
    usernameSpan.textContent = username;
}

// Obtener referencias a los elementos HTML relevantes
const loginLink = document.getElementById('login-link');
const carrito = document.getElementById('cart-nav');

// Verificar si el nombre de usuario está almacenado en localStorage
if (username) {
    // Mostrar el username
    usernameSpan.style.display = 'inline-block';
    // Si hay un nombre de usuario almacenado, mostrarlo en el span y cambiar el texto del enlace a "Logout"
    usernameSpan.textContent = username;
    loginLink.textContent = 'Logout';
    loginSignup.textContent = 'LOGOUT';
    // Agregar un manejador de eventos para el enlace de "Logout" que borra el nombre de usuario del localStorage y recarga la página
    loginLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir la acción predeterminada del enlace
      localStorage.removeItem('username'); // Borrar el nombre de usuario del localStorage
      window.location.reload(); // Recargar la página
    });
    
  }else{
    usernameSpan.style.display = 'none'; // Ocultar el username
}

// agregar cosas al carrito
const compraAnuncio = document.getElementById('compra-anuncio');

// función para agregar una carta al carrito
function agregarAlCarrito(carta) {
	// obtener el carrito actual desde localStorage o crear uno vacío
	let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

	// verificar si la carta ya está en el carrito
	const index = carrito.findIndex(c => c.id === carta.id);

	if (index !== -1) {
		// si la carta ya está en el carrito, aumentar su cantidad
		carrito[index].cantidad++;
	} else {
		// si la carta no está en el carrito, agregarla
		carrito.push({...carta, cantidad: 1});
	}

	// guardar el carrito actualizado en localStorage
	localStorage.setItem('carrito', JSON.stringify(carrito));

    // anuncio "¡Artículo agregado!"
    compraAnuncio.style.display = 'block';
    setTimeout(function() {
        compraAnuncio.style.display = 'none';
    }, 2000);
}

//Traer la data de la ruta /data que se manda desde el backend (Las cantidad de articulos)
fetch('/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //Codigo que va a ocurrir con la data que coge del backend
    console.log(data);  // rn solo un console log para ver que la data se manda bien
});