// Obtener el botón 
const boton = document.getElementById('botonJugar');

// Asociar la función al evento click del botón
boton.addEventListener('click', iniciarJuego);

function iniciarJuego() {
// Número aleatorio a adivinar
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Número máximo de intentos
let intentosMaximos = 3;
let intentosRestantes = intentosMaximos;

// Bucle while
while (intentosRestantes > 0) {
    // Pedir al usuario que ingrese un número
    let numeroUsuario = prompt('Ingrese un número del 1 al 10:');
    let numeroUsuarioEntero = parseInt(numeroUsuario);

    // Comprobar si el número es correcto
    if (numeroUsuarioEntero === numeroAleatorio) {
        alert('¡Felicidades! Adivinaste el número.');
        break;
    } else {
        intentosRestantes--;
        alert(`¡Incorrecto! Te quedan: ${intentosRestantes}, intentos`);
    }
}

// Si se agotaron los intentos, mostrar el número correcto
if (intentosRestantes === 0) {
    alert(`¡Perdiste! El número era: ${numeroAleatorio}`);
}
}