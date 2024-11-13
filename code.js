// Obtener el botón por su id
const boton = document.getElementById('botonJugar');

// Obtener el párrafo donde mostraremos los resultados
const resultado = document.getElementById('resultado');

// Asociar la función al evento click del botón
boton.addEventListener('click', iniciarJuego);

function iniciarJuego() {
// Número aleatorio a adivinar
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Número máximo de intentos
let intentosMaximos = 3;
let intentosRestantes = intentosMaximos;

// Bucle para permitir múltiples intentos
while (intentosRestantes > 0) {
    // Pedir al usuario que ingrese un número
    let numeroUsuario = prompt('Ingrese un número del 1 al 10:');
    let numeroUsuarioEntero = parseInt(numeroUsuario);

    // Comprobar si el número es correcto
    if (numeroUsuarioEntero === numeroAleatorio) {
        alert('¡Felicidades! Adivinaste el número.');
        break; // Salir del bucle si adivinó
    } else {
        intentosRestantes--;
        alert(`¡Incorrecto! Te quedan: ${intentosRestantes}, intentos`);
    }
}

// Si se agotaron los intentos, mostrar el número correcto
if (intentosRestantes === 0) {
    alert(`¡Se acabaron los intentos! El número era: ${numeroAleatorio}`);
}
}