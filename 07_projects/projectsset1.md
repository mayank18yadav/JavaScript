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