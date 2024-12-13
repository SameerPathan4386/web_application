<!-- this is scripts.js file which works with styles.css and login.html -->
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const togglePassword = document.getElementById('toggle-password');

    form.addEventListener('submit', (e) => {
        let valid = true;

        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            usernameError.style.display = 'block';
            valid = false;
        } else {
            usernameError.style.display = 'none';
        }

        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            passwordError.style.display = 'block';
            valid = false;
        } else {
            passwordError.style.display = 'none';
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    togglePassword.addEventListener('click', () => {
        if (password.type === 'password') {
            password.type = 'text';
            togglePassword.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            password.type = 'password';
            togglePassword.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});
