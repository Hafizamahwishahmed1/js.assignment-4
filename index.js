// CHAPTER NO 4
// Practice exercise 4.1

let myVariable = true;

console.log(myVariable);

if (myVariable) {
  console.log("The variable is true.");
}

if (!myVariable) {
  console.log("The variable is not true.");
} else {
  console.log("The variable is true.");
}
myVariable = !myVariable;
console.log(myVariable);


// Practice exercise 4.2

const candidateAge = prompt("Please enter your age:");

const age = parseInt(candidateAge);

let message;

if (age >= 21) {
  message = "You are allowed.";
}

else if (age >= 19) {
  message = "You are not allowed.";
}

else {
  message = "You are denied entry to the venue.";
}

console.log(message);

// Practice exercise 4.3

const validID = true;

const messages = validID ? "You are allowed into the venue." : "You are not allowed into the venue.";

console.log(messages);

// Practice exercise 4.4

let randomNumber = Math.floor(Math.random() * 6);

let userQuestion = prompt("Ask the Magic 8-Ball Pool a yes or no question:");

let response;
switch (randomNumber) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "It is decidedly so.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "My sources say no.";
        break;
    default:
        response = "Hmm, something went wrong. Please try again.";
}

let finalResponse = `You asked: ${userQuestion}\nMagic 8-Ball's answer: ${response}`;

console.log(finalResponse);

// Practice exercise 4.5

let prize = prompt("Set the prize value by selecting a number between 0 and 10");

prize = parseInt(prize);

let outputMessage = "My Selection: ";

switch (prize) {
  case 0:
    outputMessage += "No prize for you!";
    break;
  case 1:
    outputMessage += "Congratulations! You won a book.";
    break;
  case 2:
    outputMessage += "Congratulations! You won a shirt.";
    break;
  case 3:
  case 4:
    outputMessage += "Congratulations! You won a watch.";
    break;
  case 5:
  case 6:
  case 7:
    outputMessage += "Congratulations! You won a gift card.";
    break;
  default:
    outputMessage += "Congratulations! You won a surprise gift!";
    break;
}

console.log(outputMessage);

// Chapter projects
// Evaluating a number game

let userNumber = prompt("Please enter a number:");

let dynamicNumber = Math.floor(Math.random() * 100); 

userNumber = Number(userNumber);

if (userNumber > dynamicNumber) {
    console.log(`The number you entered, ${userNumber}, is greater than the dynamic number, which is ${dynamicNumber}.`);
} else if (userNumber < dynamicNumber) {
    console.log(`The number you entered, ${userNumber}, is less than the dynamic number, which is ${dynamicNumber}.`);
} else {
    console.log(`The number you entered, ${userNumber}, is equal to the dynamic number, which is ${dynamicNumber}.`);
}

// Friend checker game

let userName = prompt("Please enter your name:");

switch (userName) {
    case "Zaid":
        console.log("Welcome, friend! You are known as Zaid.");
        break;
    case "Ayesha":
        console.log("Welcome, friend! You are known as Ayesha.");
        break;
    case "Maryam":
        console.log("Welcome, friend! You are known as Maryam.");
        break;

    default:
        console.log("I'm sorry, I don't know you.");
}

// Rock Paper Scissors game

const arr = ["Rock", "Paper", "Scissors"];

let playerIndex = Math.floor(Math.random() * 3);
let computerIndex = Math.floor(Math.random() * 3);

let userMessage = `Player selected ${arr[playerIndex]}. Computer selected ${arr[computerIndex]}. `;

if (playerIndex === computerIndex) {
    userMessage += "It's a tie!";
} else {
    r
    if (
        (playerIndex === 0 && computerIndex === 2)
        (playerIndex === 1 && computerIndex === 0) 
        (playerIndex === 2 && computerIndex === 1)
    ) {
      userMessage += "Player wins!";
    } else {
      userMessage += "Computer wins!";
    }
}

console.log(userMessage);
