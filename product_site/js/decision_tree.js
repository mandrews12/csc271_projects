/**
 * Meghan Andrews - 11/30/2025
 * This is a decision tree that generates a todo for the user based on the time of year
 * and the user's first and last frost dates.
 */

// vars
var lastFrostDate = new Date('2026-04-18');
var firstFrostDate = new Date('2026-10-21')
var today = new Date();

var timeDifferenceLF = lastFrostDate-today;
var timeDifferenceFF = firstFrostDate - today;

var date_difLf = Math.ceil(timeDifferenceLF / (1000 * 3600 * 24));
var date_difFF = Math.ceil(timeDifferenceFF / (1000 * 3600 * 24));

function decisionTree(date_dif_LF,date_dif_FF){
    var todo = "nothing right now";
    // Decision Node 1: Before the last frost date
    // Yes: Decision Node 2: <30 days before the last frost date 
    if(date_dif_LF >= 0) {

        // Yes: start seeds and garden prep 
        if(date_dif_LF < 30){
            todo= "Start your seeds indors and get your grarden ready for planting!"

        // No: Get ready for the garden season   
        } else {
            todo="Get all the seeds and supplies you will need for the growing season"
            
        }
     // No: Decision Node 3: <90 days after last frost 
    } else {
        // Yes: transfer plants and direct sow, along with garden maintenance 
        if(date_dif_LF > (-90)) {
            todo="Transplant your plants outside and direct sow and seeds you have. Time to start routine garden and plant care."
        
        // No: Decision Node 4: Before the first frost date 
        } else {
            
            // Yes: start harvesting and plant another round of cool-weather crops 
            if(date_dif_FF > 0){
                todo="Start harvesting and plant another round of crops, especially cold varieties"
            // No: finish harvesting and clean up the garden 
            } else {
                todo="Finish harvesting and clean up the garden for next year."
            }
        }
    }
    return todo;
}

let getTodos = document.querySelector("#get-todo");
let todoP = document.querySelector("#todos");
let isVisible = false;
todoP.style.display = "none";
todoP.innerHTML = decisionTree(date_difLf, date_difFF);

// shows the user the decision tree's output and hides it when the button is clicked
getTodos.addEventListener('click', () => {
    if(isVisible){
        todoP.style.display = "none";
        getTodos.innerText = "Get Todos";
        isVisible = false;
    } else {
        todoP.style.display = "block";
        getTodos.innerText = "Close Todos";
        isVisible = true;
    }
});
