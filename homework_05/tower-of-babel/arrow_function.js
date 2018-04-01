var inputs = process.argv.slice(2);
var result = inputs.map((item) => {return item[0]})
                   .reduce((previous,item) => {return previous + item});
console.log(result);