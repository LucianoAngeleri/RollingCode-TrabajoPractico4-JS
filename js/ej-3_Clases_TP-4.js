/*
Ejercicio 3 - Rectángulos - Modelando Clases
Escribe una clase que permita crear distintos objetos “rectángulos” con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/
class Rectangulo {
  #ancho
  #alto
  constructor(ancho, alto) {
    this.#ancho = ancho;
    this.#alto = alto;
  }
  get ancho() {
    return this.#ancho;
  }
  set ancho(nuevoAncho) {
    if (nuevoAncho > 0  && !isNaN(nuevoAncho)) {
      this.#ancho = nuevoAncho;
    }
  }
  get alto() {
    return this.#alto;
  }
  set alto(nuevoAlto) {
    if (nuevoAlto > 0 && !isNaN(nuevoAlto)) {
      this.#alto = nuevoAlto;
    }
  }
  modificarAncho() {
    this.ancho = parseFloat(prompt(`Ingrese el ancho del rectángulo:`));
  }
  modificarAlto() {
    this.alto = parseFloat(prompt(`Ingrese el alto del rectángulo:`));
  }
  calcularPerimetro() {
    return 2 * (this.alto + this.alto);
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
  mostrarPropiedades() {
    document.write('<ul class="list-group">');
    document.write(`<li class="list-group-item">Ancho del rectángulo: ${this.ancho}</li>`);
    document.write(`<li class="list-group-item">Alto del rectángulo: ${this.alto}</li>`);
    document.write("</ul>");
  }
}
let rectangulo1 = new Rectangulo(0,0);
document.write('<section class="container">');
document.write('<h5 class="display-5 text-center text-success">Propiedades iniciales del objeto "rectangulo1" creado a partir de la clase "Rectangulo":</h5>');
rectangulo1.mostrarPropiedades()
document.write('<h5 class="display-5 text-center text-success">Uso de los métodos del objeto "rectangulo1":</h5>');
rectangulo1.modificarAlto();
rectangulo1.modificarAncho();
rectangulo1.mostrarPropiedades()
document.write(`<p class="fs-3 text-info">El perímetro del rectángulo es: ${rectangulo1.calcularArea()}</p>`);
document.write(`<p class="fs-3 text-info">El área del rectángulo es: ${rectangulo1.calcularPerimetro()}</p>`);
document.write("</section>");
