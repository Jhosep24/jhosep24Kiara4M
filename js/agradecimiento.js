function mostrarSorpresa() {
  document.getElementById("sorpresa").style.display = "block";
}

function mostrarRegalo() {
  document.getElementById("contenido-regalo").style.display = "block";
}

function cerrarSorpresa() {
  document.getElementById("sorpresa").style.display = "none";
  document.getElementById("contenido-regalo").style.display = "none";
}



  // Función para volver al inicio
  function volverAlHome() {
    window.location.href = "home.html"; // Cambia esto según tu ruta
  }
  

  // Mostrar el modal
function mostrarPromesa() {
    var modal = document.getElementById("modalPromesa");
    modal.style.display = "block";
  }
  
  // Cerrar el modal
  function cerrarModal() {
    var modal = document.getElementById("modalPromesa");
    modal.style.display = "none";
  }
  
  // Función para volver al home (ajústala según tu necesidad)
  function volverAlHome() {
    window.location.href = 'home.html'; // Cambia la URL a la de tu página de inicio
  }
  

  // Crear corazones y cartas animados
function generarAnimacionesRomanticas() {
  const contenedor = document.querySelector('.animaciones-romanticas');
  const simbolos = ['❤️', '💌', '💕', '🌹', '💖', '😍'];

  setInterval(() => {
    const elemento = document.createElement('div');
    elemento.classList.add('elemento-romantico');
    elemento.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    elemento.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
    elemento.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración aleatoria
    elemento.style.fontSize = `${Math.random() * 1 + 2}rem`; // Tamaño aleatorio
    contenedor.appendChild(elemento);

    // Eliminar el elemento después de la animación
    setTimeout(() => {
      elemento.remove();
    }, 5000);
  }, 500); // Generar un nuevo elemento cada 500ms
}

// Iniciar las animaciones románticas
generarAnimacionesRomanticas();


const texto = "Mi amor, mi osita hermosa, no hay palabras en este mundo que puedan describir lo mucho que te amo. Eres mi luz, mi felicidad, mi más grande bendición. Cada día a tu lado es un regalo del cielo, porque eres perfecta en todos los sentidos. Me encantas, me enamoras más y más con tu dulzura, con tu ternura, con tu forma única de ser. Eres mi todo, mi razón de vivir, mi más bello sueño hecho realidad. Te amo con cada latido de mi corazón, hoy y siempre. 💖✨";
let index = 0;
let escribiendo = true;

function escribir() {
  const elemento = document.getElementById("maquina-escribir");
  if (escribiendo) {
    elemento.textContent = texto.substring(0, index);
    index++;
    if (index > texto.length) {
      escribiendo = false;
      setTimeout(crearCorazon, 1000); // Espera un segundo antes de crear el corazón
    }
  }
}

function crearCorazon() {
  const elemento = document.getElementById("maquina-escribir");
  const chispas = document.getElementById("chispas");

  // Crear un corazón
  const corazon = document.createElement("span");
  corazon.classList.add("heart");
  corazon.textContent = "❤️";

  // Crear las chispas
  for (let i = 0; i < 10; i++) {
    const chispa = document.createElement("span");
    chispa.classList.add("sparks");
    chispa.textContent = "✨";
    chispas.appendChild(chispa);
    // Animar chispas con un pequeño retraso para hacer que aparezcan en diferentes momentos
    setTimeout(() => {
      chispa.style.animation = "sparkle 0.5s infinite";
    }, i * 100);
  }

  // Agregar el corazón al contenedor
  elemento.innerHTML = "";
  elemento.appendChild(corazon);

  // Esperar que termine el efecto y luego borrar todo para comenzar a escribir de nuevo
  setTimeout(() => {
    chispas.innerHTML = ""; // Eliminar las chispas
    corazon.style.animation = "growHeart 1.5s forwards, disappear 1s forwards"; // Efecto de crecimiento y desaparición
    // Reiniciar la escritura después del efecto
    setTimeout(() => {
      index = 0;
      escribiendo = true;
      setTimeout(() => {
        escribir();
      }, 1000); // Espera antes de comenzar a escribir de nuevo
    }, 1000); // Espera el tiempo de la animación para reiniciar
  }, 1000);
}

// Escribir lentamente
setInterval(() => {
  if (escribiendo) {
    escribir();
  }
}, 80); // Escribir más lento (80ms por letra)



