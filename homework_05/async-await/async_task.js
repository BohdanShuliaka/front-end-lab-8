const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (triggerFail) {
          reject(false);
          return;
        }
        resolve(true);
      }, msec);
    });
  };
  const asyncFn = async () => {
    const result = await waitFewSec(1000);
    return result;
  };
    
  const doAsyncMagic = async () => {
      let output = [];
      for(let i = 0; i < 4; i++) {
        let value = await asyncFn();
        output.push(value);
      }
      console.log(output);
  }

  doAsyncMagic();
  
  async function* rangeGen() {
    for (let i = 1; i <= 15; i++) {
      yield i;
    }
  }
  const iterateRange = async () => {
    let sum = 0;
    try {
        for await(let key of rangeGen()){
      sum += key;
    }
    return sum;
    }
    catch(error) {
        return console.error(error);
    }
};
iterateRange();

  