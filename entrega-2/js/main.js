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

  // ─── Formulario de contacto accesible ────────────────────────
  // Validación con aria-invalid + mensajes de error visibles
  // (anunciados vía aria-describedby) + mueve el foco al primer
  // campo erróneo. El resultado se anuncia con aria-live, no alert.
  var form = document.getElementById('form-contacto');

  if (form) {
    var campos = [
      {
        id: 'nombre',
        mensaje: 'Por favor ingresa tu nombre completo.',
        validar: function (v) { return v.trim() !== ''; }
      },
      {
        id: 'correo',
        mensaje: 'Por favor ingresa un correo electrónico válido (ejemplo: nombre@dominio.com).',
        validar: function (v) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim()); }
      },
      {
        id: 'telefono',
        mensaje: 'Por favor ingresa un teléfono de contacto.',
        validar: function (v) { return v.trim() !== ''; }
      },
      {
        id: 'mensaje',
        mensaje: 'Por favor cuéntanos sobre tu proyecto o consulta.',
        validar: function (v) { return v.trim() !== ''; }
      }
    ];

    var status = document.getElementById('form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valido = true;
      var primerErrorEl = null;
      var errores = 0;

      campos.forEach(function (campo) {
        var input = document.getElementById(campo.id);
        var errorEl = document.getElementById(campo.id + '-error');
        if (!input || !errorEl) return;

        if (!campo.validar(input.value)) {
          input.setAttribute('aria-invalid', 'true');
          errorEl.textContent = campo.mensaje;
          errorEl.removeAttribute('hidden');
          if (!primerErrorEl) primerErrorEl = input;
          errores++;
          valido = false;
        } else {
          input.setAttribute('aria-invalid', 'false');
          errorEl.textContent = '';
          errorEl.setAttribute('hidden', '');
        }
      });

      if (valido) {
        status.textContent = 'Mensaje enviado correctamente. Un asesor te contactará pronto.';
        status.classList.remove('form-status--error');
        status.classList.add('form-status--ok');
        form.reset();
        // Limpia estados de aria-invalid tras reset
        campos.forEach(function (c) {
          var el = document.getElementById(c.id);
          if (el) el.removeAttribute('aria-invalid');
        });
      } else {
        status.textContent =
          'Por favor corrige los campos marcados. Errores encontrados: ' + errores + '.';
        status.classList.remove('form-status--ok');
        status.classList.add('form-status--error');
        if (primerErrorEl) primerErrorEl.focus();
      }
    });
  }

});
