//getElementById es un método del documento que trae un elemento a través de su ID.
var d = document.getElementById("dibujito");

var lienzo = d.getContext("2d"); 
//getcontext es una funcion del objeto canvas que me permite obtener el area donde voy a dibujar, es un método del objeto canvas

lienzo.beginPath(); 
//Ejecutamos una función de los lienzos del contexto 2d de los canvas, que se llama beginPath. Así le llama JavaScript a arrancar un trazo, es como acercar un lápiz a la hoja

lienzo.strokeStyle = "red";
//strokestyle es una variable, un atributo/propiedad por ende le podemos asignar un valor.

lienzo.moveTo(100, 100); /* X y Y */
//moveTo es un método o función del canvas para mover el lápiz a donde va a arrancar la línea como nuestra caja es 300x300 arrancamos en 100,100

lienzo.lineTo(200, 200);
//lineTo es la función de trazar una línea, se puede trazar de todo con js, en este caso es una línea hasta 200x200, es decir que moveTo es donde vamos a arrancar y de ahí se va hasta donde especifíca lineTo

lienzo.stroke();
//Cuando la línea está hecha todavía no es suficiente, hay que dibujarla con el estilo de stroke que elegimos, se hace con la función stroke.

lienzo.closePath();
//con closePath finalizamos, es como alejar el lápiz


//Cuando declaramos una función, se ve similar a cuando se declara una variable. Se pasan sus parámetros, y como en una condicional tenémos un bloque de código, que es lo que se va a repetir cada vez que se invoque a la función
//Lo que hacemos en los parámetros es declarar variables, pero se declaran cada vez que se invocan. Cuando la función termina de ejecutarse las variables dejan de existir al llegar a la última línea
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
//La función puede ir en cualquier lugar.
//el proceso de funcionamiento de JavaScript es leer todo el código primero, busca donde haya funciones, se colocan en la memoria. Luego el resto del código.

//Una vez declarada la función no sucederá nada, se debe invocar.
dibujarLinea("pink",10,300,220,10);
dibujarLinea("yellow",300,10,10,220);