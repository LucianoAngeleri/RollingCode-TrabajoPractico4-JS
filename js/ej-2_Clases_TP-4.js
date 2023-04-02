/*
Ejercicio 2 - Cuenta bancaria - Modelando Clases
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
- Una propiedad titular con el valor "Alex".
- Una propiedad saldo, teniendo como valor inicial 0.
- Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
- Un método extraer() que permita retirar la cantidad pasada como parámetro.
- Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (cantidad) {
    this.saldo += cantidad;
  },
  extraer: function (cantidad) {
    this.saldo -= cantidad;
  },
  informar: function () {
    return `El saldo de la cuenta de ${this.titular} es : $${this.saldo}`;
  },
};
document.write('<section class="container py-5">');
document.write('<h5 class="display-5 text-center text-success">Propiedades del objeto "cuenta" creado:</h5>');
document.write('<ul class="list-group">');
document.write(`<li class="list-group-item">Titular de la cuenta: ${cuenta.titular}</li>`);
document.write(`<li class="list-group-item">Saldo disponible de la cuenta: ${cuenta.saldo}</li>`);
document.write('</ul>');
document.write('<h5 class="display-5 text-center text-success">Uso de los métodos del objeto "cuenta":</h5>');
cuenta.ingresar(parseFloat(prompt(`Ingrese una cantidad de dinero para ingresar en la cuenta de ${cuenta.titular}`)));
document.write(`<p class="fs-2 text-success">Se utilizó el método "ingresar()" pasando la canitdad de dinero como parametro mediante un prompt</p>`);
document.write(`<p class="fs-4 text-secondary">${cuenta.informar()}</p>`);
cuenta.extraer(parseFloat(prompt(`Ingrese una cantidad de dinero para extraer en la cuenta de ${cuenta.titular}`)));
document.write(`<p class="fs-2 text-danger">Se utilizó el método "extraer()" pasando la canitdad de dinero como parametro mediante un prompt</p>`);
document.write(`<p class="fs-4 text-secondary">${cuenta.informar()}</p>`);
document.write('<ul class="list-group">');
document.write(`<li class="list-group-item">Titular de la cuenta: ${cuenta.titular}</li>`);
document.write(`<li class="list-group-item">Saldo disponible de la cuenta: ${cuenta.saldo}</li>`);
document.write('</ul>');
document.write("</section>");
