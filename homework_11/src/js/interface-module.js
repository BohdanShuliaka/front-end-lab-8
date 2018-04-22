export default function createInterface() {
  const root = document.getElementById("calc-wrapper");

  let h1 = document.createElement("h1");
  h1.innerText = "Simple Calculator";

  let numberInput = document.createElement("div");
  numberInput.setAttribute("id", "numbers");

  let n1 = document.createElement("input");
  n1.setAttribute("type", "text");
  n1.setAttribute("id", "n1");

  n1.setAttribute("placeholder", "Enter first number");

  let n2 = document.createElement("input");
  n2.setAttribute("type", "text");
  n2.setAttribute("id", "n2");

  n2.setAttribute("placeholder", "Enter second number");

  numberInput.appendChild(n1);
  numberInput.appendChild(n2);

  let buttons = document.createElement("div");
  buttons.setAttribute("id", "buttons");

  let add = document.createElement("button");
  add.innerText = "+";
  add.setAttribute("id", "add");
  add.setAttribute("class", "btn");

  let subtract = document.createElement("button");
  subtract.innerText = "-";
  subtract.setAttribute("id", "subtract");
  subtract.setAttribute("class", "btn");

  let multiply = document.createElement("button");
  multiply.innerText = "*";
  multiply.setAttribute("id", "multiply");
  multiply.setAttribute("class", "btn");

  let divide = document.createElement("button");
  divide.innerText = "/";
  divide.setAttribute("id", "divide");
  divide.setAttribute("class", "btn");

  buttons.appendChild(add);
  buttons.appendChild(subtract);
  buttons.appendChild(multiply);
  buttons.appendChild(divide);

  let output = document.createElement("div");
  output.setAttribute("id", "output");

  let p1 = document.createElement("div");
  p1.setAttribute("id", "p1");
  p1.innerText = "ANSWER:";

  let p2 = document.createElement("div");
  p2.setAttribute("id", "p2");
  p2.innerText = "";

  output.appendChild(p1);
  output.appendChild(p2);

  root.appendChild(h1);
  root.appendChild(numberInput);
  root.appendChild(buttons);
  root.appendChild(output);
}
