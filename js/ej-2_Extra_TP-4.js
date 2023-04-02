/*
Ejercicio 2 - Extra
Crear un objeto persona que tenga las propiedades:
*Nombre.
*Apellido.
*Edad.
*Un valor verdadero o falso que indique si es estudiante.
*Una lista de hobbies.
Este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie viajar e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.
*/
let persona = {
  nombre: "Luciano",
  apellido: "Angeleri",
  edad: 27,
  estadoEstudiante: true,
  hobbies: ["Ciclismo"],
  presentar: function () {
    return `Hola, mi nombre completo es ${this.nombre} ${this.apellido}, tengo ${this.edad} años, ${
      this.estadoEstudiante === true ? "soy estudiante" : "no soy estudiante"
    } y mis hobbies son ${this.hobbies}`;
  },
  agregarHobbyPrompt: function () {
    let numeroInválido = true
    do {
      numeroInválido = confirm("Desea agregar hobbies?");
      if(numeroInválido === true){
        let cantidadNuevosHobbies = parseInt(prompt("Cuantos nuevos hobbies deseas añadir?"));
        if (isNaN(cantidadNuevosHobbies) || cantidadNuevosHobbies < 1) {
          alert("Ingrese un número válido");
          numeroInválido = confirm("Desea agregar un hobby?");
        } else if (cantidadNuevosHobbies !== null) {
          for (let i = 0; i < cantidadNuevosHobbies; i++) {
            let nuevoHobby = prompt("Ingrese un nuevo hobby:");
            this.hobbies.push(nuevoHobby);
          }
          numeroInválido = false;
        }
      }  
    } while (numeroInválido);
  },
  agregarHobby: function (nuevoHobby) {
      this.hobbies.push(nuevoHobby);
    },
  borrarHobby : function(posicion){
    this.hobbies.splice(posicion, 1);

  },
  buscarHobby: function (hobbyBusqueda) {
    let resultadoBusqueda = this.hobbies.find((hobby) => hobby.includes(hobbyBusqueda));
    return resultadoBusqueda === undefined ? `El hobby "${hobbyBusqueda}" NO se encontró en la lista` : `El hobby "${hobbyBusqueda}" SI se encontró en la lista`
  },
  mostrarListaHobbies: function () {
    document.write('<h5 class="diplay-4 p-2">Lista de Hobbies</h5>');
    document.write("<ul>");
    document.write('<ul class="list-group">');
    this.hobbies.map((hobby) => document.write(`<li class="list-group-item fs-4">${hobby}</li>`));
    document.write("</ul>");
  },
};
document.write('<section class="container">');
document.write('<h6 class="display-6 text-success p-3">Resultado</h6>');
document.write('<p class="fs-3 text-secondary p-3">Uso de método "presentacion()" del objeto "persona":</p>');
document.write(`<p class="fs-3 text-info">${persona.presentar()}</p>`);
document.write('<p class="fs-3 text-secondary p-3">Se agregan los hobbies "Fotografía", "Viajar" y "Computación" con el método "agregarHobby(nuevoHobby)" y se muestra la lista con "mostrarListaHobbies()"</p>');

persona.agregarHobby("Fotografía");
persona.agregarHobby("Viajar");
persona.agregarHobby("Computación");

persona.mostrarListaHobbies();

document.write('<p class="fs-3 text-secondary p-3">Se busca el hobby "Viajar" con el método "buscarHobby(hobbyBusqueda)"</p>');
document.write(`<p class="fs-3 text-info p-3">${persona.buscarHobby("Viajar")}</p>`)

document.write('<p class="fs-3 text-secondary p-3">Se eliminar el primer hobby de la lista con el método "borrarHobby(posicion)" y se muestra la nueva lista con "mostrarListaHobbies()"</p>');
persona.borrarHobby(0);
persona.mostrarListaHobbies();

document.write("</section>");
