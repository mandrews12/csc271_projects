/**
 * Meghan Andrews - 11/16/2025
 * This script handles form validation and submission for the feature suggestion form.
 */

var emailInput = document.getElementById('email');
var form = document.getElementById('userForm');

/**
 * @brief Validates the email input field
 */
function validateEmail() {
    var emailValue = emailInput.value;
    if (emailValue == '' || !emailValue.includes('@')) {
        alert('Error: Please enter a valid email address.');
    }
}

/** 
 * @brief Resets the placeholder text when the email input gains focus
 */
function gainsFocus() {
    emailInput.placeholder = "Enter a valid email address";
}

/**
 * @brief Handles form submission
 * @param event - The form submission event
 */
function handleSubmit(event) {
    event.preventDefault();
    alert('Your responses were successfully recorded.');
    form.reset();
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', gainsFocus);
form.addEventListener('submit', handleSubmit);
