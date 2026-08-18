(function () {
  "use strict";

  /* The first viewport is deliberately chrome-free (see the direction
     contract); the nav appears once the visitor has moved past the hero. */
  var nav = document.getElementById("bl-nav");
  var hero = document.querySelector(".bl-hero");
  if (!nav || !hero) return;

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
