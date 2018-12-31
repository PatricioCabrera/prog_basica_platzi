var villaPlatzi = document.getElementById("villaplatzi");
var papel = villaPlatzi.getContext("2d");

var fondo = 
{
    url: "tile.png",
    cargaOK: false
};

var lobo =
{
    url: "lobo.png",
    cargaOK: false
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

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarPersonajes);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarPersonajes);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPersonajes);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarPersonajes);
document.addEventListener("keydown", moverLobo);

var xLobo = 150;
var yLobo = 250;

var xCerdo = [];
var yCerdo = [];

var xPollo = [];
var yPollo = [];

var xVaca = [];
var yVaca = [];

var vacaSave = false;
var cerdoSave = false;
var polloSave = false;

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarPersonajes()
{
    vaca.cargaOK = true;
    cerdo.cargaOK = true;
    pollo.cargaOK = true;
    lobo.cargaOK = true;
    mantenerPos();
    dibujar();
}

function mantenerPos()
{
    if(vaca.cargaOK)
    {
        vacaSave = true;
        var cantidad = aleatorio(3, 8);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7) * 60;
            var y = aleatorio(0, 7) * 60;
            xVaca[v] = x;
            yVaca[v] = y;
        }
    }
    if(cerdo.cargaOK)
    {
        cerdoSave = true;
        var cantidad = aleatorio(3, 8);
        for(var c=0; c < cantidad; c++)
        {
            var x = aleatorio(0, 7) * 60;
            var y = aleatorio(0, 7) * 60;
            xCerdo[c] = x;
            yCerdo[c] = y;
        }
    }
    if(pollo.cargaOK)
    {
        polloSave = true;
        var cantidad = aleatorio(3, 8);
        for(var p=0; p < cantidad; p++)
        {
            var x = aleatorio(0, 7) * 60;
            var y = aleatorio(0, 7) * 60;
            xPollo[p] = x;
            yPollo[p] = y;
        }
    }
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vacaSave)
    {
        for(var v=0; v < 10; v++)
        {
            papel.drawImage(vaca.imagen, xVaca[v], yVaca[v]);
        }
    }
    if(cerdoSave)
    {
        for(var c=0; c < 10; c++)
        {
            papel.drawImage(cerdo.imagen, xCerdo[c], yCerdo[c]);
        }   
    }
    if(polloSave)
    {
        for(var p=0; p < 10; p++)
        {
            papel.drawImage(pollo.imagen, xPollo[c], yPollo[c]);
        }
    }
    if(lobo.cargaOK)
	{
		papel.drawImage(lobo.imagen, xLobo, yLobo)
	}
}

function moverLobo(evento)
{
	var movimiento = 32;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(evento.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}