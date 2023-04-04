/*
Ejercicio 9 - Ejercicios Adicionales
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" 
para verificar que cada animal emite el sonido adecuado. 
*/
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    emitirSonido() {
        return `${this.nombre} hace`
    }
}
class Perro extends Animal {
    emitirSonido() {
        return super.emitirSonido() + " " + "Guau Guau!! 🐕"
    }
}
class Gato extends Animal {
    emitirSonido() {
        return super.emitirSonido() + " " + "Meowww!! 🐈"
    }
}
let perro = new Perro("Lisa", 8)
let gato = new Gato("Garfield", 5)
let animales = [perro, gato]

document.write('<section class="container">');
document.write('<h5 class="display-5 text-center text-success">Llamamos al método de los animales "emitirSonido()":</h5>');
animales.forEach(animal => {
    document.write(`<p class="fs-1 text-primary py-2">${animal.emitirSonido()}</p>`)
});
document.write('</section>');