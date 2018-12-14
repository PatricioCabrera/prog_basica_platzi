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

lienzo.beginPath(); 
lienzo.strokeStyle = "blue";
lienzo.moveTo(10, 50);
lienzo.lineTo(100, 300);
lienzo.lineTo(40, 240);
lienzo.stroke();
lienzo.closePath();


