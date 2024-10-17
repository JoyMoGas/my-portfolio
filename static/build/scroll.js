document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir el comportamiento predeterminado

      const targetId = this.getAttribute('href'); // Obtener el id del objetivo
      const targetElement = document.querySelector(targetId); // Seleccionar el elemento objetivo
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    });
  });
});
