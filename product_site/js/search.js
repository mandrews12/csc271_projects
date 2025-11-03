/**
 * Meghan Andrews - 10/29/2025
 * This file is used to search for specific journal entries based on the user's search term.
 */

let getKey = document.getElementById('submit-button');

getKey.addEventListener('click', () => {
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
        // 	- Select the current journal entry's text.
        let words = allCards[i].querySelectorAll("p");

        var found = false;
        var j = 0;

        // i used a while loop as I wanted a condition that the loop runs until the end of the list or the matching phrase is found, whichever comes first
        while(j < words.length && !found){
            // 	Check if the searched words matches the words
            if(words[j].innerText.toLowerCase().includes(searchWord.toLowerCase())){
                found = true;
            }
            j++;
        }

        // based on if there is match, show the card
        if(found){
            allCards[i].style.display = "block";
        } else {
            allCards[i].style.display = "none";
        }
    }
});