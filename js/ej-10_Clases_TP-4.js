/*
Ejercicio 10 - Ejercicios Adicionales
Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.

Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/
class Aeropuerto {
  constructor(nombreAeropuerto) {
    this._nombreAeropuerto = nombreAeropuerto;
    this._listaAviones = [];
  }
  get nombreAeropuerto(){
    return this._nombreAeropuerto
  }
  set nombreAeropuerto(nuevoNombreAeropuerto){
    if (nuevoNombreAeropuerto.length > 0) {
        this._nombreAeropuerto=nuevoNombreAeropuerto
    }
  }
  get listaAviones(){
    return this._listaAviones
  }
  set listaAviones(nuevalistaAviones){
    if (nuevalistaAviones.length > 0) {
        this._listaAviones=nuevalistaAviones
    }
  }
  agregarAvion(objetoAvion) {
    alert(`Se ha agregado el avión ${objetoAvion.nombre}`)
    this.listaAviones.push(objetoAvion);
  }
  buscarAvion(nombreAvion) {
    let avionesEncontrados = this.listaAviones.filter((avion) => avion.nombre === nombreAvion);
    if (avionesEncontrados.length > 0) {
      let datosAviones = avionesEncontrados.map(avion => `El avión "${avion.nombre}" tiene una capacidad para ${avion.capacidad} pasajeros y tiene destino "${avion.destino}"`
      );
      return datosAviones;
    } else {
      return "No se encontró el avión buscado";
    }
  }
  mostrarListaAviones(){
    document.write('<ul class="list-group py-3 fs-3">');
    this.listaAviones.forEach(avion => document.write(`<li class="list-group-item">El avión "${avion.nombre}" tiene una capacidad para ${avion.capacidad} pasajeros y tiene destino "${avion.destino}"</li>`))
    document.write('</ul>');
  }
}
class Avion {
    #listaPasajeros;
  constructor(nombre, capacidad, destino, listaPasajeros) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.#listaPasajeros = listaPasajeros;
  }
  get listaPasajeros() {
    return this.#listaPasajeros;
  }
  set listaPasajeros(nuevaListaPasajeros) {
    if (nuevaListaPasajeros.length > 0) {
      this.#listaPasajeros = nuevaListaPasajeros;
    }
  }
  abordar(pasajeros) {
    let capacidadDisponible = this.capacidad - this.listaPasajeros.length;
    if (capacidadDisponible > 0) {
      this.listaPasajeros.push(pasajeros);
      return `El avión ${this.nombre} tiene capacidad disponible de ${capacidadDisponible} pasajeros, se procede al abordaje del pasajero ${pasajeros.join(", ")}`;
    } else {
      return `El avión ${this.nombre} se encuentra completo`;
    }
  }
}
//Se creó una funcion para generar una lista con un numero aleatorio de pasajeros
function generarListaPasajeros(maximo) {
  let numeroPasajeros = Math.floor(Math.random() * maximo + 1);
  let listaPasajerosAleatoria = [];
  for (let i = 1; i <= numeroPasajeros; i++) {
    listaPasajerosAleatoria.push(`Pasajero ${i}`);
  }
  return listaPasajerosAleatoria;
}
let aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

//Crear 3 objetos aviones con diferentes destinos.
let avion1 = new Avion("Airbus A380", 525, "Miami", generarListaPasajeros(525));
let avion2 = new Avion("Embraer E190", 114, "Buenos Aires", generarListaPasajeros(500));
let avion3 = new Avion("Boeing-747", 366, "Estambul", generarListaPasajeros(366));

//Agregar los 3 aviones al aeropuerto
document.write('<section class="container mt-3">')
document.write('<h5 class="display-5 text-success py-2">Uso el método agregarAvion() en la clase "Aeropuerto"</h5>');
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);
aeropuertoInternacional.mostrarListaAviones();
document.write('</section>');

//Buscar un avión
document.write('<section class="container mt-3">')
document.write('<h5 class="display-5 text-success py-2">Uso el método buscarAvion() en la clase "Aeropuerto"</h5>');
document.write('<ul class="list-group py-3 fs-3">');
document.write(`<li class="list-group-item text-success">Se buscó el avion "Airbus A380": ${aeropuertoInternacional.buscarAvion("Airbus A380")}</li>`)
document.write(`<li class="list-group-item text-success">Se buscó el avion "Embraer E190": ${aeropuertoInternacional.buscarAvion("Embraer E190")}</li>`)
document.write(`<li class="list-group-item text-danger">Se buscó el avion "Boeing-737": ${aeropuertoInternacional.buscarAvion("Boeing-737")}</li>`)
document.write('</ul>');
document.write('</section>');
//Usar el método abordar
document.write('<section class="container mt-3">')
document.write('<h5 class="display-5 text-success py-2">Uso el método buscarAvion() en la clase "Aeropuerto"</h5>');
document.write(`<h6 class="display-6">${avion2.abordar(["Pasajero Luciano","Pasajero Juan"])}</h6>`);
document.write(`<h6 class="display-6">${avion1.abordar(["Pasajero Luciano","Pasajero Juan"])}</h6>`);
