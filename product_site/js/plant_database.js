/**
 * Meghan Andrews - 10/28/2025
 * This reads in data from a JSON file and dynamically creates html to display the information
 * The data in data/plants.json was created using chatgpt and I was having an issue with reading the JSON
 * so I asked chat and it debugged a few lines in my code in the fetch function (flagged with //AI Assisted)
 * link to chat: https://chatgpt.com/share/6907f9c0-2f10-8001-9bde-b2886f20e540
 */

let allPlants = [];

// fetches my plant data from a json file
fetch('data/plants.json')
  .then(response => response.json())
  //AI Assisted with bebugging, see top of file for full documentation
  .then(data => {
    populate(data);
  })
  .catch(console.error);


function populate(data){
  buildPlantTable(data.plants);
  buildBasketTable(data.plants);
  allPlants = data.plants;
}

/**
 * @brief Function to take a list of plants and dynamically build html to display them to the user if they're in the user's basket 
 * 
 * @param plants - a list of plants and information about them
 */
function buildBasketTable(plants) {
  const container = document.getElementById("basket-list");
  container.innerHTML = ""; 

  plants.forEach(plant => {
    // Create card element
    const card = document.createElement("div");
    card.className = "plant-card";

    if(plant.in_basket == true) {
      // Card content
      card.innerHTML = `
      <div>
          <h2>${plant.plant_name}</h2>
          <p><em>${plant.scientific_name}</em></p>
        </div>
        <div>
            <div>
              <span><strong>Sun:</strong>${plant.sun_requirements}</span>
              <span><strong>Water:</strong>${plant.water_needs}</span>
            </div>
            <div>
              <span><strong>Germinate:</strong>${plant.days_to_germinate} days</span>
              <span><strong>Harvest:</strong>${plant.days_to_harvest} days</span>
            </div>
            <div>
              <span><strong>Spacing:</strong>${plant.spacing}</span>
              <span><strong>pH:</strong>${plant.soil_type}</span>
            </div>
            <div>
              <span><strong>Type:</strong>${plant.plant_type}</span>
              <span><strong>Difficulty:</strong>${plant.difficulty_level}</span>
            </div>
        </div>
        <div>
          <p><strong>Companions:</strong>${plant.companion_planting.join(', ')}</p>
          <p><strong>Avoid:</strong>${plant.avoid_planting_near.join(', ')}</p>
          <p>${plant.notes}</p>
        </div>
        `;
 
        // Append to container
        container.appendChild(card);
    }
  });
}

/**
 * @brief Function to take a list of plants and dynamically build html to display them to the user
 * 
 * @param plants - a list of plants and information about them
 */
function buildPlantTable(plants) {
  const container = document.getElementById("plant-list");
  container.innerHTML = "";

  plants.forEach(plant => {
    // Create card element
    const card = document.createElement("div");
    card.className = "plant-card";

    // Card content that has each plant's information
    card.innerHTML = `
      <div>
        <h2>${plant.plant_name}</h2>
        <p><em>${plant.scientific_name}</em></p>
      </div>
      <div>
        <div>
          <span><strong>Sun:</strong> ${plant.sun_requirements}</span>
          <span><strong>Water:</strong> ${plant.water_needs}</span>
        </div>
        <div>
          <span><strong>Germinate:</strong> ${plant.days_to_germinate} days</span>
          <span><strong>Harvest:</strong> ${plant.days_to_harvest} days</span>
        </div>
        <div>
          <span><strong>Spacing:</strong> ${plant.spacing}</span>
          <span><strong>pH:</strong>${plant.soil_type}</span>
        </div>
        <div>
          <span><strong>Type:</strong>${plant.plant_type}</span>
          <span><strong>Difficulty:</strong> ${plant.difficulty_level}</span>
        </div>
      </div>
      <div>
        <p><strong>Companions:</strong> ${plant.companion_planting.join(', ')}</p>
        <p><strong>Avoid:</strong> ${plant.avoid_planting_near.join(', ')}</p>
        <p>${plant.notes}</p>
      </div>
    `;

    // Append to container
    container.appendChild(card);
  });
}

// function for showing/hiding the plant database and the items in the user's basket
document.addEventListener('DOMContentLoaded', () => {
  // gets elements and stores them in variables
  const databseContent = document.getElementById('plant-list');
  const basketContent = document.getElementById('basket-list');
  const toolbar = document.querySelector('#database-search-bar');
  const btoolbar = document.querySelector('#basket-search-bar');
  
  // by default the plant cards are visible
  var isDatabaseVisible = false;
  var isBasketVisible = false;
  
  databseContent.style.display = "none";
  basketContent.style.display = "none";
  toolbar.style.display = "none";
  btoolbar.style.display = "none";

  // buttons used for showing/hiding the plants
  const browsePlantsButton = document.getElementById('database-button');
  const basketButton = document.getElementById('basket-button');

  // event listen to hide/show the plant database
  browsePlantsButton.addEventListener('click', () => {
      if(isDatabaseVisible == false){
          databseContent.style.display = "block";
          toolbar.style.display = "block";
          browsePlantsButton.innerText = "Close Plant Database";
          isDatabaseVisible = true;
      } else {
          databseContent.style.display = "none";
          toolbar.style.display = "none";
          browsePlantsButton.innerText = "Browse Plants";
          isDatabaseVisible = false;
      } 
  });

  // event listen to hide/show the user's basket
  basketButton.addEventListener('click', () => {
      if(isBasketVisible == false){
          basketContent.style.display = "block";
          btoolbar.style.display = "block";
          basketButton.innerText = "Close Basket";
          isBasketVisible = true;
      } else {
          basketContent.style.display = "none";
          basketButton.innerText = "View Basket";
          btoolbar.style.display = "none";
          isBasketVisible = false;
      } 
  });
});


// Get the dropdown element for filtering ratings by its ID
var bfilterDropdown = document.getElementById('basket-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
bfilterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_val = bfilterDropdown.value;

    if(selected_val == "A-Z") {
      plants = alphabetizePlants(allPlants);
      buildBasketTable(plants);
    } else if ( selected_val == "Type") {
      plants = sortTypePlants(allPlants);
      buildBasketTable(plants);
    } else if ( selected_val == "Difficulty") {
      plants = sortDifPlants(allPlants);
      buildBasketTable(plants);
    } 

});

// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('database-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;

    if(selected_rating == "A-Z") {
      plants = alphabetizePlants(allPlants);
      buildPlantTable(plants);
    } else if ( selected_rating == "Type") {
      plants = sortTypePlants(allPlants);
      buildPlantTable(plants);
    } else if ( selected_rating == "Difficulty") {
      plants = sortDifPlants(allPlants);
      buildPlantTable(plants);
    } 

});

/**
 * @brief Function to take a list and sort them alphabetically
 * 
 * @param plants - var storing a list of plant objects
 * @returns an ordered list of plants to be displayed to the user
 */
function alphabetizePlants(plants){
  return plants.sort((a, b) => a.plant_name.localeCompare(b.plant_name));
}


/**
 * @brief Function to take a list and sort them by type
 * 
 * @param plants - var storing a list of plant objects
 * @returns an ordered list of plants to be displayed to the user
 */
function sortTypePlants(plants){
  return plants.sort((a, b) => a.plant_type.localeCompare(b.plant_type));
}

/**
 * @brief Function to take a list and sort them by difficulty
 * 
 * @param plants - var storing a list of plant objects
 * @returns an ordered list of plants to be displayed to the user
 */
function sortDifPlants(plants){
  return plants.sort((a, b) => a.difficulty_level.localeCompare(b.difficulty_level));
}