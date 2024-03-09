#Projects related to DOM

#Solution code

## Project 1

```Javascript

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
      document.body.style.backgroundColor = e.target.id;
      break;
      case 'white':
      document.body.style.backgroundColor = e.target.id;
      break;
      case 'blue':
      document.body.style.backgroundColor = e.target.id;
      break;
      case 'yellow':
      document.body.style.backgroundColor = e.target.id;
      break;
    }
  })
})
```

##Project 2 

```Javascript

const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

##Project 3

```Javascript

const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock");

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());  
  clock.innerHTML = date.toLocaleTimeString();
},1000);
```

##Project 4
```Javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

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

if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess < 1){
    alert('Please enter a number greater than 1')
  }
  else if(guess > 100){
    alert('Please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displaymessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displaymessage(`You guessed it right`)
    endGame()
  }
  else if(guess < randomNumber){
    displaymessage(`Number is TOO Low`)
  }
  else if(guess > randomNumber){
    displaymessage(`Number is TOO High`)
  }  
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}  

function newGame(){
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true; 
  })
}
```