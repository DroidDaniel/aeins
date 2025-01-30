$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cs-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => errorMessage.remove());

    // Validate all fields
    const fields = form.querySelectorAll("input, select, textarea");
    fields.forEach((field) => {
      field.classList.remove("error-border");
      if (!field.checkValidity()) {
        isValid = false;
        field.classList.add("error-border");

        // Show error message
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.textContent = "This field is required.";
        field.parentNode.appendChild(errorMessage);
      }

      // Validate email format
      if (
        field.type === "email" &&
        !field.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      ) {
        isValid = false;
        field.classList.add("error-border");

        // Show email error message
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter a valid email address.";
        field.parentNode.appendChild(errorMessage);
      }
    });

    if (isValid) {
      // Submit form data to Google Forms
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        mode: "no-cors",
      })
        .then(() => {
          // Clear form fields
          form.reset();

          // Show success message
          const successMessage = document.createElement("div");
          successMessage.className = "success-message";
          successMessage.style.color = "green";
          successMessage.textContent =
            "Your message has been sent successfully!";
          form.appendChild(successMessage);
        })
        .catch((error) => {
          console.error("Error!", error.message);
        });
    }
  });
});
