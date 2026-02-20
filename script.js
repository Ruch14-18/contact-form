const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submission

    // get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    // reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // ✅ Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // ✅ Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // ✅ Message validation
    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }

    // ✅ Success
    if (isValid) {
        successMsg.textContent = "Form submitted successfully!";
        form.reset();
    }
});