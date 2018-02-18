function reverse(a){
    var x = a.toString();
    var y = x.split("");
    var z = y.reverse();
    var result = z.join("");
      return parseInt(result) * Math.sign(a);
}