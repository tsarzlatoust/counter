const decrementButton = document.getElementById('decrement'); 
const incrementButton = document.getElementById('increment'); 
const counterDisplay = document.getElementById('counter'); 


let counterValue = 0;


incrementButton.addEventListener('click', function () {
    counterValue++; 
    counterDisplay.textContent = counterValue; 
});

decrementButton.addEventListener('click', function () {
    if (counterValue > 0) { 
        counterValue--; 
        counterDisplay.textContent = counterValue; 
    }
});