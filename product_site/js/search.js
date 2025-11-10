/**
 * Meghan Andrews - 10/29/2025
 * This file is used to search for specific journal entries based on the user's search term.
 */

let journalSubmit = document.getElementById('submit-button');

journalSubmit.addEventListener('click', () => {
    // Get the search word from the input
    var key = document.getElementById('search');
        
    // Store the search word in a var
    var searchWord = key.value;
    searchWord.trim();

    // - Select ALL journal rntries and store in a variable.
    let allCards = document.querySelectorAll("td.entry");

    // For loop through each card to update its content with review information
    // I choose a for loop as I wanted to loop through a set number of items
    for(let i = 0; i < allCards.length; i++){

        let found = search(allCards[i], searchWord);

        // based on if there is match, show the card
        if(found){
            allCards[i].style.display = "block";
        } else {
            allCards[i].style.display = "none";
        }
    }
});

/**
 * @brief Function to search a specified card to see if a matching string can be found
 * 
 * @param card - var storing the text to search through
 * @param searchWord - var storing the word the user wants to match
 * 
 * @returns if the card contains the word or not
 */
function search(card, searchWord){
    if(card.innerText.toLowerCase().includes(searchWord.toLowerCase())){
        return true;
    }
    return false;
};