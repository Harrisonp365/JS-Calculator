const previousValue = document.querySelector(".previousVal");
const currentValue = document.querySelector(".currentVal");

const clear = document.querySelector(".clear");
const allClear = document.querySelector(".allClear");
const equals = document.querySelector(".equals");

// I feel like class makes sense for all the functions needed
class Calculator {
    constructor() {
        
    }

    clear() {
        //current and prev opperand = '';
    }

    delete() {

    }

    appendNum(num) {

    }

    opperation(operator) {

    }

    total() {

    }

    updateDisplay() {

    }
}


const calculator = new Calculator();
const numButtons = document.querySelectorAll(".number");
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        //calculator.updateDisplay();
    });
});

const opButtons = document.querySelectorAll(".operator");
opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.opperation(button.innerText);
        //calculator.updateDisplay();
    });
});


//on click we want to recieve the value either in an array or just as a number / possibly multi dimensional arr for use with order of opperation
//once recieved I need to display each num or operator in .display

//research btn value, This only pases a string value so I will need to parse to int, I also need to work out class names

// const appendChild = (elemType, input, parentNode) => {
//     const newElem = document.createElement(elemType);
//     const textNode = document.createTextNode(input);
//     newElem.appendChild(textNode);
//     parentNode.appendChild(newElem);
// };
// appendChild('p', btn.value, display);