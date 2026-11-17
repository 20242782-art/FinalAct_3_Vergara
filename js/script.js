const emailInput = document.getElementById("email");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("form-status");

// Email popup while typing
emailInput.addEventListener("input", function () {
    if (emailInput.value !== "" && !emailInput.checkValidity()) {
        emailInput.reportValidity();
    }
});

// "Message sent" indicator
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent = "✔ Message sent! Thank you for contacting us.";
    formStatus.classList.add("contact-form__status--show");
    contactForm.reset();

    setTimeout(function () {
        formStatus.classList.remove("contact-form__status--show");
    }, 5000);
});