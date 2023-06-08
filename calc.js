function Solve(operator) {
  document.getElementById("res").value += operator;
}
// Function to clear the input field
function Clear() {
  document.getElementById("res").value = "";
}
// Function to remove the last character from the input field
function Back() {
  var value = document.getElementById("res").value;
  document.getElementById("res").value = value.slice(0, -1);
}
// Function to calculate the result
function result() {
  var expression = document.getElementById("res").value;
  var result = eval(expression);
  document.getElementById("res").value = result;
}