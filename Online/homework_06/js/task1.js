let a = +prompt("Insert side a", "");
let b = +prompt("Insert side b", "");
let c = +prompt("Insert side c", "");

let sqrA = Math.pow(a, 2);
let sqrB = Math.pow(b, 2);
let sqrC = Math.pow(c, 2);

 if ((a <= 0) || (b <= 0) || (c<=0)) {
      console.log("Incorrect data");
  }
else if ((a+b < c) || (a+c < b) || (c+b < a)) { 
      console.log("Impossible to create triangle");
  } else {
      if ((sqrA + sqrB == sqrC) || 
          (sqrA + sqrC == sqrB) || 
          (sqrC + sqrB == sqrA)) {
        console.log("Type of triangle is Right triangle and square is" + " " + square(a, b, c));
      }
      else if (a == b && b == c)  {
        console.log("Type of triangle is Equilateral triangle and square is" + " " + square(a, b, c));
      }
      else if (a == b || b == c || a == c) {
        console.log("Type of triangle is Isosceles triangle and square is" + " " + square(a, b, c));
      }
      else if ((a !== b ) && (b !== c) && (a !== c)) {
        console.log("Type of triangle is Scalene triangle and square is" + " " + square(a, b, c));
      }
  }
function square(a, b, c) {
let p = (a + b + c) / 2;
let square = Math.sqrt(p*((p - a)*(p - b)*(p - c)));
let roundedSquare = Math.round(square * 100) / 100;

return roundedSquare;
}
