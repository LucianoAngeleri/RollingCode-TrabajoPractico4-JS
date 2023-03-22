/*
Ejercicio 4 - Funciones
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función 
y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/
function mostrarTablaMultiplicar(numero) {
  document.write("<section class='container'>");
  document.write(`<h5 class='display-3 text-success text-center'>Tabla del ${numero}</h5>`);
  document.write("<table class='table table-responsive table-striped fs-3 text-center'>");
  document.write("<thead>");
  document.write("<th>Multiplicación</th><th>Resultado</th>");
  document.write("</th>");
  document.write("<tbody>");
  for (let fila = 1; fila <= 10; fila++) {
    document.write("<tr>");
    document.write(`<td>${fila} x ${numero} </td>`);
    document.write(`<td>${fila * numero}</td>`);
    document.write("</tr>");
  }
  document.write("</tbody>");
  document.write("</table>");
  document.write("</section>");
}
let num = 0;
do {
  num = parseInt(prompt("Ingrese un número para escribir su tabla de multiplicar:"));
  if (isNaN(num)) {
    alert("El numero que ingresó es inválido.");
    condicion = confirm("Desea ingresar otro número un número?");
  } else {
    condicion = false;
  }
} while (condicion);
if (isNaN(num)) {
  document.write("<section class='container'>");
  document.write(`<h5 class='display-3 text-center text-danger'>No ingresó un número válido</h5>`);
  document.write("</section>");
} else {
  mostrarTablaMultiplicar(num);
}
