/*
Ejercicio 1
Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.write('<section class="container">');
document.write('<ul class="list-group">');
for (let i = 0; i < meses.length; i++) {
  document.write(`<li class="list-group-item fw-bold fs-3">${i + 1} - ${meses[i]}</li>`);
}
document.write("</ul>");
document.write("</section>");
