// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para validar y normalizar el texto
function validarTexto(texto) {
    // Convertir a minúsculas y remover acentos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return texto;
}

// Obtener elementos del DOM
const inputTexto = document.querySelector('.input');
const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const mensajeFinal = document.querySelector('.mensaje_final');
const btnCopiar = document.querySelector('.copiar');
const imagenEspera = document.querySelector('.imagenEspera');
const ningunMensaje = document.querySelector('.right p');

// Función para mostrar el mensaje y ocultar la imagen de espera
function mostrarMensaje(texto) {
    mensajeFinal.textContent = texto;
    mensajeFinal.style.display = 'block';
    btnCopiar.classList.remove('oculto');
    imagenEspera.style.display = 'none';
    ningunMensaje.style.display = 'none';
}

// Agregar eventos a los botones
btnEncriptar.addEventListener('click', function () {
    let texto = inputTexto.value;
    texto = validarTexto(texto); // Validar y normalizar el texto
    if (texto) {
        const textoEncriptado = encriptarTexto(texto);
        mostrarMensaje(textoEncriptado);
    }
});

btnDesencriptar.addEventListener('click', function () {
    let texto = inputTexto.value;
    texto = validarTexto(texto); // Validar y normalizar el texto
    if (texto) {
        const textoDesencriptado = desencriptarTexto(texto);
        mostrarMensaje(textoDesencriptado);
    }
});

btnCopiar.addEventListener('click', function () {
    navigator.clipboard.writeText(mensajeFinal.textContent).then(function () {
        // SweetAlert2 - Copiado exitoso
        Swal.fire({
            icon: 'success',
            title: 'Texto copiado',
            text: 'El texto se ha copiado al portapapeles con éxito',
            confirmButtonText: 'OK'
        });
    }, function () {
        // SweetAlert2 - Error al copiar
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo copiar el texto al portapapeles',
            confirmButtonText: 'OK'
        });
    });
});
