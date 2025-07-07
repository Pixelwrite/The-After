// Mobile nav toggle
const nav = document.getElementById("nav");
const toggle = document.getElementById("nav-toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("open");
    }
  });
});
