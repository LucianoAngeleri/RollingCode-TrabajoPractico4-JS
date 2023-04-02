/*
Ejercicio 3 - Extra
Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.
*/
let cacluladora = {
  suma: function (numero1,numero2) {
  return numero1 + numero2
},
resta: function (numero1,numero2) {
    return numero1 + numero2 
  },
  multiplicacion: function (numero1,numero2) {
    return numero1 * numero2   
  },
  division : function(numero1,numero2){
    if (numero2 === 0) {
      return "No se puede dividir por 0"
    }else{
      return numero1/numero2
    }
  }
}

document.write('<section class="container">');
document.write('<h6 class="display-6 text-success py-3">Resultado</h6>');
document.write('<p class="fs-3 text-secondary py-3">Uso de método "sumar()" del objeto "cacluladora":</p>');
document.write('<p class="fs-3 text-info">Resultado de la suma 2 + 5 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-info w-50 p-1 text-center rounded-pill">${cacluladora.suma(2,5)}</p>`);
document.write('<p class="fs-3 text-info">Resultado de la suma 3 + 1 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-info w-50 p-1 text-center rounded-pill">${cacluladora.suma(3,1)}</p>`);

document.write('<p class="fs-3 text-danger">Resultado de la resta 4 - 3 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-danger w-50 p-1 text-center rounded-pill">${cacluladora.resta(4,3)}</p>`);
document.write('<p class="fs-3 text-danger">Resultado de la resta 5 - 8 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-danger w-50 p-1 text-center rounded-pill">${cacluladora.resta(5,8)}</p>`);

document.write('<p class="fs-3 text-primary">Resultado de la multiplicación 25 * 4 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-primary w-50 p-1 text-center rounded-pill">${cacluladora.multiplicacion(25,4)}</p>`);
document.write('<p class="fs-3 text-primary">Resultado de la multiplicación 31 * 2 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-primary w-50 p-1 text-center rounded-pill">${cacluladora.multiplicacion(31,2)}</p>`);

document.write('<p class="fs-3 text-warning">Resultado de la divisón 87 / 5 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-warning w-50 p-1 text-center rounded-pill">${cacluladora.division(87,5)}</p>`);
document.write('<p class="fs-3 text-warning">Resultado de la divisón 3 / 0 </p>');
document.write(`<p class="fs-2 fw-bold text-bg-warning w-50 text-center rounded-pill">${cacluladora.division(3,0)}</p>`);