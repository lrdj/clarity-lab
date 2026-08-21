(function () {
  "use strict";

  var nav = document.getElementById("bl-nav");
  if (!nav) return;

  /* The nav is position:fixed, so pages need its real height reserved in
     their layout (see .bl-main padding-top in bulletin.css). Measured
     rather than guessed at a breakpoint, since it wraps to two rows on
     narrow phones and one row everywhere else. */
  function setNavHeightVar() {
    document.documentElement.style.setProperty("--bl-nav-height", nav.offsetHeight + "px");
  }
  setNavHeightVar();
  window.addEventListener("resize", setNavHeightVar);

  /* Only the home page's full-height hero is deliberately chrome-free on
     the first viewport (see the direction contract); banner heroes
     (blog posts, podcast pages) anchor their heading near the bottom of a
     much shorter frame and don't share that justification, so their nav
     stays visible like any other page. */
  var hero = document.querySelector(".bl-hero:not(.bl-hero--banner)");
  if (!hero) return;

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
