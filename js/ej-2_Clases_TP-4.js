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
    titular : "Alex",
    saldo : 0,
    ingresar : function (cantidad){
        this.saldo = this.saldo + cantidad
    },
    extraer : function (cantidad){
        this.saldo = this.saldo - cantidad
    },
    informar : function (){
        return `El saldo de la cuenta de ${this.titular} es : $${this.saldo}`
    }
}
document.write('<section class="container">')
document.write('<h5 class="display-5 text-center text-success">Propiedades del objeto "cuenta" creado:</h5>')
document.write('<ul class="list-group">')
document.write(`<li class="list-group-item">Titular de la cuenta: ${cuenta.titular}</li>`)
document.write(`<li class="list-group-item">Saldo disponible de la cuenta: ${cuenta.saldo}</li>`)
document.write('<h5 class="display-5 text-center text-success">Uso de los métodos del objeto "cuenta":</h5>')
document.write(`<p class="fs-3 text-success">Añadimos $200 a la cuenta con ingresar()</p>`)
cuenta.ingresar(200);
document.write(`<p class="fs-3 text-secondary">${cuenta.informar()}</p>`)
document.write(`<p class="fs-3 text-danger">Extraemos $50 a la cuenta con extraer()</p>`)
cuenta.extraer(50);
document.write(`<p class="fs-3 text-secondary">${cuenta.informar()}</p>`)
document.write('</section>')