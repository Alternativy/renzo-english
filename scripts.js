 const enlaces = document.querySelectorAll('nav a');

  // Recorrer los enlaces y agregar un evento "click" a cada uno
  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', (evento) => {
      // Prevenir el comportamiento por defecto del enlace (scroll)
      evento.preventDefault();

      // Obtener el ID de la sección correspondiente al enlace
      const seccionId = enlace.getAttribute('href').substring(1);

      // Obtener todas las secciones
      const secciones = document.querySelectorAll('main > div');

      // Recorrer las secciones y ocultar todas excepto la correspondiente al enlace
      secciones.forEach((seccion) => {
        if (seccion.getAttribute('id') === seccionId) {
          seccion.classList.remove('oculto');
        } else {
          seccion.classList.add('oculto');
        }
      });
    });
  });

  // Obtener todos los elementos del menú
  let navLinks = document.querySelectorAll("nav a");

  // Iterar sobre cada elemento y agregar un listener de clic
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      // Prevenir que el enlace redirija a otra página
      event.preventDefault();

      // Quitar la clase "selected" del elemento anterior
      let previousLink = document.querySelector("nav a.selected");
      previousLink.classList.remove("selected");

      // Agregar la clase "selected" al elemento clickeado
      link.classList.add("selected");
    });
  });
