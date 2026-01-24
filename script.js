function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  mobileLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      document.getElementById("mobileMenu").classList.remove("show");
    });
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
