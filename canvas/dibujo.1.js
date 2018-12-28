var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("id_boton");
boton.addEventListener("click", dibujoPorClick);

var texto2 = document.getElementById("texto_lineasRayadas");
var boton2 = document.getElementById("id_boton2");
boton2.addEventListener("click", dibujoPorClick2);

var dibujo = document.getElementById("dibujito");
var lienzo = dibujo.getContext("2d");

var ancho = dibujo.width;
var rosado = "#FAA";

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;

    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {  
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(rosado, 0, yi, xf, 300);
    }

    dibujarCuadrado();
}

function dibujoPorClick2()
{
    var lineas = parseInt(texto2.value);
    var l = 0;
    var yi, yf;

    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {  
        yi = espacio * l;
        yf = espacio * l;
        dibujarLinea(rosado, 0, yi, 300, yf);
    }

    dibujarCuadrado();
}

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCuadrado(color=rosado,xinicial=1,yinicial=1,xfinal=ancho -1,yfinal=1,xfinal2=ancho -1,yfinal2=ancho -1,xfinal3=1,yfinal3=ancho -1,xfinal4=1,yfinal4=1)
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
