import {Runnable} from "./utils.js"

export class Random {
   *[Symbol.iterator]()
   {
      while(true)
      {
         var rand = Math.floor(Math.random()*100);
         var end = yield rand;
         if(end){
            break;
         }
      }
   }

   getIterator(){
      return this[Symbol.iterator]();
   }
}

export class RandomTest extends Runnable {
   run() {
      var randomGenerator = new Random();
      var array = [];
      for(var rand of randomGenerator){
         array.push(rand);
         if(rand === 57) {
            break;
         }
      }

      this.logArray(array, "Random numbers");

      array = [];
      var iterator = randomGenerator.getIterator();
      var next = iterator.next();
      while(!next.done){
         array.push(next.value);
         next = iterator.next(next.value === 57);
      }

      this.logArray(array, "Random numbers");
   }
}
