/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 
Crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) 
la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.*/

const generadorMovimiento = () => Math.floor(Math.random() * 3)+1
const selectorMovimiento = (numero) =>{
    switch (numero) {
        case 1:
            return "Piedra";
        case 2:
            return "Papel"
        case 3:
            return "Tijera";
    
        default:
            break;
    }
}
const asignarEmoji = (texto) =>{
    switch (texto) {
        case "Piedra":
            return " 👊🏻";
        case "Papel":
            return " ✋🏻";
        case "Tijera":
            return " ✌🏻";
    }
}
const escribirMovimiento = (usuario,movimiento) =>{
    alert(`${usuario} eligió ${movimiento + asignarEmoji(movimiento)}`);
}
const elegirGanador = (usuario1, movimiento1, usuario2,movimiento2) =>{
    if (movimiento1 === movimiento2) {
        return "Empate"
    }else if (movimiento1 === "Piedra" && movimiento2 === "Tijera" ){
        return `${usuario1} (${asignarEmoji(movimiento1)}) le gana a ${usuario2} (${asignarEmoji(movimiento2)})`
    }else if (movimiento1 === "Piedra" && movimiento2 === "Papel" ){
        return `${usuario2} (${asignarEmoji(movimiento2)}) le gana a ${usuario1} (${asignarEmoji(movimiento1)})`
    }else if (movimiento1 === "Papel" && movimiento2 === "Tijera" ){
        return `${usuario2} (${asignarEmoji(movimiento2)}) le gana a ${usuario1} (${asignarEmoji(movimiento1)})`
    }else if (movimiento1 === "Papel" && movimiento2 === "Piedra" ){
        return `${usuario1} (${asignarEmoji(movimiento1)}) le gana a ${usuario2} (${asignarEmoji(movimiento2)})`
    }else if (movimiento1 === "Tijera" && movimiento2 === "Piedra" ){
        return `${usuario2} (${asignarEmoji(movimiento2)}) le gana a ${usuario1} (${asignarEmoji(movimiento1)})`
    }else if (movimiento1 === "Tijera" && movimiento2 === "Papel" ){
        return `${usuario1} (${asignarEmoji(movimiento1)}) le gana a ${usuario2} (${asignarEmoji(movimiento2)})`
    }
}
let nombreUsuario = prompt("Hola! Vamos a jugar a Piedra-Papel-Tijeras\nPrimero ingresa tu nombre:")
let eleccion = parseInt(prompt("Elija una opcion:\n1-Piedra\n2-Papel\n3-Tijera"))
const movimientoUsuario = selectorMovimiento(eleccion)
const movimientoComputadora = selectorMovimiento(generadorMovimiento())
escribirMovimiento(nombreUsuario,movimientoUsuario);
escribirMovimiento("Computadora",movimientoComputadora);
const mensajeGanador = elegirGanador(nombreUsuario,movimientoUsuario,"Computadora",movimientoComputadora)
alert(mensajeGanador)
