/*
Ejercicio 4 - Producto - Modelando Clases
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto {
  #codigo;
  #precio;
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this._nombre = nombre;
    this.#precio = precio;
  }
  get codigo() {
    return this.#codigo;
  }
  set codigo(nuevoCodigo) {
    if(nuevoCodigo.length > 0){
        this.#codigo = nuevoCodigo;    }
    
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    if(nuevoNombre.length > 0){
        this._nombre = nuevoNombre;
    }
  }
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    if (nuevoPrecio >= 0 && !isNaN(nuevoPrecio)) {
      this.#precio = nuevoPrecio;
    }
  }
  pasarDatosPrompt(){
    this.codigo = prompt("Ingrese el código del producto:");
    this.nombre = prompt("Ingrese el nombre del producto:");
    this.precio = parseFloat(prompt("Ingrese el precio del producto:"));
}
  verProducto() {
    return `Código: ${this.codigo} - Nombre del Producto: ${this.nombre} - Precio: $${this.precio}`;
  }
  verProductoComoLista() {
    document.write('<ul class="list-group py-3 fs-3">');
    document.write(`<li class="list-group-item">Código del producto: ${this.codigo}</li>`);
    document.write(`<li class="list-group-item">Nombre del producto: ${this.nombre}</li>`);
    document.write(`<li class="list-group-item">Precio del producto: $${this.precio}</li>`);
    document.write("</ul>");
  }
}
alert("A continuacion se le pedirá la cantidad de productos a ingresar. El enunciado dice que se deben añadir 3 nuevos productos")
let grupoProductos = [];
cantidadProductos = parseInt(prompt("Cuantos productos desea añadir?:"))
for (let i = 0; i < cantidadProductos; i++) {
    let producto = new Producto()
    producto.pasarDatosPrompt()
    grupoProductos.push(producto)
}
document.write('<section class="container">');
grupoProductos.forEach((producto) => {
    document.write(`<h5 class="display-5 text-primary">Producto: ${producto.nombre}</h5>`)
    producto.verProductoComoLista()
});
document.write("</section>");
