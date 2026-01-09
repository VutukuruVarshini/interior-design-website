// Nexora Interiors - Main JavaScript File


console.log("Nexora Interiors website loaded");

// Function to show selected page and hide others
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.add("hidden");
  });

  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.remove("hidden");
  }
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const phoneInput = document.getElementById("phone");
  const successMessage = document.getElementById("successMessage");

  // Allow only numbers while typing
  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const phoneValue = phoneInput.value;

    // Validate exactly 10 digits
    if (phoneValue.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // If valid
    successMessage.style.display = "block";
    form.reset();
  });
});

// Optional: log CTA clicks (safe, simple)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("CTA button clicked");
    });
  });
});


