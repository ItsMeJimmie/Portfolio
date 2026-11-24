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

  // Highlight the rail link for whichever section you are reading.
  //
  // The test line sits near the TOP of the viewport rather than a third of
  // the way down: Awards and Writing are shorter than a third of a screen,
  // so a lower line skips straight past them to the following section.
  const railLinks = document.querySelectorAll(".railnav a");

  if (railLinks.length) {
    const sections = Array.prototype.slice.call(
      document.querySelectorAll(".stream > section")
    );
    const LINE = 100; // px below the top of the viewport
    let queued = false;

    function highlight() {
      queued = false;
      const line = window.scrollY + LINE;
      let current = sections[0];

      sections.forEach(function (section) {
        if (section.offsetTop <= line) {
          current = section;
        }
      });

      // at the very bottom the last section wins however short it is
      const atBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 2;
      if (atBottom) {
        current = sections[sections.length - 1];
      }

      railLinks.forEach(function (link) {
        link.classList.toggle("on", link.dataset.spy === current.id);
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!queued) {
          queued = true;
          requestAnimationFrame(highlight);
        }
      },
      { passive: true }
    );
    window.addEventListener("resize", highlight);
    highlight();
  }

});
