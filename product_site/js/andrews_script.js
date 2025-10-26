
document.addEventListener('DOMContentLoaded', () => {
    
    // calculate days till next frost date
    var date1 = new Date('2026-05-17');
    var today = new Date();
    var timeDifference = date1-today;

    var date_dif = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // update html page
    var text = document.getElementsByTagName("p");
    text[0].innerHTML = text[0].innerHTML + " " + date_dif + " days!";


    // update every .card with a new font style to add emphesis
    const cards = document.querySelectorAll('.card');
    cards[0].style.fontWeight = "bold";

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