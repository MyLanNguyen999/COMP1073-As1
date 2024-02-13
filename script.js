

// Create an array for Choice 1
const choice1Array = ["The sun", "Birds", "Flowers", "The moon", "Raindrops"];

//Create array for Choice 2
const choice2Array =["sing", "shines", "bloom", "glows", "patter"];

//Capture the value of ID "output" to replace the result when user clicks
const outputHTML1 = document.getElementById("output1");

const outputHTML2 = document.getElementById("output2");


//Initialize current index
let currentIndex1 = 0;
outputHTML1.textContent = choice1Array[currentIndex1];

let currentIndex2 = 0
outputHTML2.textContent = choice2Array[currentIndex2];

//Create function to cycle through words
function cycleWords1() {
    // Increment index and wrap around if necessary
    currentIndex1 = (currentIndex1 + 1) % choice1Array.length;
    // Display the word at the new index
    outputHTML1.textContent = choice1Array[currentIndex1];
    
   
}

function cycleWords2() {
    currentIndex2 = (currentIndex2 + 1) % choice2Array.length;
    outputHTML2.textContent = choice2Array[currentIndex2];
}
 
//Capture the button choice 1
const choice1Button = document.getElementById("button-1");
//Add event listener
choice1Button.addEventListener("click", cycleWords1);

const choice2Button = document.getElementById("button-2");
choice2Button.addEventListener("click", cycleWords2);