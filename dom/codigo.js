/* window es toda la ventana, uno de sus componentes es la ruta (location) */
/* En JavaScript tenemos un objeto window de atributo location, su valor se guarda en la variable ruta, la varible ruta la escribimos en el documento, dentro del parámetro write. write es un método del objeto document, aquí la concatenamos con un mensaje que dice "Hola, estás en ruta" */
var ruta = window.location;
/* Tenemos también variables, las variables no tienen funciones sino datos = freddy.peso no tiene paréntesis porque es una variable */
/* La variable ruta ahora tiene al window.location */
/* En este caso window es un objeto, pero .location no es una función, es una variable interna del objeto window, específicamente un objeto */
/* JavaScript trata a .location como un objeto por dentro*/
/* Cuando una variable es parte de un objeto, a la variable se le llama "atributo o propiedad" */

/* console.log nos permite depurar el código, normalmente el código se rompe y con esto vamos chequeando los errores */
/* console.log nos deja mensajes en la consola */
console.log(ruta);
/* la variable ruta es lo mismo que window.location */
/* nos desplega un elemento super complejo */
/* console es un objeto, log es el método(función del objeto) que le dispara cosas, ¿Que otros métodos o funciones tendrá console.log? Lo podemos averiguar haciendole un console.log al mismo console */

/* Document.write es parte del document object model (DOM) que aprendímos,document es un objeto */
document.write("Hola, estás en: " + ruta);
/* write es una función del objeto write, los paréntesis son los parámetros de una función */
/* Cuando las funciones son parte de un objeto, se le llama método */
/* Los objetos tienen funciones (ej : humano.tragar(manzana)) */