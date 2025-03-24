document.addEventListener("DOMContentLoaded", () => {
    // Agregar animación de escritura a las frases
    const phrases = document.querySelectorAll(".phrase");
    let currentPhraseIndex = 0;

    function showNextPhrase() {
        if (currentPhraseIndex < phrases.length) {
            phrases[currentPhraseIndex].style.opacity = 1;
            currentPhraseIndex++;
            setTimeout(showNextPhrase, 4000); // Mostrar la siguiente frase después de 4 segundos
        }
    }

    showNextPhrase();
});


const texto = "Te amo, mi princesa Kiara 💖";
let index = 0;
let borrar = false;
let esperando = false; // Control para esperar antes de borrar

function escribirYBorrar() {
    const elemento = document.getElementById("maquina-escribir");

    if (borrar) {
        // Borrar el texto
        elemento.textContent = texto.substring(0, index);
        index--;
        if (index < 0) {
            borrar = false;  // Cambiar a escribir cuando se termine de borrar
            esperando = false; // Ya no está esperando, se puede escribir de nuevo
        }
    } else {
        // Escribir el texto
        elemento.textContent = texto.substring(0, index);
        index++;
        if (index > texto.length) {
            // Esperar 3 segundos antes de borrar
            if (!esperando) {
                esperando = true;
                setTimeout(() => {
                    borrar = true; // Comienza a borrar después de 3 segundos
                }, 3000); // 3000ms = 3 segundos
            }
        }
    }
}

// Escribir y borrar continuamente
setInterval(escribirYBorrar, 100); // Cada 100ms (puedes ajustar la velocidad)


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("surpriseModal");
    const openModal = document.querySelector(".open-modal");
    const closeModal = document.querySelector(".close");
    const backButton = document.querySelector(".back-btn");

    // Se asegura que el modal esté oculto al cargar la página
    modal.style.display = "none";

    // Al hacer clic en el botón, se abre el modal
    openModal.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Al hacer clic en la "X", se cierra el modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Al hacer clic en "Regresar", se cierra el modal
    backButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Si se hace clic fuera del modal, también se cierra
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});