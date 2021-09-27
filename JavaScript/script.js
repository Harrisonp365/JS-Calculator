const btn = document.getElementsByClassName("btn");
const display = document.getElementsByClassName("calculator__display");
const body = document.getElementById("body");

//on click we want to recieve the value either in an array or just as a number / possibly multi dimensional arr for use with order of opperation
//once recieved I need to display each num or operator in .display

//research btn value, This only pases a string value so I will need to parse to int, I also need to work out class names

console.log(btn);

btn.addEventListeners("click", () => {
    //need to use forEach here to add listener to all items
    body.classList.toggle("body--red");
});

// const appendChild = (elemType, input, parentNode) => {
//     const newElem = document.createElement(elemType);
//     const textNode = document.createTextNode(input);
//     newElem.appendChild(textNode);
//     parentNode.appendChild(newElem);
// };
// appendChild('p', btn.value, display);