class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

let numberInput = new NumberInput("Type numbers...");

const AddRequiredValidation = ( numberInputObj )  => { 
    !numberInputObj.value ? 
                            numberInputObj.valid = false : 
                            numberInputObj.valid = true; 
                            numberInputObj.valid ?  '' : console.log('Wrong input'); 
                            return numberInputObj.valid;

 }
 
const AddMaxLengthValidation = ( numberInputObj, maxLength ) => { 
    numberInputObj.value.toString().length > maxLength ?
                            numberInputObj.valid = false :
                            numberInputObj.valid  = true; 
                            numberInputObj.valid ?  '' : console.log('Incorrect length'); 
                            return numberInputObj.valid;
 }

const AddNumberValidation = ( numberInputObj ) => {
    typeof numberInputObj.value === 'number' ? 
                            numberInputObj.valid = true :
                            numberInputObj.valid  = false;
                            numberInputObj.valid ?  '' : console.log('Not a number'); 
                            return numberInputObj.valid;
}
const trippleCheck = (numberInputObj, maxLength) => {
    let required = AddRequiredValidation(numberInputObj);
    let length = AddNumberValidation(numberInputObj);
    let number = AddMaxLengthValidation(numberInputObj, maxLength);
    
    required && length && number ?
                            numberInputObj.valid = true :
                            numberInputObj.valid = false;
                            numberInputObj.valid ?  '' : console.log('Not a number'); 
 }
AddRequiredValidation(numberInput);
console.log(numberInput.valid); 

numberInput.setValue('1');
AddNumberValidation(numberInput);
console.log(numberInput.valid) 

numberInput.setValue(1);

trippleCheck(numberInput, 6);
console.log(numberInput.valid) 


numberInput.setValue(1111111111111111111111111111);
AddMaxLengthValidation(numberInput, 6);
console.log(numberInput.valid) 




