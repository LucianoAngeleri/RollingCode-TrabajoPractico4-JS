/*
Ejercicio 2 - Arreglos
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar 
el arreglo generado, luego realizar las siguientes acciones:

*Mostrar la longitud del arreglo.
*Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
*Añade en última posición la ciudad de París.
*Escribe por pantalla el elemento que ocupa la segunda posición.
*Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let ciudades = [];
do {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");
  if (ciudad === "" || ciudad === null || ciudad === undefined) {
    alert("Debe ingresar una ciudad válida");
  } else {
    ciudades.push(ciudad);
  }
} while (confirm("Desea agregar mas ciudades?"));
if (ciudades.length === 0) {
  document.write('<section class="container">');
  document.write('<h3 class="text-center text-danger display-4">No se ingresaron ciudades</h3>');
} else {
  document.write('<section class="container">');
  document.write('<h3 class="text-center text-success display-4">Arreglo resultante</h3>');
  document.write('<ul class="list-group">');
  for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li class="list-group-item fw-bold fs-3">${i}-${ciudades[i]}</li>`);
  }
  document.write("</ul>");

  document.write(`<p class="fw-bold display-5 text-primary">Elemento en la primera posición: ${ciudades[0]}</h3>`);
  document.write(`<p class="fw-bold display-5 text-warning">Elemento en la tercera posición: ${ciudades[2]}</h3>`);
  document.write(
    `<p class="fw-bold display-5 text-danger">Elemento en la última posición: ${ciudades[ciudades.length - 1]}</h3>`
  );
  ciudades.push("Paris");
  document.write(`<p class="fw-bold display-5 text-secondary">Elemento en la segunda posición: ${ciudades[1]}</h3>`);
  ciudades[1] = "Barcelona";
  document.write('<h3 class="text-center text-success display-4">Arreglo resultante luego de las modificaciones</h3>');
  document.write('<ul class="list-group">');
  for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li class="list-group-item fw-bold fs-3">${i}-${ciudades[i]}</li>`);
  }
  document.write("</ul>");
  document.write("</section>");
}
