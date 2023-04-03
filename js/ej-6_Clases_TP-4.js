/*
Ejercicio 6 - Libros - Modelando Clases
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
class Libro {
  constructor(isbn, titulo, autor, cantPaginas) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._cantPaginas = cantPaginas;
  }
  get isbn() {
    return this._isbn;
  }
  set isbn(nuevoIsbn) {
    if (nuevoIsbn.length === 13 || nuevoIsbn.length === 10) {
      this._isbn = nuevoIsbn;
    }
  }
  get titulo() {
    return this._titulo;
  }
  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }
  get autor() {
    return this._autor;
  }
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
  get cantPaginas() {
    return this._cantPaginas;
  }
  set cantPaginas(nuevaCantPaginas) {
    if (nuevaCantPaginas > 0 && isInteger(nuevaCantPaginas)) {
      this._cantPaginas = nuevaCantPaginas;
    }
  }
  mostrarLibro() {
    return `El libro "${this.titulo}" con ISBN "${this.isbn}" creado por el autor "${this.autor}" tiene "${this.cantPaginas}" páginas `;
  }
}
const libro1 = new Libro (9788478884459,"Harry Potter y la piedra filosofal", "J.K. Rowling", 256)
const libro2 = new Libro (9788445000057,"El señor de los anillos", "J.R.R. Tolkien", 1216)
let libros = [libro1,libro2]

document.write('<section class="container">');
document.write('<h5 class="display-5 text-center text-success">Mostramos los datos de los libros definidos con la clase "Libro":</h5>');
libros.forEach(libro => {
    document.write(`<p class="fs-4 text-info">${libro.mostrarLibro()}</p>`)
});
document.write('</section>');
document.write('<section class="container">');
document.write('<h5 class="display-5 text-center text-success">Mostramos mostramos la cantidad de páginas de cada libro:</h5>');
libros.forEach(libro => {
  document.write(`<p class="fs-4 fw-bold">"${libro.titulo}" tiene ${libro.cantPaginas} páginas</p>`)
});
document.write('<h5 class="display-5 text-center text-success">Mostramos cual libro tiene más páginas:</h5>');
if (libro1.cantPaginas > libro2.cantPaginas){
  document.write(`<p class="fs-4 fw-bold text-primary">"${libro1.titulo}" tiene más páginas</p>`)
}else if(libro1.cantPaginas < libro2.cantPaginas){
  document.write(`<p class="fs-4 fw-bold text-primary">"${libro2.titulo}" tiene más páginas</p>`)
}else{
  document.write(`<p class="fs-4 fw-bold text-primary">"${libro1.titulo}" y "${libro2.titulo}" tienen la misma cantidad de páginas</p>`)
}
document.write('</section>');
