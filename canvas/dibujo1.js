function dibujarLinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yIn, xFi;
var azul = "#AAF" 

dibujarLinea(azul, 1,1, 1,299);
dibujarLinea(azul, 1,299, 299,299);
dibujarLinea(azul, 299,1, 1,1);
dibujarLinea(azul, 299,1, 299,299);

for(l=0; l < lineas; l++)
{
    yIn = 10 * l;
    xFi = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yIn, xFi, 300);
}
