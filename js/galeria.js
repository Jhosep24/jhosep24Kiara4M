// Función para manejar el botón de "Volver al Home"
function volverAlHome() {
  window.location.href = "home.html"; // Asegúrate de que este sea el enlace correcto al Home
}

// Manejo del botón de música
document.getElementById("playMusic").addEventListener("click", function() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    this.innerText = "Pausar música 💖";
  } else {
    audio.pause();
    this.innerText = "Escuchar nuestra canción 💖";
  }
});


// Abrir el Modal
// Abrir el Modal
function abrirModal(carpeta) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  // Limpia el contenido del modal
  modalBody.innerHTML = '';

  // Datos simulados (reemplazar con contenido dinámico en backend)
  const contenido = {
    fotos: [
      'https://jhosep24.github.io/jhosep24Kiara4M/img/foto1.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto2.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto3.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto6.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto4.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto5.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto7.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto8.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto9.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto10.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/foto.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/besos.jpeg',
  'https://jhosep24.github.io/jhosep24Kiara4M/img/fotojuntos.jpeg'
    ],
    videos: [
  'https://jhosep24.github.io/jhosep24Kiara4M/img/video.mp4',
    'https://jhosep24.github.io/jhosep24Kiara4M/img/video2.mp4',
    'https://jhosep24.github.io/jhosep24Kiara4M/img/video3.mp4',
    'https://jhosep24.github.io/jhosep24Kiara4M/img/videogaleria.mp4',
    'https://jhosep24.github.io/jhosep24Kiara4M/img/videogalerias.mp4',
    'https://jhosep24.github.io/jhosep24Kiara4M/img/video4.mp4'
    ]
  };

  // Generar el contenido del modal
  if (contenido[carpeta]) {
    contenido[carpeta].forEach((archivo) => {
      const mediaElement = document.createElement(archivo.endsWith('.mp4') ? 'video' : 'img');
      
      // Para videos
      if (archivo.endsWith('.mp4')) {
        mediaElement.src = archivo;
        mediaElement.muted = true; // Silenciado para evitar sonidos
        mediaElement.preload = 'metadata'; // Carga los metadatos para generar el poster
        mediaElement.classList.add('media-item'); // Clase para identificar los videos
        mediaElement.controls = false; // Deshabilitar controles
        mediaElement.style.pointerEvents = 'auto'; // Permitir clics
        mediaElement.style.cursor = 'pointer'; // Mostrar cursor de mano

        // Manejar el clic en el video para abrirlo en grande
        mediaElement.onclick = function () {
          mostrarEnGrande(archivo, carpeta); // Muestra el video en grande
        };
      } else {
        // Para imágenes
        mediaElement.src = archivo;
        mediaElement.classList.add('media-item'); // Clase para identificar las imágenes
        mediaElement.style.cursor = 'pointer'; // Mostrar cursor de mano

        // Manejar el clic en la imagen para abrirla en grande
        mediaElement.onclick = function () {
          mostrarEnGrande(archivo, carpeta); // Muestra la imagen en grande
        };
      }

      modalBody.appendChild(mediaElement);
    });
  }

  // Mostrar el modal
  modal.style.display = 'block';
}

function mostrarEnGrande(src, carpeta) {
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = ''; // Limpia el contenido del modal

  // Botón para regresar a los posters
  const backButton = document.createElement('button');
  backButton.textContent = 'Regresar';
  backButton.classList.add('back-button'); // Clase para estilos
  backButton.onclick = function () {
    abrirModal(carpeta); // Regresa a la vista de posters
  };

  let mediaElement;

  // Crear un elemento de video o imagen grande según el tipo de archivo
  if (src.endsWith('.mp4')) {
    mediaElement = document.createElement('video');
    mediaElement.src = src;
    mediaElement.controls = true; // Mostrar controles
    mediaElement.autoplay = true; // Reproducir automáticamente
  } else {
    mediaElement = document.createElement('img');
    mediaElement.src = src;
  }

  // Estilo común para ambos (video e imagen)
  mediaElement.classList.add('media-grande'); // Clase para identificar el contenido grande
  mediaElement.style.width = '100%'; // Ocupa todo el ancho disponible
  mediaElement.style.height = 'auto'; // Mantiene la proporción del contenido
  mediaElement.style.maxHeight = '80vh'; // Limitar la altura máxima

  // Agregar el botón de regresar y el contenido en grande
  modalBody.appendChild(backButton);
  modalBody.appendChild(mediaElement);
}

function cerrarModal() {
  const modal = document.getElementById('modal');
  const videos = document.querySelectorAll('.media-grande');

  // Pausar y reiniciar todos los videos que se estén reproduciendo
  videos.forEach((video) => {
    if (video.tagName === 'VIDEO') {
      video.pause();
      video.currentTime = 0; // Reinicia el video
    }
  });

  // Ocultar el modal
  modal.style.display = 'none';
}
