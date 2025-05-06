# Project Related DOM
## Project Link


[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

## Solution Code

## project 1
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
