import Interface from "./interface-module";
import Calculations from "./calculating-module";
import "../styles/styles.css";

Interface();

document.getElementById("add").addEventListener("click", () => {
  let sum = Calculations.add();
  document.getElementById("p2").innerHTML = sum;
});
document.getElementById("subtract").addEventListener("click", () => {
  let sum = Calculations.subtract();
  document.getElementById("p2").innerHTML = sum;
});
document.getElementById("multiply").addEventListener("click", () => {
  let sum = Calculations.multiply();
  document.getElementById("p2").innerHTML = sum;
});
document.getElementById("divide").addEventListener("click", () => {
  let sum = Calculations.divide();
  document.getElementById("p2").innerHTML = sum;
});
