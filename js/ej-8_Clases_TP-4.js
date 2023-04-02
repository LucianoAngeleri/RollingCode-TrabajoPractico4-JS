/*
Ejercicio 8 - Ejercicios Adicionales
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/
class Persona{
    #nombre
    #edad
    constructor(nombre,edad,profesion){
        this.#nombre = nombre
        this.#edad = edad
        this._profesion = profesion
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }
    get edad(){
        return this.#edad
    }
    set edad(nuevaEdad){
        this.#edad = nuevaEdad
    }
    get profesion(){
        return this._profesion
    }
    set profesion(nuevaProfesion){
        this._profesion = nuevaProfesion
    }
    saludar(){
        return `Hola, ${this.nombre} se que tienes ${this.edad} años y eres ${this.profesion}`
    }

    despedirse(){
        return `Hasta luego ${this.nombre}, que tengas un buen día.`
    }
}
let persona1 = new Persona("Luciano",27,"Estudiante")
let persona2 = new Persona("Bruno",29,"Mecánico")
let personas = [persona1,persona2]

document.write('<section class="container">');
document.write('<h5 class="display-5 text-center text-success">Llamamos a la funcion "saludar()":</h5>');

personas.forEach(persona => {
    document.write(`<p class="fs-2 text-success">${persona.saludar()}</p>`)
});
document.write('<h5 class="display-5 text-center text-danger">Llamamos a la funcion "despedirse()":</h5>');
personas.forEach(persona => {
    document.write(`<p class="fs-2 text-danger">${persona.despedirse()}</p>`)
});
document.write('</section>');