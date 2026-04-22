/* Qwan Ki Do – Tay Son Vigevano
   main.js — interazioni minime (no dipendenze)
   - Toggle menu mobile
   - Reveal on scroll (IntersectionObserver)
   - Anno corrente nel footer
*/

(function () {
  'use strict';

  /* Mobile nav toggle --------------------------------------------------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var drawer = document.querySelector('[data-nav-drawer]');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      drawer.setAttribute('data-open', String(!open));
    });
    // Chiudi drawer al click di un link
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('data-open', 'false');
      });
    });
  }

  /* Reveal on scroll ---------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: mostra tutto
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Anno corrente nel footer ------------------------------------------- */
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
