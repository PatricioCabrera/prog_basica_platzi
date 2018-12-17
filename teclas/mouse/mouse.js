document.addEventListener("mousedown", mouseEnable);
document.addEventListener("mouseup", mouseDisable);
document.addEventListener("mousemove", drawMouse);

var areaDeDibujo = document.getElementById("area_de_dibujo");
var dibujo = areaDeDibujo.getContext("2d");
var anchoDibujo = areaDeDibujo.width;

var mouseEnabled = 0;
var rosado = "#FAA";
var blanco = "#FFF";

//
var x; //Con estas variables recordaremos el punto inicial
var y;
//

var mouseButtons =
{
    LMOUSEBTN: 0,
    MMOUSEBTN: 1,
    RMOUSEBTN: 2
};

function mouseEnable(mouseData)
{
    mouseEnabled = 1;
}

function mouseDisable(mouseData)
{
    mouseEnabled = 0;
}

function drawMouse(mouseData)
{
    if(mouseEnabled == 1)
    {
        dibujarLinea( rosado,2 , x, y, mouseData.pageX, mouseData.pageY, dibujo);
    }
    else
    {
        console.log("no dibujo");
    }
    x = mouseData.pageX;
    y = mouseData.pageY;
    
}

/* function moveMouse(mouseData)
{
    x = mouseData.pageX;
    y = mouseData.pageY;
} */

function dibujarLinea( color, anchoLinea, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = anchoLinea;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarCuadrado(color=rosado,xinicial=1,yinicial=1,xfinal=anchoDibujo -1,yfinal=1,xfinal2=anchoDibujo -1,yfinal2=anchoDibujo -1,xfinal3=1,yfinal3=anchoDibujo -1,xfinal4=1,yfinal4=1)
{
    dibujo.beginPath();
    dibujo.strokeStyle = color;
    dibujo.moveTo(xinicial,yinicial);
    dibujo.lineTo(xfinal,yfinal);
    dibujo.lineTo(xfinal2,yfinal2);
    dibujo.lineTo(xfinal3,yfinal3);
    dibujo.lineTo(xfinal4,yfinal4);
    dibujo.stroke();
    dibujo.closePath();
}

dibujarCuadrado();