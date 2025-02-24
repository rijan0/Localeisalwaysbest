// Initialize EmailJS (with your user ID)
(function() {
    emailjs.init("qOCLEp64oC5Zl84As");
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare data to send to the template
    const templateParams = {
        user_name: name,
        user_email: email,
        message: message
    };

    // Send the email using the template
    emailjs.send("service_z5h7lhb", "template_wpxlrbg", templateParams)
        .then(function(response) {
            console.log("SUCCESS", response);
            alert("Thank you for your message! I will get back to you soon.");
            document.getElementById("contact-form").reset();
        }, function(error) {
            console.log("FAILED", error);
            alert("Oops! Something went wrong, please try again later.");
        });
});
