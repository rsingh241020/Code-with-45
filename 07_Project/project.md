# Project Related DOM

## Project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

## Solution Code

## project Solution 1

```JavaScript
Console.log("Rohit)

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
        if(e.target.id=='grey'){
        body.style.background=e.target.id;
        }
        if(e.target.id=='blue'){
        body.style.background=e.target.id;
        }
        if(e.target.id=='white'){
        body.style.background=e.target.id;
        }
        if(e.target.id=='yellow'){
        body.style.background=e.target.id;
        }
})
});

```

## Project 2

```Java Script

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please Give a Valid Height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please Give a Valid Weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category =''
        if(bmi<18.6){
          category = 'under Wegiht'
        }
        else if(bmi>18.6 && bmi<24.9){
            category = 'Normal Range'
        }
        else{
          category = 'Over Weight'
        }
        results.innerHTML = `<span>Your BMI is ${bmi} and ${category}</span>`;
    }

});


```

## Project Solution 3

```JavaScript


    const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Project Solution 4

```JavaScript

const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            EndGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 You guessed it right!');
        EndGame(true);
    } else if (guess < randomNumber) {
        displayMessage('📉 Too low! Try again.');
    } else {
        displayMessage('📈 Too high! Try again.');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function EndGame(winner = false) {
    userInput.disabled = true;
    submit.disabled = true;

    if (!winner) {
        displayMessage(`😞 Game Over! The number was ${randomNumber}`);
    }

    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        location.reload(); // reload page to reset
    });
}



```
