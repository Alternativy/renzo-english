//  const enlaces = document.querySelectorAll('nav a');

//   // Recorrer los enlaces y agregar un evento "click" a cada uno
//   enlaces.forEach((enlace) => {
//     enlace.addEventListener('click', (evento) => {
//       // Prevenir el comportamiento por defecto del enlace (scroll)
//       evento.preventDefault();

//       // Obtener el ID de la sección correspondiente al enlace
//       const seccionId = enlace.getAttribute('href').substring(1);

//       // Obtener todas las secciones
//       const secciones = document.querySelectorAll('main > div');

//       // Recorrer las secciones y ocultar todas excepto la correspondiente al enlace
//       secciones.forEach((seccion) => {
//         if (seccion.getAttribute('id') === seccionId) {
//           seccion.classList.remove('oculto');
//         } else {
//           seccion.classList.add('oculto');
//         }
//       });
//     });
//   });

//   // Obtener todos los elementos del menú
//   let navLinks = document.querySelectorAll("nav a");

//   // Iterar sobre cada elemento y agregar un listener de clic
//   navLinks.forEach(function(link) {
//     link.addEventListener("click", function(event) {
//       // Prevenir que el enlace redirija a otra página
//       event.preventDefault();

//       // Quitar la clase "selected" del elemento anterior
//       let previousLink = document.querySelector("nav a.selected");
//       previousLink.classList.remove("selected");

//       // Agregar la clase "selected" al elemento clickeado
//       link.classList.add("selected");
//     });
//   });

const enlaces = document.querySelectorAll('nav a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    const seccionId = enlace.getAttribute('href').substring(1);
    const secciones = document.querySelectorAll('main > div');

    secciones.forEach((seccion) => {
      if (seccion.getAttribute('id') === seccionId) {
        seccion.classList.remove('oculto');
      } else {
        seccion.classList.add('oculto')
        seccion.querySelectorAll("iframe").forEach((iframe)=>{
          const src = iframe.src;
          iframe.src = src ;
        });
      }
    });

    // Caso especial para "Trabajos": quitar la clase "oculto" de la sección "audiovisuales"
    if (seccionId === 'trabajos') {
      const audiovisualesSection = document.querySelector('.audiovisuales');
      audiovisualesSection.classList.remove('oculto');
    }

    enlaces.forEach((link) => {
      link.classList.remove('selected');
    });

    enlace.classList.add('selected');
  });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNRcLHovpfbDt_9yu1ct3MHC01X8EiypU",
  authDomain: "renzomarkow.firebaseapp.com",
  projectId: "renzomarkow",
  storageBucket: "renzomarkow.appspot.com",
  messagingSenderId: "539446676892",
  appId: "1:539446676892:web:aea3d5d9770d401a528c59",
  measurementId: "G-LY2S8HMP7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);