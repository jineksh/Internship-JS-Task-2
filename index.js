
const myform = document.getElementById('registrationForm');

function validateInput(event) {

    let isValid = true;


    if (event) event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();

    const email = document.getElementById('email').value;

    const phone = document.getElementById('phone').value;

    const dob = document.getElementById('dob').value;

    const password = document.getElementById('password').value;

    const confirmPassword = document.getElementById('confirmPassword').value;

    let nameError = document.getElementById('nameError');

    if (fullName === '') {
        nameError.textContent = 'Full name is required.';
        isValid = false;
    }
    else if (fullName.length < 8) {
        nameError.textContent = 'Full name must require 8 characters.';
        isValid = false;
    }
    else if (!namePattern.test(fullName)) {
        nameError.textContent = 'Only letters are allowed (no numbers or symbols).';
        isValid = false;
    }
    else {
        nameError.textContent = '';
    }

    let emailError = document.getElementById('emailError');
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;

    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;

    } else {
        emailError.textContent = '';

    }

    let phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]+$/;

    if (phone === '') {
        phoneError.textContent = 'Phone number is required';
        isValid = false;
    }
    else if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Only numbers are allowed';
        isValid = false;
    }
    
    else if (phone.length !== 10) {
        phoneError.textContent = 'Phone number must be exactly 10 digits';
        isValid = false;
    }
    else {
        phoneError.textContent = '';
    }

    let dobError = document.getElementById('dobError');
    if (dob == '') {
        dobError.textContent = 'dob is required';
        isValid = false;

    }
    else {
        dobError.textContent = '';

    }


    let passwordError = document.getElementById('passwordError');

    if (password === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;

    }
    else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;

    }
    else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = 'Include at least one uppercase letter (A-Z).';
        isValid = false;

    }
    else if (!/[a-z]/.test(password)) {
        passwordError.textContent = 'Include at least one lowercase letter (a-z).';
        isValid = false;

    }
    else if (!/[0-9]/.test(password)) {
        passwordError.textContent = 'Include at least one number (0-9).';

    }
    else if (!/[!@#$%^&*]/.test(password)) {
        passwordError.textContent = 'Include at least one special character (!@#$%^&*).';

    }
    else {
        passwordError.textContent = '';

    }


    let confirmError = document.getElementById('confirmError');

    if (confirmPassword === '') {
        confirmError.textContent = 'Please confirm your password.';
        isValid = false;

    }
    else if (confirmPassword !== password) {
        confirmError.textContent = 'Passwords do not match.';
        alert('Password do not match.');
        isValid = false;

    }
    else {
        confirmError.textContent = '';
    }

    return isValid;

}


myform.addEventListener('submit', function (event) {


    event.preventDefault();

    console.log('button clicked');

    let valid = validateInput(event);

    if (valid) {
        console.log('Form is Valid');
        alert('Form is Valid');
    }
    else {
        console.log('Form is not valid');
        alert('Form is not valid');
    }

});
