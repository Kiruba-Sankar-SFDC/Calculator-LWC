import { LightningElement } from "lwc";

export default class Calculator extends LightningElement {
     result = "";
     handleInput(event) {
          this.result += event.target.value;
     }

     handleDelete() {
          this.result = this.result.substring(0, this.result.length - 1);
     }

     handleClear() {
          this.result = "";
     }

     handleCalculate() {
          this.result = eval(this.result);
     }
}
