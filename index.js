const myform = document.getElementById('registrationForm');

function addLiveValidation(inputId, validationLogic) {
    const field = document.getElementById(inputId);
   field.addEventListener('blur', () => {
        validationLogic();
    });
}

function validateName() {
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

function validateEmail() {
    let isValid = true;
    const email = document.getElementById('email').value.trim();
    let emailError = document.getElementById('emailError');
    if (email === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = email === '' ? 'Email is required.' : 'Enter a valid email.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    return isValid;
}

function validatePhone() {
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



let isConfirmTouched = false;

function passwordValidation() {

    let isValid = true;
    const password = document.getElementById('password').value;
    let passwordError = document.getElementById('passwordError');
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNum = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);




    if (password.length < 8 || !hasUpper || !hasLower || !hasNum || !hasSpecial) {
        passwordError.textContent = 'Password must contains 8+ chars, upper, lower, number, & symbol.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isConfirmTouched) {
        validateConfirmPassword();
    }

    return isValid;

}

function validateConfirmPassword() {



    let isValid = true;

    isConfirmTouched = true;

    const password = document.getElementById('password').value;

    const confirmPassword = document.getElementById('confirmPassword').value;
    let confirmError = document.getElementById('confirmError');
    if (password > 0 && confirmPassword === '') {
        confirmError.textContent = '';
    }
    else if (confirmPassword === '') {
        confirmError.textContent = 'Confirm password is required.';
        return false;
    } else if (password !== confirmPassword) {
        confirmError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmError.textContent = '';
        return true;
    }

    return isValid;
}

function validateDOB() {
    const dobInput = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError'); 

    // 1. Check if empty
    if (!dobInput) {
        dobError.textContent = 'Date of birth is required.';
        return false;
    }

    const selectedDate = new Date(dobInput);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 2. Check if valid date format
    if (isNaN(selectedDate.getTime())) {
        dobError.textContent = 'Please enter a valid date.';
        return false;
    }

    // 3. Minimum age logic (1900)
    const minDate = new Date("1900-01-01");
    if (selectedDate < minDate) {
        dobError.textContent = 'Date of birth cannot be earlier than 1900.';
        return false;
    }

    if (selectedDate > today) {
        dobError.textContent = 'Date of birth cannot be in the future.';
        return false;
    }

    
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
    }

    if (age < 13) {
        dobError.textContent = 'You must be at least 13 years old.';
        return false;
    }

    dobError.textContent = ''; 
    return true; 
}

function validateTerms() {
    const termsCheckbox = document.getElementById('terms');
    const termsError = document.getElementById('termsError');
    
    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must agree to the terms and conditions.';
        return false;
    } else {
        termsError.textContent = '';
        return true;
    }
}

addLiveValidation('fullName', validateName);
addLiveValidation('email', validateEmail);
addLiveValidation('phone', validatePhone);
addLiveValidation('password', passwordValidation);
addLiveValidation('confirmPassword', validateConfirmPassword);
addLiveValidation('dob', validateDOB);


document.getElementById('terms').addEventListener('change', validateTerms);

myform.addEventListener('submit', function (event) {


    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isDOBValid = validateDOB();
    const isPasswordValid = passwordValidation();
    const isConfirmValid = validateConfirmPassword();
    const isTermsValid = validateTerms();

    const isValid = isNameValid && isEmailValid && isPhoneValid && isDOBValid && isPasswordValid && isConfirmValid && isTermsValid;

    if (isValid) {
        alert('Success! Form is ready to go.');
    } else {
        console.log('Form still has errors.');
    }

    
});