/**
 * Meghan Andrews - 11/9/2025
 * This file is used to customize the profile page for the user and display their info
 */

document.addEventListener('DOMContentLoaded', () => {
    
    displayFrostDateInfo();

    // update every .card with a new font style to add emphesis
    const cards = document.querySelectorAll('.card');
    cards[0].style.fontWeight = "bold";

    updateUserInfo();

    // Form submission handler
    const form = document.getElementById('usernameForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Get the entered username
        const usernameInput = document.getElementById('username').value;

        // Save the username in localStorage
        localStorage.setItem('username', usernameInput);
        
        // display username
        user.innerHTML = "Welcome "+ usernameInput + "!";

        // hide username input form
        element.style.display = "none";
    });

});

/**
 * @brief Function to display the number of days until the next frost date
 */
function displayFrostDateInfo(){
    // calculate days till next frost date
    var lastFrostDate = new Date('2026-04-18');
    var firstFrostDate = new Date('2026-10-21')
    var today = new Date();
    var timeDifference = lastFrostDate-today;

    var date_dif = Math.ceil(timeDifference / (1000 * 3600 * 24));
    var growingSeason = Math.ceil((firstFrostDate - lastFrostDate) / (1000 * 3600 * 24));

    // update html page
    var text = document.getElementsByTagName("p");
    text[0].innerHTML = text[0].innerHTML + " " + date_dif + " days!";
    text[1].innerHTML = text[1].innerHTML + " " + firstFrostDate.getMonth() + "/" +firstFrostDate.getDate() + ", your growing season is about " + growingSeason + " days long";
}

/**
 * @brief Function to check if a user is new or not based on if their username is stored in the local cache
 */
function updateUserInfo(){
    var user = document.getElementById('user');

    // Check if a username is already saved and display it
    const savedUsername = localStorage.getItem('username');
    const element = document.getElementById('username-card');

    // check if usename is already stored and if so hide form submission
    if (savedUsername) {
        user.innerHTML = "Welcome back, "+ savedUsername + "!";
        element.style.display = "none";
    } else {
        element.style.display = "block"
    }
}