const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Select all anchors that toggle between forms
const toggleLinks = document.querySelectorAll('.login-register a');

// Add event listeners to all toggle links
toggleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.id === 'show-register') {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        } else if (link.id === 'show-login') {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    });
});