// Function to display the clicked text
function display(val) {
    document.getElementById("result").value += val;
}

// Function to calculate the expression = Processing when a button is pressed
function solve() {
  let formula = document.getElementById("result").value;
  document.getElementById("result").value = eval(formula);
} 

// Function to clear the display
function clearResult() {
    document.getElementById("result").value = "";
}