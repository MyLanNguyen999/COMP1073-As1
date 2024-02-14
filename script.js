//* CHOICE 1
    // Create an array for Choice 1
    const choice1Array = ["The sun", "Birds", "Flowers", "The moon", "Raindrops"];

    //Capture the value of ID "output" to replace the result when user clicks
    const outputHTML1 = document.getElementById("output1");

    //Initialize current index for Choice 1
    let currentIndex1 = 0;
    outputHTML1.textContent = choice1Array[currentIndex1];

    //Create function to cycle through words of choice 1
    function cycleWords1() {
    // Increment index and wrap around if necessary
    currentIndex1 = (currentIndex1 + 1) % choice1Array.length;
    // Display the word at the new index
    outputHTML1.textContent = choice1Array[currentIndex1];
    }

    //Capture the button choice 1
    const choice1Button = document.getElementById("button-1");
    //Add event listener
    choice1Button.addEventListener("click", cycleWords1);

//* CHOICE 2
    //Create array for Choice 2
    const choice2Array =["sing", "shines", "bloom", "glows", "patter"];

    //Capture ID output 2 for text replacement
    const outputHTML2 = document.getElementById("output2");

    //Initialize current index for Choice 2
    let currentIndex2 = 0;
    outputHTML2.textContent = choice2Array[currentIndex2];

    // Create function to cycle thru words of Choice 2
    function cycleWords2() {
        currentIndex2 = (currentIndex2 + 1) % choice2Array.length;
        outputHTML2.textContent = choice2Array[currentIndex2];
    }
    
    //Capture button choice 2
    const choice2Button = document.getElementById("button-2");

    //Add event listener
    choice2Button.addEventListener("click", cycleWords2);
  
//* CHOICE 3
    //Create array for Choice 3
    const choice3Array =["sweet songs", "beautifully", "on the roof", "brightly", "softly"];

    //Capture ID output 3 for text replacement
    const outputHTML3 = document.getElementById("output3");

    //Initialize current index for Choice 3
    let currentIndex3 = 0;
    outputHTML3.textContent = choice3Array[currentIndex3];

    // Create function to cycle thru words of Choice 3
    function cycleWords3() {
        currentIndex3 = (currentIndex3 + 1) % choice3Array.length;
        outputHTML3.textContent = choice3Array[currentIndex3];
    }
    
    //Capture button choice 3
    const choice3Button = document.getElementById("button-3");

    //Add event listener
    choice3Button.addEventListener("click", cycleWords3);

//* CHOICE 4
    //Create array for Choice 4
    const choice4Array =["in the tree", "in the backyard", "in the sky", "in the dark", "during the storm"];

    //Capture ID output 4 for text replacement
    const outputHTML4 = document.getElementById("output4");

    //Initialize current index for Choice 4
    let currentIndex4 = 0;
    outputHTML4.textContent = choice4Array[currentIndex4];

    // Create function to cycle thru words of Choice 4
    function cycleWords4() {
        currentIndex4 = (currentIndex4 + 1) % choice4Array.length;
        outputHTML4.textContent = choice4Array[currentIndex4];
    }
    
    //Capture button choice 4
    const choice4Button = document.getElementById("button-4");

    //Add event listener
    choice4Button.addEventListener("click", cycleWords4);

//* CHOICE 5
    //Create array for Choice 5
    const choice5Array =["in the summer.", "during the springtime.", "every mid-month.", "last week.", "every morning."];

    //Capture ID output 5 for text replacement
    const outputHTML5 = document.getElementById("output5");

    //Initialize current index for Choice 3
    let currentIndex5 = 0;
    outputHTML5.textContent = choice5Array[currentIndex5];

    // Create function to cycle thru words of Choice 5
    function cycleWords5() {
        currentIndex5 = (currentIndex5 + 1) % choice5Array.length;
        outputHTML5.textContent = choice5Array[currentIndex5];
    }
    
    //Capture button choice 3
    const choice5Button = document.getElementById("button-5");

    //Add event listener
    choice5Button.addEventListener("click", cycleWords5);