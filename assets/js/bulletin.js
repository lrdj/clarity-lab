(function () {
  "use strict";

  /* Pages with a hero are deliberately chrome-free on the first viewport
     (see the direction contract); the nav appears once the visitor has
     moved past it. Pages with no hero (booking, blog, etc.) have nothing
     to be chrome-free above, so the nav's CSS default is simply visible —
     this only ever hides it, and only when there's a hero to justify it. */
  var nav = document.getElementById("bl-nav");
  var hero = document.querySelector(".bl-hero");
  if (!nav || !hero) return;

  nav.classList.add("bl-nav--hero-mode");

  if (!("IntersectionObserver" in window)) {
    nav.classList.add("is-visible");
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        nav.classList.toggle("is-visible", !entry.isIntersecting);
      });
    },
    { threshold: 0, rootMargin: "-70% 0px 0px 0px" }
  );
  io.observe(hero);
})();
