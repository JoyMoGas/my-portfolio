// Obtén los elementos del DOM
const toggle = document.getElementById('_toggle') as HTMLElement;
const navItems = document.getElementById('_items') as HTMLElement;

// Función para abrir/cerrar el menú
toggle.onclick = () => {
    navItems.classList.toggle("open");
    toggle.classList.toggle("close");
};

// Función para manejar el desplazamiento suave
const smoothScroll = (event: MouseEvent): void => {
    const target = (event.currentTarget as HTMLAnchorElement).hash; // Obtiene el hash del enlace
    const targetElement = document.querySelector(target) as HTMLElement; // Selecciona el elemento de destino

    // Asegúrate de que el elemento de destino existe
    if (targetElement) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Desplazamiento suave al elemento
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Alinea el elemento en la parte superior de la vista
        });

        // Enfocar el elemento después del desplazamiento
        targetElement.setAttribute('tabindex', '-1'); // Asegúrate de que el elemento sea enfocables
        targetElement.focus();
    }
};

// Seleccionar todos los enlaces que tienen un hash
const linksWithHashes = document.querySelectorAll('a[href*="#"]');

// Iterar sobre cada enlace y agregar un evento de clic
linksWithHashes.forEach(link => {
    // Verificar que 'link' sea un HTMLAnchorElement
    const anchor = link as HTMLAnchorElement;

    // Excluir enlaces que no apuntan a nada
    if (anchor.getAttribute('href') !== '#' && anchor.getAttribute('href') !== '#0') {
        anchor.addEventListener('click', (event) => {
            // Verificar si el enlace apunta a la misma página
            if (
                location.pathname.replace(/^\//, '') === anchor.pathname.replace(/^\//, '') &&
                location.hostname === anchor.hostname
            ) {
                smoothScroll(event as MouseEvent); // Llamada a la función de desplazamiento suave
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.1, // Define cuánta parte de la sección debe estar visible antes de activarla
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Deja de observar la sección una vez que es visible
        }
      });
    }, options);
  
    sections.forEach((section) => {
      section.classList.add("fade-in"); // Agrega la clase de fade-in a cada sección
      observer.observe(section); // Observa cada sección
    });
  });
  