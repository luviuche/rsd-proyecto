// JavaScript principal del sitio RSD - Entrega 2
// Vanilla JS, sin librerías. Solo addEventListener (sin handlers inline).

document.addEventListener('DOMContentLoaded', function () {

  // ─── Acordeón accesible ──────────────────────────────────────
  // Cada panel se controla con <button aria-expanded> que apunta a
  // un contenido vía aria-controls. El contenido se oculta con el
  // atributo HTML "hidden". Enter/Espacio funcionan nativamente al
  // ser <button>.
  var botonesAcordeon = document.querySelectorAll('.acordeon-titulo');

  botonesAcordeon.forEach(function (boton) {
    boton.addEventListener('click', function () {
      var expandido = boton.getAttribute('aria-expanded') === 'true';
      var contenidoId = boton.getAttribute('aria-controls');
      var contenido = document.getElementById(contenidoId);

      boton.setAttribute('aria-expanded', expandido ? 'false' : 'true');

      if (contenido) {
        if (expandido) {
          contenido.setAttribute('hidden', '');
        } else {
          contenido.removeAttribute('hidden');
        }
      }
    });
  });

  // ─── Carrusel accesible ──────────────────────────────────────
  // Botones reales (<button>), slides ocultos con el atributo
  // HTML "hidden" para que estén fuera del árbol de accesibilidad
  // mientras no son la diapositiva activa. aria-live="polite" en el
  // contenedor anuncia el caption cuando cambia la diapositiva.
  var carrusel = document.querySelector('.carrusel');

  if (carrusel) {
    var slides = carrusel.querySelectorAll('.carrusel-slide');
    var btnPrev = carrusel.querySelector('.carrusel-btn.prev');
    var btnNext = carrusel.querySelector('.carrusel-btn.next');
    var indiceActivo = 0;

    function mostrarSlide(indice) {
      slides.forEach(function (slide, i) {
        if (i === indice) {
          slide.removeAttribute('hidden');
        } else {
          slide.setAttribute('hidden', '');
        }
      });
      indiceActivo = indice;
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', function () {
        mostrarSlide((indiceActivo - 1 + slides.length) % slides.length);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', function () {
        mostrarSlide((indiceActivo + 1) % slides.length);
      });
    }
  }

});
