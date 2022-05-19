var currentNumberWrapper = window.document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

function decremente() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
}