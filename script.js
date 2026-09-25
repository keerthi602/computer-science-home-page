// Mobile Menu

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "#dc2626";
    formMessage.textContent = "Please fill all the fields.";
    return;
  }

  formMessage.style.color = "#16a34a";
  formMessage.textContent = "Message sent successfully!";

  contactForm.reset();
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("navLinks").classList.remove("active");
  });
});
