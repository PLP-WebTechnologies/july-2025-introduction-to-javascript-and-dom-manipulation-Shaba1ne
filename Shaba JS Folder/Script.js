// ===============================
// PART 1: Variable Declarations & Conditionals
// ===============================
let name = "John";
let age = 20;

// Simple conditional check
if (age >= 18) {
    console.log(name + " is an adult.");
} else {
    console.log(name + " is a minor.");
}

// ===============================
// PART 2: Custom Functions
// ===============================

// Function 1: Check if user is old enough to vote
function checkVotingEligibility(userAge) {
    if (userAge >= 18) {
        return "You are eligible to vote!";
    } else {
        return "You are NOT eligible to vote.";
    }
}

// Function 2: Generate a multiplication table for a number
function multiplicationTable(num) {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        result += `${num} x ${i} = ${num * i}<br>`;
    }
    return result;
}

// ===============================
// PART 3: Loops
// ===============================

// Example 1: For loop (print 1 to 5 in console)
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// Example 2: While loop (countdown from 5)
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ===============================
// PART 4: DOM Interactions
// ===============================

let outputDiv = document.getElementById("output");

// DOM Interaction 1: Button to check age
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    outputDiv.innerHTML = checkVotingEligibility(age);
});

// DOM Interaction 2: Button to list numbers (using loop)
document.getElementById("listNumbersBtn").addEventListener("click", function() {
    let numbers = "";
    for (let i = 1; i <= 10; i++) {
        numbers += i + " ";
    }
    outputDiv.innerHTML = "Numbers: " + numbers;
});

// DOM Interaction 3: Button to change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightyellow" ? "#f4f4f9" : "lightyellow";
});
