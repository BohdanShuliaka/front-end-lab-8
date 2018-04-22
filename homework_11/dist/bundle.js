/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculating_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_styles_css__);




Object(__WEBPACK_IMPORTED_MODULE_0__interface_module__["a" /* default */])();

document.getElementById("add").addEventListener("click", () => {
  let sum = __WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */].add();
  document.getElementById("p2").innerHTML = sum;
});
document.getElementById("subtract").addEventListener("click", () => {
  let sum = __WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */].subtract();
  document.getElementById("p2").innerHTML = sum;
});
document.getElementById("multiply").addEventListener("click", () => {
  let sum = __WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */].multiply();
  document.getElementById("p2").innerHTML = sum;
});
document.getElementById("divide").addEventListener("click", () => {
  let sum = __WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */].divide();
  document.getElementById("p2").innerHTML = sum;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInterface;
function createInterface() {
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    if (num2 === 0) {
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

/* harmony default export */ __webpack_exports__["a"] = ({
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);