class Billete
{
    constructor(value, quantity)
    {
        this.valor = value;
        this.cantidad = quantity;
    }
}

function entregarDinero()
{
    var textoRequerido = document.getElementById("requerido");
    requerido = parseInt(textoRequerido.value);

    for(var billeteEnCaja of caja)
    {
        if(requerido > 0)
        {

            division = Math.floor(requerido / billeteEnCaja.valor);

            if(division > billeteEnCaja.cantidad)
            {
                billetes = billeteEnCaja.cantidad;
            }
            else
            {
                billetes = division;
            }

            entregado.push( new Billete(billeteEnCaja.valor, billetes));
            requerido = requerido - (billeteEnCaja.valor * billetes);
        }
    }

    if(requerido > 0)
    {
        entregado = 0;
        resultado.innerHTML = "No se puede entregar el dinero solicitado";
    }
    else
    {
        for( var billeteEntregado of entregado)
        {
            if (billeteEntregado.cantidad > 0)
            {
                resultado.innerHTML += billeteEntregado.cantidad + " billetes de $" + billeteEntregado.valor + "<br>";
            }
        }
    }
}

var caja = [];
caja[0] = ( new Billete(500, 25))
caja[1] = ( new Billete(100, 50));
caja[2] = ( new Billete(50, 100));
caja[3] = ( new Billete(20, 250));
caja[4] = ( new Billete(10, 250));
var entregado = [];
var requerido;
var division;
var papeles;

var resultado = document.getElementById("resultado");

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);