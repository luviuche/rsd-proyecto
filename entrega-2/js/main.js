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

});
