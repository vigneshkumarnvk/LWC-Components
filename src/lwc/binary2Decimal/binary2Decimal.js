import { LightningElement } from 'lwc';

export default class Binary2Decimal extends LightningElement {

    binaryValue;
    showDeciamlValue = false;
    reverseBinVal;
    decimalValue;

    handleBinaryChange(event) {
        var pattern = /[a-zA-Z2-9!@#\$%\^\&*\)\(+=._-]/g;
        //Getting the binary value
        let binaryNumber = this.template.querySelector('.binaryNum');
        this.binaryValue = binaryNumber.value;
        //Reversing the Value
        this.reverseBinVal = this.binaryValue.split('').reverse();        

        //Throws validation error
        if(this.reverseBinVal.length < 1){
            this.showDeciamlValue = false;
            binaryNumber.setCustomValidity("");
        }
        else if (pattern.test(this.binaryValue)) {            
            this.showDeciamlValue = false;
            binaryNumber.setCustomValidity('Enter only 0\'s and 1\'s');
        }
        else {
            this.showDeciamlValue = true;
            binaryNumber.setCustomValidity("");

            //Calling the function which calculates Decimal Value
            this.decimalValue = calculateDecimal(this.reverseBinVal);

        }        
        binaryNumber.reportValidity();

        //Function to calculate decimal value
        function calculateDecimal(binValue) {
            let decValue = 0;
            for (let i = 0; i < binValue.length; i++) {
                decValue+=binValue[i]*Math.pow(2,i);                
            }
            return decValue;
        }
    }
}
