let result = 0;
let firstNumber = result;
let operator = '';
let secondNumber = 0;

//Display
const firstNumberDisplay = document.querySelector('#first-number-display');
const operatorDisplay = document.querySelector('#operator-display');
const secondNumberDisplay = document.querySelector('#second-number-display');
const evaluationDisplay = document.querySelector('#evaluation-display');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

//Numbers
const num1 = document.querySelector('#num-1');
const num2 = document.querySelector('#num-2');
const num3 = document.querySelector('#num-3');
const num4 = document.querySelector('#num-4');
const num5 = document.querySelector('#num-5');
const num6 = document.querySelector('#num-6');
const num7 = document.querySelector('#num-7');
const num8 = document.querySelector('#num-8');
const num9 = document.querySelector('#num-9');
const num0 = document.querySelector('#num-0');
const numDot = document.querySelector('#num-dot');

//Operators
const additionOp = document.querySelector('#num-add');
const subtractionOp = document.querySelector('#num-subtract');
const multiplicationOp = document.querySelector('#num-multiply');
const divisionOp = document.querySelector('#num-divide');
const evalOp = document.querySelector('#num-equal');

let currentNumber = '';

function updateDisplay() {
    if (operator === '') {
        firstNumberDisplay.innerHTML = currentNumber || result || 0;
        operatorDisplay.innerHTML = operator || '';
    } else {
        secondNumberDisplay.innerHTML = currentNumber || 0;
        operatorDisplay.innerHTML = operator || '';
    }
}

const numBtns = [
    num0,
    num1,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
];

numBtns.map((item, index) => {
    item.addEventListener('click', () => {
        console.log(index);
        currentNumber += String(index);
        updateDisplay();
    });
})
    
numDot.addEventListener('click', () => {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
    }
});

const opBtns = [
    additionOp,
    subtractionOp,
    multiplicationOp,
    divisionOp,
];

opBtns.map((item, index) => {
    item.addEventListener('click', () => {
        firstNumber = currentNumber ? Number(currentNumber): result;

        if (index == 0) operator = '+';
        if (index == 1) operator = '-';
        if (index == 2) operator = '*';
        if (index == 3) operator = '/';

        currentNumber = '';
        updateDisplay();
    })
})

clearBtn.addEventListener('click', () => {
    firstNumber = 0;
    operator = '';
    secondNumber = 0;
    currentNumber = '';
    result = 0;
    evaluationDisplay.innerHTML = '';
    firstNumberDisplay.innerHTML = 0;
    operatorDisplay.innerHTML = '';
    secondNumberDisplay.innerHTML = '';
    updateDisplay();
})

function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b: "undefined";
}

deleteBtn.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
});

function operate() {
    secondNumber = Number(currentNumber);

    if (operator == '') {
        return 'error';
    } else if  (operator == '+') {
        return add(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator == '*') {
        return multiply(firstNumber, secondNumber);
    } else return divide(firstNumber, secondNumber);

}

evalOp.addEventListener('click', () => {
    if (operator) {
        result = operate();
        evaluationDisplay.innerHTML = result;
        firstNumber = result;
        operator = '';
        currentNumber = '';
        updateDisplay();
    }
});