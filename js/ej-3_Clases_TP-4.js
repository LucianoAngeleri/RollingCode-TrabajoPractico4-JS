/*
Ejercicio 3 - Rectángulos - Modelando Clases
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/
let rectangulo = {
  ancho: 0,
  alto: 0,
  ingresarAncho: function () {
    this.ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
  },
  ingresarAlto: function () {
    this.alto = parseFloat(prompt("Ingrese el alto del rectángulo:"));
  },
  calcularPerimetro: function () {
    return 2 * (this.alto + this.ancho)
  },
  calcularArea: function () {
    return this.alto * this.ancho;
  },
  mostrarPropiedades : function () {
    return `El ancho del rectangulo es ${this.ancho} y el alto es ${this.alto}`
  }
};
document.write('<section class="container">')
document.write('<h5 class="display-5 text-center text-success">Propiedades iniciales del objeto "rectángulo":</h5>')
document.write('<ul class="list-group">')
document.write(`<li class="list-group-item">${rectangulo.mostrarPropiedades()}</li>`)
document.write('</ul>')
document.write('<h5 class="display-5 text-center text-success">Uso de los métodos del objeto "rectangulo":</h5>')
rectangulo.ingresarAlto()
rectangulo.ingresarAncho()
document.write(`<p class="fs-3 text-secondary">${rectangulo.mostrarPropiedades()}</p>`)
document.write(`<p class="fs-3 text-info">El perímetro del rectángulo es: ${rectangulo.calcularArea()}</p>`)
document.write(`<p class="fs-3 text-info">El área del rectángulo es: ${rectangulo.calcularPerimetro()}</p>`)
document.write('</section>')