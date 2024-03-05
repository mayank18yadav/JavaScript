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