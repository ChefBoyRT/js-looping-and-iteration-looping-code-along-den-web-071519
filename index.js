// Code your solutions in this file
const welcomeMessages = [];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        welcomeMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return welcomeMessages;
}

function countdown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}