document.getElementById("button").addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "static/files/CV-José Antonio Montaño Gastélum.pdf";
  link.download = "CV.pdf"; // Nombre del archivo descargado

  // Agregar el enlace al DOM (aunque no se verá)
  document.body.appendChild(link);
  
  // Simular clic en el enlace
  link.click();
  
  // Eliminar el enlace del DOM
  document.body.removeChild(link);
});
