function add() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseFloat(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseFloat(num2);
  let isValid = validation(num1, num2);
  if (isValid) {
    result = num1 + num2;
  }

  return result;
}

function subtract() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseFloat(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseFloat(num2);
  let isValid = validation(num1, num2);
  if (isValid) {
    result = num1 - num2;
  }

  return result;
}
function multiply() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseFloat(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseFloat(num2);
  let isValid = validation(num1, num2);
  if (isValid) {
    result = num1 * num2;
  }

  return result;
}
function divide() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseFloat(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseFloat(num2);
  let isValid = validation(num1, num2);
  if (isValid) {
    if(num2 === 0) {
      return alert("You cannot divide by zero!");
    } else {
    result = num1 / num2;
    }
  }

  return result;
}
function validation(n1, n2) {
  if (n1 === "" || n2 === "") {
    return alert("Please fill all fields");
  } else {
    if (!isNumber(n1) || !isNumber(n2)) {
      return alert("Please enter numbers");
    } else {
      return true;
    }
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export default {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};
