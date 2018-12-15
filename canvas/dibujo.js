var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick ) /* dibujoPorClick sin parámetros porque no queremos que se ejecute la función ni bien es escrita, sino que le decimos como se llama. Para que se ejecute cuando sea llamada. Es decír que se ejecutará con el click en boton */

var dibujo = document.getElementById("dibujito");
var ancho = dibujo.width;
var papel = dibujo.getContext("2d"); 

var rosado = "#FAA";


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.moveTo(xinicial,yinicial);
    papel.lineTo(xfinal,yfinal);
    papel.stroke();
    papel.closePath();
}

function dibujarCuadrado(color=rosado,xinicial=1,yinicial=1,xfinal=ancho -1,yfinal=1,xfinal2=ancho -1,yfinal2=ancho -1,xfinal3=1,yfinal3=ancho -1,xfinal4=1,yfinal4=1)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.moveTo(xinicial,yinicial);
    papel.lineTo(xfinal,yfinal);
    papel.lineTo(xfinal2,yfinal2);
    papel.lineTo(xfinal3,yfinal3);
    papel.lineTo(xfinal4,yfinal4);
    papel.stroke();
    papel.closePath();
}

function dibujoPorClick()
{
    var lineas = parseFloat(texto.value);
    var l;
    var yi, xf;
    var xi, yf; 
    var espacio = ancho / lineas;
    for(l = 0; l < lineas; l++)
        {
            yi = espacio * l;
            xf = espacio * (l + 1); 
            xi = espacio * (l + 1);
            yf = espacio * l;
            dibujarLinea(rosado,0,yi,xf,599);
            dibujarLinea(rosado,xi,0,599,yf);
            console.log("linea " + l);
        }
    dibujarCuadrado();
    dibujarLinea(rosado, 1,1,599,599);
    dibujarLinea(rosado, 599,1,1,599); 
}

