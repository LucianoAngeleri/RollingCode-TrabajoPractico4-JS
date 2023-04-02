/*
Ejercicio 5 - Generaciones - Modelando Clases
 Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la tabla de generaciones del documento.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
    #nombre
    #edad
    #dni
    #sexo
    _peso
    _altura
    #fechaNacimiento
  constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
    this.#nombre = nombre
    this.#edad = edad
    this.#dni = dni
    this.#sexo = sexo;
    this._peso = peso;
    this._altura = altura
    this.#fechaNacimiento = fechaNacimiento;
  }
  get nombre(){
    return this.#nombre;
  }
  set nombre(nuevoNombre){
    if (nuevoNombre.length>0){
        this.#nombre = nuevoNombre;
    }
  }
  get edad(){
    return this.#edad;
  }
  set edad(nuevaEdad){
    if (nuevaEdad>0 && !isNaN(nuevaEdad)){
        this.#edad = nuevaEdad;
    }
  }
  get dni(){
    return this.#dni;
  }
  set dni(nuevoDni){
    if (nuevoDni>0 && !isNaN(nuevoDni)){
        this.#dni = nuevoDni;
    }
  }
  get sexo(){
    return this.#sexo;
  }
  set sexo(nuevoSexo){
    if (nuevoSexo === "H" && nuevoSexo === "M"){
        this.#sexo = nuevoSexo;
    }
  }
  get peso(){
    return this._peso;
  }
  set peso(nuevoPeso){
    if (nuevoPeso>0){
        this._peso = nuevoPeso;
    }
  }
  get altura(){
    return this._altura;
  }
  set altura(nuevaAltura){
    if (nuevaAltura>0){
        this._altura = nuevaAltura;
    }
  }
  get fechaNacimiento(){
    return this._fechaNacimiento;
  }
  set fechaNacimiento(nuevaFechaNacimiento){
    if (nuevaFechaNacimiento>0){
        this._fechaNacimiento = nuevaFechaNacimiento;
    }
  }
  mostrarGeneracion(){
    //ostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación
  }
  esMayorDeEdad(){
    return this.edad >=18 ? "Es mayor de edad" : "Es menor de edad"
  }

  mostrarDatos(){
    document.write('<ul class="list-group py-3 fs-3">');
    document.write(`<li class="list-group-item">Nombre de la persona: ${this.edad}</li>`);
    document.write(`<li class="list-group-item">DNI de la persona: ${this.dni}</li>`);
    document.write(`<li class="list-group-item">Sexo de la persona: ${this.sexo}</li>`);
    document.write(`<li class="list-group-item">Peso de la persona: ${this.peso} kilogramos</li>`);
    document.write(`<li class="list-group-item">Altura de la persona: ${this.altura} metros</li>`);
    document.write(`<li class="list-group-item">Fecha de nacimiento de la persona: ${this.fechaNacimiento}</li>`);
    document.write("</ul>");
  }
  generaDNI(){
    let dniAleatorio ="";
    for (let i = 0; i < 8; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 10); 
        dniAleatorio += numeroAleatorio.toString()  
    }
    return dniAleatorio 
  }
}


