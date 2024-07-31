document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Prepare data to send
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Simulate sending data (replace this with actual AJAX request)
    setTimeout(() => {
        document.getElementById('responseMessage').innerText = 'Message sent successfully!';
        document.getElementById('responseMessage').style.color = 'green';
        document.getElementById('contactForm').reset();
    }, 1000);
});
