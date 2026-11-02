document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu toggle. Uses a real <button> so it is keyboard reachable,
  // and keeps aria-expanded in sync for screen readers.
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function setMenu(open) {
    mobileMenu.classList.toggle("show", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuToggle.addEventListener("click", function () {
    setMenu(!mobileMenu.classList.contains("show"));
  });

  // Close the menu after jumping to a section
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Escape closes the menu and returns focus to the trigger
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu.classList.contains("show")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    backToTop.classList.toggle("show", window.scrollY > 300);
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
