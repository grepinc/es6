import {Runnable} from "./utils.js"

export class ArrayTest extends Runnable {
   run(){
      var array = Array.of(1,2,3,4);
      this.logArray(array);
   }
}
