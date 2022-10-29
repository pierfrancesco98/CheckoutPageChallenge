const form = document.querySelector('form');

form.addEventListener('submit', () => {
  alert("successful");
});


const removeOne = document.querySelector('.removeone');
const addOne = document.querySelector('.addone');
const numberOne = document.querySelector('.numberone');
const removeTwo = document.querySelector('.removetwo');
const addTwo = document.querySelector('.addtwo');
const numberTwo = document.querySelector('.numbertwo');
let i = 1;
let o = 1;
addOne.addEventListener('click', () => {
numberOne.innerHTML = ++i;
});

removeOne.addEventListener('click', () => {
numberOne.innerHTML = --i;
});


addTwo.addEventListener('click', () => {
    numberTwo.innerHTML = ++o;
    });
    
    removeTwo.addEventListener('click', () => {
    numberTwo.innerHTML = --o;
    });
    