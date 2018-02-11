let a = +prompt("Insert amount of EURO", "");
let b = +prompt("Insert amount of USD", "");


let EURconvert = (a * 33.46);
let USDconvert = (b * 27.12);

console.log(a + " euros are equal " + EURconvert.toFixed(0) + " UAH, " + b + " dollars are equal " + USDconvert.toFixed(0) + " UAH, one euro are equal 1.2274 dollars");
