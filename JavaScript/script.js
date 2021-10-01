const previousValue = document.querySelector(".previousVal");
const currentValue = document.querySelector(".currentVal");

// I feel like class makes sense for all the functions needed
class Calculator {
  //Assignment of constructor params
  constructor(previousValue, currentValue) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
    this.allClear();
  }

  allClear() {
    this.currentNum = "";
    this.previousNum = "";
    this.operator = undefined;
  }

  clear() {
    this.currentNum = "";
  }

  appendNum(num) {
    //check there is no more than one decimal point in the num
    if (num === "." && this.currentNum.includes(".")) return;
    //concat numbers together to make numbers greater than 9
    this.currentNum = this.currentNum.toString() + num.toString();
  }

  opperation(operator) {
    if (this.currentNum === "") return;
    if (this.previousNum !== "") {
      this.total();
    }
    //swap current operation to the top in order to start next operation
    this.operator = operator;
    this.previousNum = this.currentNum;
    this.currentNum = ""; //clear the lower part of display
  }

  total() {
    let result;
    const current = parseFloat(this.currentNum);
    const previous = parseFloat(this.previousNum);

    if (isNaN(current) || isNaN(previous)) return;

    switch (this.operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      case "%":
        result = previous % current;
        break;
    //   case "n":
    //     result = previous * Math.PI;
    //     break;
      default:
        return;
    }

    this.currentNum = result;
    this.opperator = undefined;
    this.previousNum = "";
  }

  updateDisplay() {
    this.currentValue.innerText = this.currentNum;
    this.previousValue.innerText = this.previousNum;
  }
}

const calculator = new Calculator(previousValue, currentValue);

const numBtns = document.querySelectorAll(".number");
numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNum(btn.innerText);
    calculator.updateDisplay();
    //updates display everytime a btn is clicked
  });
});

const opBtns = document.querySelectorAll(".operator");
opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.opperation(btn.innerText);
    calculator.updateDisplay();
  });
});

const eqBtn = document.querySelector(".equals");
eqBtn.addEventListener("click", (btn) => {
  calculator.total();
  calculator.updateDisplay();
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (btn) => {
    calculator.clear();
    calculator.updateDisplay();
  });

const acBtn = document.querySelector(".allClear");
acBtn.addEventListener("click", (btn) => {
    calculator.allClear();
    calculator.updateDisplay();
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

//need 
