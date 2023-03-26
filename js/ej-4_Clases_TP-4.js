/*
Ejercicio 4 - Producto - Modelando Clases
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
let producto = {
    codigo : "", 
    nombre : "",
    precio : "",
    verProducto : function () {
        return `El producto ${this.nombre}, código ${this.codigo}, tiene un precio de $${this.precio}`
    },
}

