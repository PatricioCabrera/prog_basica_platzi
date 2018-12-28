const teclas = 
{
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
};

document.addEventListener("keydown", dibujarTeclado);
var cuadroDibujo = document.getElementById("area_de_dibujo")
var papel = cuadroDibujo.getContext("2d");

var x = 150;
var y = 150;

dibujarLinea("red", 149,149, 151,151, papel);

function dibujarLinea(color, xIn, yIn, xOut, yOut, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xIn,yIn);
    lienzo.lineTo(xOut,yOut);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorDefault = "blue";
    var movement = 5;

    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujarLinea(colorDefault, x,y, x,y + movement, papel);
            y = y + movement;
        break;
        case teclas.UP:
            dibujarLinea(colorDefault, x,y, x,y - movement, papel);
            y = y - movement;
        break;
        case teclas.LEFT:
            dibujarLinea(colorDefault, x,y, x - movement,y, papel);
            x = x - movement;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorDefault, x,y, x + movement, y, papel);
            x = x + movement;
        break;

        default:
            console.log(evento.keyCode + " "+ evento.code);
            y = y - movement;
        break;
    }
}