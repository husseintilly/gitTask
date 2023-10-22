// Create an input element
var inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("id", "inputField");

// Create a button element
var buttonElement = document.createElement("button");
buttonElement.textContent = "Log to Console";
buttonElement.addEventListener("click", function () {
  var inputValue = inputElement.value;
  console.log("You entered: " + inputValue);
});

// Append the input and button elements to the document body
document.body.appendChild(inputElement);
document.body.appendChild(buttonElement);
