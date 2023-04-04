/*Ejercicio 7 - Agenda telefónica - Modelando Clases
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/
class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
}
class Agenda {
    #cantidadContactos
    #listaContactos
    constructor(cantidadContactos = 10) {
      this.#cantidadContactos = cantidadContactos;
      this.#listaContactos = [];
    }
    get cantidadContactos() {
        return this.#cantidadContactos;
      }
      set cantidadContactos(nuevaCantidadContactos) {
        if (nuevaCantidadContactos.length > 0) {
          this.#cantidadContactos = nuevaCantidadContactos;
        }
      }
    get listaContactos() {
        return this.#listaContactos;
      }
      set listaContactos(nuevalistaContactos) {
        if (nuevalistaContactos.length > 0) {
          this.#listaContactos = nuevalistaContactos;
        }
      }
    aniadirContacto(objetoContacto){
        if (objetoContacto.length >= this.cantidadContactos) {
            return "La agenda está llena, no se puede agregar el contacto";
          }else{
            this.listaContactos.push(objetoContacto);
            return this.listaContactos.forEach(contacto => alert(`El contacto ${contacto.nombre} ha sido agregado a la agenda`));
        }
    }
    existeContacto(objetoContacto){
        let encontrado = this.listaContactos.find(contacto => contacto.nombre === objetoContacto.nombre);
        if (encontrado){
            return `El contacto ${encontrado.nombre} existe en la lista`
        }else{
            return `El contacto ${encontrado.nombre} no existe en la lista` 
        }
    }
    listarContactos() {
        document.write('<section class="container mt-3">')
        document.write('<h5 class="display-5>Lista de contactos:</h5>');
        document.write('<ul class="list-group py-3 fs-3">');
        this.listaContactos.forEach(contacto => document.write(`<li class="list-group-item">Nombre:${contacto.nombre} - Teléfono:${contacto.telefono}</li>`));
        document.write('</ul>');
        document.write('</section">')
      }
    buscarContacto(nombre){
        //busca un contacto por su nombre y muestra su teléfono.
        let encontrado = this.listaContactos.find(contacto  => contacto.nombre === nombre);
        if (encontrado) {
            return `El contacto con nombre "${nombre}" tiene un telefono ${encontrado.telefono}`
        }else{
            return `No se encontró el contacto con nombre "${nombre}"`
        }
    } 
    eliminarContacto(Contacto){
        //elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    } 
    agendaLlena(){
        if(this.listaContactos.length >= this.cantidadContactos ){
            return "La agenda se encuentra llena"
        }else{
            return "La agenda tiene lugares disponibles"
        }
    } 
    huecosLibres(){
        let cantidadHuecosLibres = this.cantidadContactos - this.listaContactos.length
        return `La agenda tiene ${cantidadHuecosLibres} espacios disponibles`
    } 
}
function menu() {
    let cantidadContactos = parseInt(prompt("Ingrese la cantidad de contactos para la agenda"))
    let agenda1 = new Agenda(cantidadContactos);
    let opcion;
    let condicion = true;
    do {
      opcion = parseInt(prompt(`Seleccione una opción:
      1. Agregar contacto
      2. Buscar contacto
      3. Eliminar contacto
      4. Mostrar lista de contactos
      5. Mostrar el estado de la agenda
      6. Ver cuantos lugares quedan disponible en la agenda
      7. Ver si un contacto ya existe
      8. Salir`));
      switch (opcion) {
        case 1:
          const nombre = prompt("Ingrese el nombre del contacto:");
          const telefono = prompt("Ingrese el teléfono del contacto:");
          const contacto = new Contacto(nombre, telefono);
          agenda1.aniadirContacto(contacto);
          break;
        case 2:
          const nombreBuscado = prompt("Ingrese el nombre del contacto a buscar:");document.write('<section class="container mt-3">')
          document.write(`<h5 class="display-5>${agenda1.buscarContacto(nombreBuscado)}</h5>`);
          document.write('</section>')
          break;
        case 3:
          const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
          const contactoEliminar = new Contacto(nombreEliminar);
          agenda1.eliminarContacto(contactoEliminar);
          break
        case 4:
            alert("Usted seleccionó mostrar la lista de contactos.")
            agenda1.listarContactos()
          break
        case 5:
            agendaLlena
        case 6:
            alert("Usted eligió ver cuantos huecos libres quedan en la agenda");
            alert(agenda1.huecosLibres());
            condicion = false;
            break
        case 7:
            alert("Usted eligió ver si un contacto ya eciste en la agenda");
            let contactoExiste = prompt("Ingrese un contacto para ver si existe en la agenda")
            alert(agenda1.existeContacto(contactoExiste))
            break
        case 8:
          alert("Usted salió del menú");
          condicion = false;
          break
        }
    }while(condicion || confirm("Desea continuar realizando operaciones en la agenda?"))
}
menu()