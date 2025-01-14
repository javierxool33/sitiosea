

//===========funcion carrusel00000===============//
let currentIndex = 0;

const items = document.querySelectorAll('.carro li');
const totalItems = items.length;

document.querySelector('.siguiente').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

document.querySelector('.regresa').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const newTransformValue = -100 * currentIndex + '%';
    document.querySelector('.carro').style.transform = `translateX(${newTransformValue})`;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

//===== funcion de carrusel aoutomatico===========//

// Seleccionamos el contenedor de las imágenes
const carouselImages = document.querySelector('.carro');

// Configuramos las variables para el carrusel
let index = 0; // Indica la imagen actual
const totalImages = document.querySelectorAll('.carro img').length;

// Función para cambiar de imagen
function moveCarousel() {
    index = (index + 1) % totalImages; // Incrementa el índice y regresa al inicio si es necesario
    const offset = -index * 100; // Calcula el desplazamiento
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Configuramos el intervalo para que el carrusel cambie cada 3 segundos
setInterval(moveCarousel, 5000);




//000000000000000000000------MODAL----00000000000000000000000000000000000//

// Obtener los elementos
const modal = document.getElementById("modal1");
const openModalBtn = document.getElementById("abrirBoton");
const closeModalBtn = document.querySelector(".close");
const videoIframe = document.querySelector(".video"); // Selecciona el iframe del video


// Mostrar la ventana modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar la ventana modal al hacer clic en la 'x'
closeModalBtn.onclick = function() {
    modal.style.display = "none";
    detenerVideo(); // Llama a la función para detener el video

}

// Cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        detenerVideo(); // Llama a la función para detener el video

    }
}

// Función para detener el video
function detenerVideo() {
    const videoSrc = videoIframe.src; // Obtiene la URL del video
    videoIframe.src = ""; // Elimina la URL para detener la reproducción
    videoIframe.src = videoSrc; // Restaura la URL para reiniciar desde el inicio si se abre nuevamente
}

//---------cierre de carrusel----------//

//-----------------------------------------------------------------------------------------//

//--------------------hamburguesa

// Evento para mostrar/ocultar el menú con el botón de hamburguesa
document.getElementById('menuToggle').addEventListener('click', function() {
    const menuList = document.getElementById('menuList');
    
    // Alterna la clase 'active' y controla el display
    if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        menuList.style.display = 'none';
    } else {
        menuList.classList.add('active');
        menuList.style.display = 'flex';
        menuList.style.flexDirection = 'column'; // Para que el menú se muestre verticalmente en pantallas pequeñas
    }
});

//-------------------------visivilidad de boton

// Evento para ajustar la visibilidad del menú y el botón al redimensionar la ventana
window.addEventListener('resize', function() {
    const menuList = document.getElementById('menuList');
    const menuToggle = document.getElementById('menuToggle');

    if (window.innerWidth > 768) {
        // Pantallas grandes: muestra el menú en su forma original y oculta el botón
        menuList.classList.remove('active');
        menuList.style.display = 'flex';
        menuList.style.flexDirection = 'row'; // Asegura que los elementos estén en fila
        menuToggle.style.display = 'none';
    } else {
        // Pantallas pequeñas: oculta el menú y muestra el botón
        menuList.style.display = 'none';
        menuToggle.style.display = 'block';
    }
});



//---------------restablece la evnta 
// Escucha cambios en el tamaño de la ventana y restablece el menú si es necesario
window.addEventListener('resize', function() {
    const menuList = document.getElementById('menuList');
    if (window.innerWidth > 768) {
        menuList.classList.remove('show');
        menuList.style.display = 'flex'; // Restablece el menú en pantallas grandes
    } else {
        menuList.style.display = ''; // Deja que el CSS se encargue del comportamiento
    }
});

//---------cierre de hamburgesa----------//
 
//-----------------------------------------------------------------------------------------//

//frangemto de contenido contactos------------------------------------//

let currentIndex1 = 0;
const totalImages1 = document.querySelectorAll('.carousel-images img').length;
const carouselImages1 = document.querySelector('.carousel-images');

// Función para mover las imágenes
function moveSlide(direction) {
    currentIndex1 += direction;

    // Si se llega al final, regresa al inicio
    if (currentIndex1 < 0) {
        currentIndex1 = totalImages1 - 3; // Restamos 3 para ajustar al mostrar solo 3
    } else if (currentIndex1 >= totalImages1 - 2) { // Menos 2 para que ajuste al final
        currentIndex1 = 0; // Volver al primer índice
    }

    // Calcula el desplazamiento en función del índice
    const offset = -currentIndex1 * (100 / 3);
    carouselImages1.style.transform = `translateX(${offset}%)`;
}

// Maneja los botones de movimiento
document.querySelector('.carousel-btn.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.carousel-btn.next').addEventListener('click', () => moveSlide(1));


//efecto de card //
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".cajas");

    cards.forEach((card) => {
        card.classList.add("animate"); // Aplica la clase a todos los cards al mismo tiempo
    });
});

//efecto de card //
document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelectorAll(".carrusel-principal");

    carrusel.forEach((carrusel) => {
        carrusel.classList.add("animate"); // Aplica la clase a todos los cards al mismo tiempo
    });
});

