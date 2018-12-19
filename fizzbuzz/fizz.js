// Problema = tengo que imprimir numeros del 1 al 100, si es div por 3 fizz, si es por 5 buzz, si es por 3 y 5 fizzbuzz

var numeros = 100;
var divisible = false;

for(var i = 1; i <= numeros; i++)
{
    if(esDivisible(i, 3)) // si i, modulo 3 es igual a 0
    {
        document.write("Fizz");
    }

    if(esDivisible(i, 5)) // Podría ser "else if", pero eso haría que sea una línea de código dependiente del if anterior
    {
        document.write("Buzz");
    }

    if(!esDivisible(i, 3) && !esDivisible(i, 5))                    //(i%3 != 0 && i%5 != 0) // Si var i en residuo de 3 da un resultado diferente de cero, y lo mismo con el residuo de cinco, entonces:
    {
        document.write(i);
    }
    document.write("<br>");
}

function esDivisible(num, divisor)
{
    if(num % divisor == 0)
    {
        return true;    //!! Las funciones dejan de ejecutarse al llegar al return
    }
    else
    {
        return false;
    }
}