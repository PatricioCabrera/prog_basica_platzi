class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();

        this.imagen.src = imagenes[this.valor]
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            console.log(div);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero -  (bi.valor * papeles);
        }
    }

    if(dinero > 0)
    {
        resultado.innerHTML = "No tengo dinero :("
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                document.body.appendChild(e.imagen * e.cantidad);
            }          
        }
    }

}

var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";


var caja = [];
caja.push( new Billete(100, 5));
caja.push( new Billete(50, 10));
caja.push( new Billete(20, 5));
caja.push( new Billete(10, 10));
caja.push( new Billete(5, 5));

var entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
