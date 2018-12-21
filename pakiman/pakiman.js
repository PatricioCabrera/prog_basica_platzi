class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.ataque = a;
        this.vida = v;
        this.nombre = n; //La variable d, sería para que pueda salir fuera, para poder pasar por parámetro. Mientras que this.nombre es la referencia de la instancia de la clase.

        this.imagen.src = imagenes[this.nombre]
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.write("<p>")
        document.body.appendChild(this.imagen); //appendChild le agregamos un hijo al arbol de HTML
        document.write("<br> <strong>" + this.nombre + "</strong>" + "<br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("Ataque: " + this.ataque + "<hr>");
        document.write("<p>");
    }
}