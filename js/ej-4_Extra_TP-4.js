/*
Ejercicio 3 - Extra
Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

*Mostrar la tabla completa
*Filtrar el arreglo de productos por Protectores solares y mostrar la tabla filtrada.
*Buscar un producto serum y mostrarlo por pantalla,
*Buscar un producto Bruma y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
*/
let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];
function dibujarTablaProductos(arreglo){
document.write('<table class="table table-responsive table-success">');
document.write('<thead class="table-dark"><th>Producto</th><th>Categoría</th><th>Precio</th></thead><tbody>');
for (let item of arreglo) {
  document.write('<tr>');
  document.write(`<td>${item["nombreProducto"]}</td><td>${item["categoria"]}</td><td>${item["precio"]}</td>`);
  document.write('</tr>');
}
document.write('</tbody></table>')               
}
document.write("<section class='container'>")
document.write("<h4 class='display-4 text-success pt-3'>Mostramos la tabla de productos</h4>")
dibujarTablaProductos(listaProductos);

document.write("<h4 class='display-4 text-success pt-3'>Mostramos la tabla filtrada con 'Protectores solares'</h4>")
let listaProtectoresSolares = listaProductos.filter(producto => producto.categoria.includes("Protector solar"))
dibujarTablaProductos(listaProtectoresSolares);

