var teclas = // Creamos un objeto literal conteniendo las teclas que usaremos
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado); // Detectamos cuando se sueltan las teclas para la función dibujarTeclado
var cuadro = document.getElementById("area_de_dibujo"); // Cuadro es igual al area de dibujo
var papel = cuadro.getContext("2d"); // Es el contexto 2d para dibujar en el cuadro.
//
var x = 250; //Con estas variables recordaremos el punto inicial
var y = 250;
//

dibujarLinea("red", x-1, y-1, x+1, y+1 , papel);

function dibujarTeclado(evento) // Los datos obtenidos se pasan a la nueva variable evento
{
    var colorDefault = "brown";
    var movimiento = 1; // Cuanto nos movemos en cada pulsada
    switch(evento.keyCode) // Extraemos el keyCode de evento, que contiene keydown
    {
        case teclas.UP:
            dibujarLinea(colorDefault, x, y, x, y -movimiento, papel);
            y = y - movimiento; // Tenemos que recordar el movimiento que hicimos, es el cambio del punto final
        break;
        case teclas.DOWN:
            dibujarLinea(colorDefault, x, y, x, y +movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorDefault, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorDefault, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla")
        break;
    }
}

function dibujarLinea( color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}