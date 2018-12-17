var vp = document.getElementById("villaplatzi"); //El canvas en html
var papel = vp.getContext("2d"); // Traemos contexto 2d para el canvas

// Creamos objetos literales con propiedades para cada una de las imágenes
var fondo =
{
    url: "tile.png",
    cargaOK: false // cargaOK es para indicar que el elemento está cargado y listo para trabajar con el
};

var vaca = 
{
    url: "vaca.png",
    cargaOK: false
};

var cerdo = 
{
    url: "cerdo.png",
    cargaOK: false
};

var pollo = 
{
    url: "pollo.png",
    cargaOK: false
};
//

var cantidad = aleatorio(1, 5);

fondo.imagen = new Image(); // Es como crear un objeto, es una clase = definición completa de un objeto. Un Image es el equivalente a una etiqueta IMG en HTML
fondo.imagen.src = fondo.url; // Para cargar la fuente de la imagen le pasamos la url por el atributo .src que es una variable de la clase Image. Cuando se pasan estos datos se dispara el evento de carga en "load"
fondo.imagen.addEventListener("load", cargarFondo); //Creamos la función para poder manipular la imagen cargada

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true; // Le indicamos que cuando fondo.cargaOK se detecta en el evento "load" cargaOK es verdadero
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true; // Le indicamos que cuando fondo.cargaOK se detecta en el evento "load" cargaOK es verdadero
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true; // Le indicamos que cuando fondo.cargaOK se detecta en el evento "load" cargaOK es verdadero
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true; // Le indicamos que cuando fondo.cargaOK se detecta en el evento "load" cargaOK es verdadero
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK) // No es necesario poner TRUE, ya que el if solo se ejecuta cuando algo es verdad, ya es dado por sentado
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x,y)
        }       
    }
    if(cerdo.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x,y)
        }     
    }
    if(pollo.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x,y)
        }
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.round(Math.random() * (maxi - min)) + min;
    return resultado;
}