function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

// Close mobile menu when clicking a link
document.addEventListener("DOMContentLoaded", function() {
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  mobileLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      document.getElementById("mobileMenu").classList.remove("show");
    });
  });
});
