/**
 * Meghan Andrews - 10/28/2025
 * This reads in data from a JSON file and dynamically creates html to display the information
 * The data in data/plants.json was created using chatgpt and I was having an issue with reading the JSON
 * so I asked chat and it debugged a few lines in my code in the fetch function (flagged with //AI Assisted)
 * link to chat: https://chatgpt.com/share/6907f9c0-2f10-8001-9bde-b2886f20e540
 */

// fetches my plant data from a json file
fetch('data/plants.json')
  .then(response => response.json())
  //AI Assisted with bebugging, see top of file for full documentation
  .then(data => {
    console.log(data.plants);
    buildPlantTable(data.plants);
    buildBasketTable(data.plants);
  })
  .catch(console.error);

// Function to build user basket
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
            <span><strong>Sun:</strong> ${plant.sun_requirements}</span>
            <span><strong>Water:</strong> ${plant.water_needs}</span>
            </div>
            <div>
            <span><strong>Germinate:</strong> ${plant.days_to_germinate} days</span>
            <span><strong>Harvest:</strong> ${plant.days_to_harvest} days</span>
            </div>
            <div>
            <span><strong>Spacing:</strong> ${plant.spacing}</span>
            <span><strong>pH:</strong> ${plant.soil_type}</span>
            </div>
            <div>
            <span><strong>Type:</strong> ${plant.plant_type}</span>
            <span><strong>Difficulty:</strong>     ${plant.difficulty_level}</span>
            </div>
        </div>
        <div>
            <p><strong>Companions:</strong> ${plant.companion_planting.join(', ')}</p>
            <p><strong>Avoid:</strong> ${plant.avoid_planting_near.join(', ')}</p>
            <p> ${plant.notes}</p>
        </div>
        `;

        // Append to container
        container.appendChild(card);
    }
  });
}

// Function to create plant cards dynamically
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
          <span><strong>pH:</strong> ${plant.soil_type}</span>
        </div>
        <div>
          <span><strong>Type:</strong> ${plant.plant_type}</span>
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
  
  // by default the plant cards are visible
  var isDatabaseVisible = false;
  var isBasketVisible = false;
  
  databseContent.style.display = "none";
  basketContent.style.display = "none";

  // buttons used for showing/hiding the plants
  const browsePlantsButton = document.getElementById('database-button');
  const basketButton = document.getElementById('basket-button');

  // event listen to hide/show the plant database
  browsePlantsButton.addEventListener('click', () => {
      if(isDatabaseVisible == false){
          databseContent.style.display = "block";
          browsePlantsButton.innerText = "Close Plant Database";
          isDatabaseVisible = true;
      } else {
          databseContent.style.display = "none";
          browsePlantsButton.innerText = "Browse Plants";
          isDatabaseVisible = false;
      } 
  });

  // event listen to hide/show the user's basket
  basketButton.addEventListener('click', () => {
      if(isBasketVisible == false){
          basketContent.style.display = "block";
          basketButton.innerText = "Close Basket";
          isBasketVisible = true;
      } else {
          basketContent.style.display = "none";
          basketButton.innerText = "View Basket";
          isBasketVisible = false;
      } 
  });
});