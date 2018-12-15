var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); 

var lineas = 120;
var l;
var yi, xf;
var xi, yf;
var rosado = "#FAA";

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCuadrado(color=rosado,xinicial=1,yinicial=1,xfinal=599,yfinal=1,xfinal2=599,yfinal2=599,xfinal3=1,yfinal3=599,xfinal4=1,yfinal4=1)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.lineTo(xfinal2,yfinal2);
    lienzo.lineTo(xfinal3,yfinal3);
    lienzo.lineTo(xfinal4,yfinal4);
    lienzo.stroke();
    lienzo.closePath();
}

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1); 
    xi = 10 * (l + 1);
    yf = 10 * l;
    dibujarLinea(rosado,0,yi,xf,599);
    dibujarLinea(rosado,xi,0,599,yf);
    console.log("linea " + l);
}

dibujarCuadrado();
dibujarLinea(rosado, 1,1,599,599);
dibujarLinea(rosado, 599,1,1,599);

