
/* =========================================
   LYKA'S RESTAURANT - JAVASCRIPT
========================================= */

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a navigation link.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Close the menu when clicking outside it.
document.addEventListener("click", function (event) {
    const clickedInsideNav = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
        closeMenu();
    }
});

// Reset navigation when returning to desktop width.
window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        closeMenu();
    }
});


// AUTOMATIC COPYRIGHT YEAR
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// CONTACT FORM DEMO
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please complete all the fields.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name +
        "! The form demo is working. To receive actual messages, " +
        "connect a form service or backend.";

    contactForm.reset();
});
