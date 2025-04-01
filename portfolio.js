// Toggle hamburger menu on mobile
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // Show/hide nav
});

// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
    });
    if (window.innerWidth <= 768) {
      nav.classList.remove("active"); // Close menu on mobile
    }
  });
});

// Contact form submission simulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  alert(
    `Message from ${name} (${email}): ${message}\n\nThis is a simulation. For real email, set up a backend.`
  );
  this.reset(); // Clear form after submission
});
