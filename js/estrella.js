// Datos de las estrellas con sus momentos especiales
const estrellasData = [
  {
    id: 1,
    left: "10%",
    top: "10%",
    title: "Eres mi cielo, mi luz, mi destino... mi más grande amor. 💖✨",
    message: "Desde que entraste en mi vida, cada día es un regalo, cada momento contigo es un tesoro. ✨💫 Eres la melodía más hermosa en mi corazón, la razón por la que sonrío, mi felicidad infinita. A tu lado, quiero vivir cada amanecer, cada sueño, cada instante, porque eres todo lo que siempre anhelé. 💕🥰",
    photo: "img/osin.gif",
    color: "#FF69B4",       // Rosa fuerte para reflejar pasión y ternura
    colorTitle: "#FFD700"
  },
  {
    id: 2,
    left: "20%",
    top: "40%",
    title: "Dos almas, un solo corazón latiendo por siempre. ❤️✨",
    message: "Cuando nuestras manos se unen, creamos algo más que un simple gesto: formamos un corazón que late con la fuerza de nuestro amor. 💞 Cada latido es una promesa, cada suspiro es un ‘te amo’. Contigo, mi amor, mi corazón no solo late… ¡brilla! 💖 Eres mi vida, mi destino, mi eterno amor. 🥰✨",
    photo: "img/corazon.jpeg",
    color: "#FF5E78",       // Un rosa vibrante para reflejar amor y dulzura
    colorTitle: "#FFAA33"
  },

  {
    id: 3,
    left: "70%",
    top: "25%",
    title: "Nuestros besos son promesas de un amor eterno. 💋❤️",
    message: "Cada beso tuyo es un susurro del destino que me dice que nacimos para estar juntos. 🌹✨ Cuando nuestros labios se encuentran, el mundo desaparece, el tiempo se detiene, y solo existimos tú y yo… en nuestro universo de amor infinito. 💖🥰 Gracias por cada instante, por cada caricia, por cada beso que me hace sentir vivo. Eres mi hogar, mi felicidad, mi para siempre. 💞",
    photo: "img/besitos.gif",
    color: "#D81B60",
    colorTitle: "#FFD700"
  },

  {
    id: 4,
    left: "70%",
    top: "60%",
    title: "Eres la obra maestra más hermosa que la vida creó. ✨💖",
    message: "Tus ojitos brillan como estrellas, reflejando la dulzura de tu alma. 🌟 Tu sonrisa es la melodía más hermosa que ilumina mi mundo. 💕 Cada rasgo tuyo, cada gesto, cada mirada… todo en ti es pura perfección. 😍 Eres el sol que da luz a mis días, la luna que llena mis noches de paz. A tu lado, todo es mágico, porque no hay nada en este universo más hermoso que tú. 💫💖",
    photo: "img/ositos.jpg",
    color: "#8A2BE2",
    colorTitle: "#FFD700"
  },

  {
    id: 5,
    left: "20%",
    top: "80%",
    title: "Te amo con cada latido, con cada suspiro, con todo mi ser. 💖✨",
    message: "Eres mi hogar, mi paz, mi destino. 💕 En tu mirada encuentro el universo más hermoso, y en tu sonrisa, el sol que ilumina mi vida. 🌟 No hay un solo rincón de mi corazón que no te pertenezca. Eres mi sueño hecho realidad, mi historia más bonita, mi para siempre. 💫 Te amo más allá de lo imaginable, más allá de los siglos, más allá de todo. 💖🥰",
    photo: "img/osito.gif",
    color: "#C71585",
    colorTitle: "#FFD700"
}

];

  // Función para crear estrellas
  // Función para crear estrellas
function crearEstrellas() {
  const mapa = document.querySelector('.mapa-estrellas');
  
  estrellasData.forEach(est => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = est.left;
    star.style.top = est.top;
    star.dataset.id = est.id;

    // Usar el emoji de estrella ⭐
    star.innerHTML = '⭐';
    star.style.fontSize = '40px'; // Tamaño de la estrella
    star.style.cursor = 'pointer'; // Mostrar cursor de puntero
    mapa.appendChild(star);
  });
}

  
  // Mostrar información de la estrella
  // Mostrar información de la estrella en el modal
// Mostrar información de la estrella en el modal
// Mostrar información de la estrella en el modal
function mostrarInfo(id) {
  const estrella = estrellasData.find(est => est.id === parseInt(id));

  if (!estrella) {
    console.error(`No se encontró una estrella con id: ${id}`);
    return;
  }

  const modal = document.getElementById('modal-info');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = '';

  // Crear y agregar el título con color personalizado
  const titleElement = document.createElement('h2');
  titleElement.innerText = estrella.title;
  titleElement.style.color = estrella.colorTitle; // Aplicar color al título
  modalBody.appendChild(titleElement);

  // Crear y agregar el mensaje con color personalizado
  if (estrella.message) {
    const messageElement = document.createElement('p');
    messageElement.innerText = estrella.message;
    messageElement.style.color = estrella.color; // Aplicar color al mensaje
    modalBody.appendChild(messageElement);
  }

  if (estrella.photo) {
    const imageElement = document.createElement('img');
    imageElement.src = estrella.photo;
    imageElement.alt = estrella.title;
    imageElement.style.width = '100%';
    imageElement.style.borderRadius = '10px';
    modalBody.appendChild(imageElement);
  }

  modal.style.display = 'flex';

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}



// Agregar evento a las estrellas
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('star')) {
    const id = e.target.dataset.id;
    mostrarInfo(id);
  }
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-info');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
      const id = e.target.dataset.id;
      console.log(`Se hizo clic en la estrella con id: ${id}`); // Depurar el id
      mostrarInfo(id);
    }
  });
    
  
  
// Agregar evento a las estrellas
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
      const id = e.target.dataset.id;
      mostrarInfo(id);
    }
  });
  
  // Crear las estrellas cuando la página cargue
  crearEstrellas();  

  
  // Función para crear corazones flotantes aleatorios
// Función para crear corazones emoji flotantes aleatorios
function crearCorazones() {
  const totalCorazones = 10; // Cuántos corazones se generarán
  const container = document.body;

  for (let i = 0; i < totalCorazones; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-emoji');
    heart.textContent = '💖'; // Aquí es donde está el emoji del corazón
    heart.style.left = `${Math.random() * 100}vw`; // Posición aleatoria en el eje X
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duración más lenta de la animación
    heart.style.animationDelay = `${Math.random() * 5}s`; // Retardo aleatorio
    container.appendChild(heart);
  }
}

// Llamar a la función para crear los corazones al cargar la página
crearCorazones();

