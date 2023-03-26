/*
Ejercicio 8 - Ejercicios Adicionales
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/let Persona = {
    nombre: "Luciano",
    edad: 27,
    profesion: "Estudiante",
    
    saludar: function () {
      return `Hola ${this.nombre}, como estás?`;
    },
    despedirse: function () {
      return `Hasta luego ${this.nombre}, que tengas un buen día.`;
    },
  };
  document.write('<section class="container">')
  document.write('<h5 class="display-5 text-center text-success">Objeto "Persona":</h5>')
  document.write('<ul class="list-group">')
  document.write(`<li class="list-group-item">Nombre: ${Persona.nombre}</li>`)
  document.write(`<li class="list-group-item">Edad: ${Persona.edad}</li>`)
  document.write(`<li class="list-group-item">Profesion: ${Persona.profesion}</li>`)
  document.write('<h5 class="display-5 text-center text-success">Métodos del objeto "Persona":</h5>')
  document.write(`<p class="fs-3 text-info">${Persona.saludar()}</p>`)
  document.write(`<p class="fs-3 text-danger">${Persona.despedirse()}</p>`)
  document.write('</section>')