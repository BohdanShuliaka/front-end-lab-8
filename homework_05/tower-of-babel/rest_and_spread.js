var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

function avg(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum / args.length;
}

console.log(avg(...args));