document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupContainer = document.getElementById('signup-form-container');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    showSignupLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupContainer.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupContainer.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can add logic to handle login authentication
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        // Perform login validation or send data to the server for authentication
        console.log(`Login with: Email: ${email}, Password: ${password}`);
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can add logic to handle signup, e.g., sending data to the server
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        // Perform signup process or send data to the server for registration
        console.log(`Signup with: Name: ${name}, Email: ${email}, Password: ${password}`);
    });
});
