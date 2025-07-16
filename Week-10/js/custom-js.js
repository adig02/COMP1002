// -------------------------------
// Vanilla JavaScript Interactions
// -------------------------------

// the first thing that we are going to do is make sure that all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // now we will test to see if our JS is connected
    console.log("Our JS code is connected");

    // 1. greet the user when the "Greet Me" button is clicked
    document.getElementById('greetBtn').addEventListener('click', function(){
        // get the value entered in the input field and remove any extra spaces
        const name = document.getElementById('nameInput').value.trim();
        // if the user entered a name display a greeting message
        // otherwise prompt the user to enter a name
        document.getElementById('greetingOutput').textContent = name
            ? `Hello, ${name}!`
            : "Please enter your name";
    });

    // 2. Change the background color of the page randomly
    document.getElementById('changeBgBtn').addEventListener('click', function(){
        // define a list of color options
        const colors = ['#ffebee', '#e8f5e9', '#e3f5e9', '#fff3e0', '#f3e5f5'];
        // pick a random number from the array
        const random = colors[Math.floor(Math.random() * colors.length)];
        // apply the selected color as the background of the page
        document.body.style.backgroundColor = random;
    });

    // 3. Count characters in a textarea as the user types
    document.getElementById('textArea').addEventListener('input', function(){
        // this.value refers to the current value of the textarea
        const text = this.value;
        // update the character count display
        document.getElementById('charCount').textContent = `Characters: ${text.length}`;
    });
});

// -------------------
// jQuery Interactions
// -------------------

$(document).ready(function(){
    // Initialize a counter variable
    let jqueryCounter = 0;
    // 4. increase the counter when the "Increase" button is clicked
    $('#jqueryInc').click(function (){
        jqueryCounter++; // add 1 to the counter per click
        $('#jqueryCounter').text(jqueryCounter); // update the counter display
    });
    // 4. Decrease the counter when the "Decrease" button is clicked
    $('#jqueryDec').click(function (){
        jqueryCounter--; // remove 1 from the counter per click
        $('#jqueryCounter').text(jqueryCounter); // update the counter display
    });

    // 5. Show or hide the message when the "Toggle message" button is clicked
    $('#toggleBtn').click(function (){
        // use jQuerys fadeToggle to smoothly show and hide
        $('#jqMessage').fadeToggle();
    });
});
