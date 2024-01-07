const decrement = document.querySelector('.decrement');

const reset = document.querySelector('.reset');

const increment = document.querySelector('.increment');

const displaycount = document.querySelector('.displaycount');

let mynumber = 0;

increment.addEventListener('click', () => {
    mynumber ++;
    displaycount.textContent = mynumber;
})

decrement.addEventListener('click', () => {
    mynumber --;
    displaycount.textContent = mynumber;
})

reset.addEventListener('click', () => {
    mynumber = 0;
    displaycount.textContent = mynumber;
})