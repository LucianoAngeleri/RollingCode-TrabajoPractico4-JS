/*
Ejercicio 10 - Ejercicios Adicionales
Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.

Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/
class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }
  agregarAvion(objetoAvion) {
    this.listaAviones.push(objetoAvion);
  }
  buscarAvion(nombreAvion) {
    let avionesEncontrados = this.listaAviones.filter((avion) => avion.nombre === nombreAvion);
    if (avionesEncontrados.length > 0) {
      let datosAviones = avionesEncontrados.map(
        (avion) =>
          `El avión "${avion.nombre}" tiene una capacidad para ${avion.capacidad} pasajeros y tiene destino "${avion.destino}"`
      );
      return datosAviones;
    } else {
      return "No se encontró el avión buscado";
    }
  }
  buscarAvion(nombreAvion) {
    //Recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
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
  abordar(pasajero) {
    if (this.capacidad > this.listaPasajeros.length) {
      let capacidadDisponible = this.capacidad - this.listaPasajeros.length;
      this.listaPasajeros.push(pasajero);
      return `El avión ${this.nombre} tiene capacidad disponible de ${capacidadDisponible}, se procede al abordaje`;
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
let avion1 = new Avion("Airbus A380", 525, "Miami", generarListaPasajeros(200));
let avion2 = new Avion("Embraer E190", 114, "Buenos Aires", generarListaPasajeros(118));
let avion3 = new Avion("Boeing-747", 366, "Estambul", generarListaPasajeros(366));

//Agregar los 3 aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);
//Buscar un avión
aeropuertoInternacional.agregarAvion("Airbus A380")
aeropuertoInternacional.agregarAvion("Embraer E190")
aeropuertoInternacional.agregarAvion("Boeing-737")
//Usar el método abordar
