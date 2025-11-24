/**
 * Meghan Andrews - 11/17/2025
 * GardenLayout object to manage garden layout data and interactions.
 * 
 * Use our interactive garden layout tool to plan and visualize your garden space. Drag and drop plants to see how they fit together, and get suggestions for optimal placement.
 */

function GardenLayout(layoutName, height, width) {
    // store plant lists on the instance to avoid globals
    this.plants = ["tomato", "carrot", "lettuce", "pepper", "cucumber", "squash", "eggplant", "zucchini", "basil", "mint", "rosemary", "thyme"];
    this.plantEmojis = ["🍅", "🥕", "🥬", "🌶️", "🥒", "🎃", "🍆", "🥒", "🌿", "🌱", "🌿", "🌱"];
    this.layoutName = layoutName;
    this.height = height;
    this.width = width;

    this.displayLayout = function(id) {
        const tableId = id + '-table';
        let table = '<table id="' + tableId + '" class="garden-layout-table" border="1">';
        for (let i = 0; i < this.height; i++) {
            table += '<tr>';
            for (let j = 0; j < this.width; j++) {
                table += '<td class="garden-cell"> * </td>';
            }
            table += '</tr>';
        }
        table += '</table>';
        document.getElementById(id).innerHTML = table;
    }

    this.getPlantEmoji = function(plantName) {
        const index = this.plants.indexOf(plantName);
        return this.plantEmojis[index];
    }

    this.fillGardenWithPlant = function(gardenLayoutID) {
        const container = document.getElementById(gardenLayoutID);

        const table = container.querySelector('.garden-layout-table');

        for (let i = 0; i < table.rows.length; i++) {
            const row = table.rows[i];
            for (let j = 0; j < row.cells.length; j++) {
                const emoji = this.plantEmojis[j % this.plantEmojis.length];
                row.cells[j].innerHTML = emoji;
            }
        }
    }
}

// Get references to HTML elements
var generateLayout = document.getElementById("generateLayout");
var resetButton = document.getElementById("reset");
var specs = document.getElementById("garden-layout-tool");
var plantDropdown = document.getElementById("plant-dropdown");
var gardenLayoutContainer = document.getElementById("garden-layout-container");

// Generate layout button functionality to create and display garden layout
generateLayout.addEventListener("click", function() {
    var layoutName = document.getElementById("layout-name").value;
    
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    var gardenLayout = new GardenLayout(layoutName, height, width);
    console.log("Garden Layout Created:", gardenLayout);

    gardenLayout.displayLayout("garden-layout-container");
    specs.style.display = "none";
    resetButton.style.display = "block";
    plantDropdown.style.display = "block";
});

// Reset button functionality to hide garden layout and show specs again
resetButton.addEventListener("click", function() {
    gardenLayoutContainer.style.display = "none";
    specs.style.display = "block";
    resetButton.style.display = "none";
    plantDropdown.style.display = "none";
});

var getExampleGardensButton = document.getElementById("generateExamples");
var exampleGardensSection = document.getElementById("example-gardens");

// example gardens
var garden1 = document.getElementById("example-garden-1");
var garden2 = document.getElementById("example-garden-2");
var garden3 = document.getElementById("example-garden-3");

var exampleGarden1 = new GardenLayout("My First Garden", 1, 12);
var exampleGarden2 = new GardenLayout("Vegetable Patch", 5, 5);
var exampleGarden3 = new GardenLayout("Flower Bed", 10, 15);


exampleGarden1.displayLayout("garden-example-1");
exampleGarden2.displayLayout("garden-example-2");
exampleGarden3.displayLayout("garden-example-3");

exampleGarden1.fillGardenWithPlant("garden-example-1");
exampleGarden2.fillGardenWithPlant("garden-example-2");
exampleGarden3.fillGardenWithPlant("garden-example-3");

getExampleGardensButton.addEventListener("click", function() {
    exampleGardensSection.style.display = "block";
});
