// Clase es la definición de un objeto, al crearla le vamos a permitir modificar 3 valores = vida, ataque 
// Dentro de las clases existen los constructores, que son funciones que se disparan al crearse un objeto con esa clase
// This es un indicador de la instancia de donde estoy
// Para agregar variables en las clases, debe ser dentro de constructor, con "this.". De esta forma se referencia la variable a cada objeto que es creado con Pakiman

// En las funciones this. no funciona así, es una referencia para todas las variables que estén dentro de una misma función.

// Creamos un array asociativo, es como un objeto literal. es un array que en vez de tener un indice numerico, es como en forma de diccionario
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var tocinauro = new Pakiman("Tocinauro", 120, 40);

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var pakin of coleccion) // el in y el of nos sirve para recorrer un objeto por dentro, o arrays que no conocemos
{
    pakin.mostrar();
}

for(var x in coleccion[0])  // of itera sobre el objeto, mientras que in en el indice
{
    console.log(x);
}