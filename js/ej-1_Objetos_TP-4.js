/*
Ejercicio 1
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender(); auto encendido
objeto.apadar(), El auto se apagó
*/
let auto = {
  color: "Azul",
  marca: "Volkswagen",
  modelo: "Golf",
  encendido: false,

  encender: function () {
    this.encendido = true;
    return `El auto ${this.marca} ${this.modelo} está encendido`;
  },
  apagar: function () {
    this.encendido = false;
    return `El auto ${this.marca} ${this.modelo} está apagado`;
  },
};
document.write('<section class="container">')
document.write('<h5 class="display-5 text-center text-success">Objeto "auto":</h5>')
document.write('<ul class="list-group">')
document.write(`<li class="list-group-item">Marca: ${auto.marca}</li>`)
document.write(`<li class="list-group-item">Modelo: ${auto.modelo}</li>`)
document.write(`<li class="list-group-item">Color: ${auto.color}</li>`)
document.write(`<li class="list-group-item">Estado: ${auto.encendido === false ? "Está apagado": "Está encendido"}</li>`)
document.write('<h5 class="display-5 text-center text-success">Métodos del objeto "auto":</h5>')
document.write(`<p class="fs-3 text-info">${auto.encender()}</p>`)
document.write(`<p class="fs-3 text-danger">${auto.apagar()}</p>`)
document.write('</section>')