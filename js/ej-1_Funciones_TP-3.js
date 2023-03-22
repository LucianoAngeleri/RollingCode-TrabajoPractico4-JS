/*
Ejercicio 1 - Funciones
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/
let numero;
let condicion = true;
function esPar(numero) {
  if (numero % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}
do {
  numero = parseInt(prompt("Ingrese un numero para comprobar si es par o impar"));
  if (isNaN(numero)) {
    alert("Ingrese un número válido");
    condicion = true;
  } else {
    condicion = false;
  }
} while (condicion);

resultado = esPar(numero);
document.write('<section class="container">');
document.write(`<h3 class="text-center display-4">Se comprobará si el número ${numero} es par o impar:</h3>`);
document.write(`<p class="text-center text-success display-5">${resultado}</p>`);
document.write("</section>");
