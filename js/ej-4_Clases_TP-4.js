/*
Ejercicio 4 - Producto - Modelando Clases
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto {
    #codigo
    #precio
    constructor(codigo,nombre,precio){
        this.#codigo = codigo 
        this._nombre = nombre 
        this.#precio = precio 
    }
    get codigo(){
        return this.#codigo
    }
    set codigo(nuevoCodigo){
        this.#codigo = nuevoCodigo
    }
    get precio(){
        return this.#precio
    }
    set precio(nuevoPrecio){
        if (this.precio >= 0 && !isNaN(this.precio)){
            this.#precio = nuevoPrecio
        }
    }
    verProducto() {
        return `Código: ${this.codigo} - Nombre del Producto: ${this.nombre} - Precio: $${this.precio}`
    }
    verProductoComoLista() {
        document.write('<ul class="list-group">')
        document.write(`<li class="list-group-item">${this.codigo}</li>`)
        document.write(`<li class="list-group-item">${this.nombre}</li>`)
        document.write(`<li class="list-group-item">${this.precio}</li>`)
        document.write('</ul>') 
    }
}

