const myform = document.getElementById('registrationForm');

function addLiveValidation(inputId, validationLogic) {
    const field = document.getElementById(inputId);
    field.addEventListener('input', () => {
        validationLogic(); 
    });
}

function validateName(){
    let isValid = true;

    const fullName = document.getElementById('fullName').value.trim();
    const namePattern = /^[a-zA-Z\s]+$/;
    let nameError = document.getElementById('nameError');

    if (fullName === '') {
        nameError.textContent = 'Full name is required.';
        isValid = false;
    } else if (fullName.length < 8) {
        nameError.textContent = 'Full name must be at least 8 characters.';
        isValid = false;
    } else if (!namePattern.test(fullName)) {
        nameError.textContent = 'Only letters and spaces allowed.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    return isValid;
}

function validateEmail(){
    let isValid = true;
     const email = document.getElementById('email').value.trim();
    let emailError = document.getElementById('emailError');
    if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = email === '' ? 'Email is required.' : 'Enter a valid email.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    return isValid;
}

function validatePhone(){
    let isValid = true;
    const phone = document.getElementById('phone').value.trim();
    let phoneError = document.getElementById('phoneError');
    if (phone.length !== 10 || !/^[0-9]+$/.test(phone)) {
        phoneError.textContent = 'Phone must be exactly 10 digits.';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    return isValid;
}

function validateDOB(){
    let isValid = true;
    const dob = document.getElementById('dob').value;
    let dobError = document.getElementById('dobError');
    if (!dob) {
        dobError.textContent = 'Date of Birth is required.';
        isValid = false;
    } else{
        dobError.textContent = '';
    }

    return isValid;

}

function passwordValidation(){

    let isValid = true;
    const password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNum = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length < 8 || !hasUpper || !hasLower || !hasNum || !hasSpecial) {
        passwordError.textContent = 'Password needs 8+ chars, upper, lower, number, & symbol.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    return isValid;

}

function validateConfirmPassword() {
        

    
    let isValid = true;

    const password = document.getElementById('password').value;
   
    const confirmPassword = document.getElementById('confirmPassword').value;
    let confirmError = document.getElementById('confirmError');
    if (confirmPassword !== password || confirmPassword === '') {
        confirmError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmError.textContent = '';
    }

    return isValid;
}

addLiveValidation('fullName', validateName);
addLiveValidation('email', validateEmail);
addLiveValidation('phone', validatePhone);
addLiveValidation('password', passwordValidation);
addLiveValidation('confirmPassword', validateConfirmPassword);
addLiveValidation('dob', validateDOB);


myform.addEventListener('submit', function (event) {
    event.preventDefault();

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validateDOB() &&
        passwordValidation() &&
        validateConfirmPassword();

    if (isValid) {
        alert('Success! Form is ready to go.');
    } else {
        console.log('Form still has errors.');
    }
});