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

/***Form Validation */

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var number = document.getElementById("number").value.trim();
  var message = document.getElementById("message").value.trim();
  var errorMessage = "";

  // Validation
  if (name === "") errorMessage += "Name is required.\n";
  if (email === "" || !email.includes("@"))
    errorMessage += "Valid email is required.\n";
  if (subject === "") errorMessage += "Subject is required.\n";
  if (number === "" || number.length !== 10 || isNaN(number))
    errorMessage += "Valid 10-digit phone number is required.\n";
  if (message === "") errorMessage += "Message cannot be empty.\n";

  if (errorMessage !== "") {
    alert(errorMessage);
    return false;
  }

  return true;
}

function showSuccessMessage() {
  var messageBox = document.querySelector(".form-messages");
  messageBox.innerHTML =
    "Your appointment request has been submitted successfully!";
  messageBox.style.color = "green";
}
