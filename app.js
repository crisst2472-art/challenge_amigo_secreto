// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Selección de elementos del DOM
let nombreAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = nombreAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }
    listaAmigos.push(nombre);
    actualizarListaAmigos();
    nombreAmigo.value = "";
    nombreAmigo.focus();
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    ulListaAmigos.innerHTML = "";
    listaAmigos.forEach(amigo => {
        ulListaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Por favor ingresa al menos dos nombres.");
        return;
    }
    let random = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Eliminar llamadas automáticas a las funciones
// agregarAmigo();
// sortearAmigo();

// Opcional: Permitir agregar con Enter
nombreAmigo.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});