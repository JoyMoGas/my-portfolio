"use strict";
// Obtén los elementos del DOM
const toggle = document.getElementById('_toggle');
const navItems = document.getElementById('_items');
// Función para abrir/cerrar el menú
toggle.onclick = () => {
    navItems.classList.toggle("open");
    toggle.classList.toggle("close");
};
// Función para manejar el desplazamiento suave
const smoothScroll = (event) => {
    const target = event.currentTarget.hash; // Obtiene el hash del enlace
    const targetElement = document.querySelector(target); // Selecciona el elemento de destino
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
    const anchor = link;
    // Excluir enlaces que no apuntan a nada
    if (anchor.getAttribute('href') !== '#' && anchor.getAttribute('href') !== '#0') {
        anchor.addEventListener('click', (event) => {
            // Verificar si el enlace apunta a la misma página
            if (location.pathname.replace(/^\//, '') === anchor.pathname.replace(/^\//, '') &&
                location.hostname === anchor.hostname) {
                smoothScroll(event); // Llamada a la función de desplazamiento suave
            }
        });
    }
});
