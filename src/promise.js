import {Runnable} from "./utils.js";

export class PromiseTest extends Runnable {
   run() {
      /*var promise = new Promise((resolve, reject) => {
         setTimeout(() => {resolve("Success");}, 1000);
      });

      promise.then((value) => {
         console.log(value);
      });

      var first = new Promise((resolve, reject) => {
         resolve(5);
      });

      var second = new Promise((resolve, reject) => {
         first.then(value => {
            resolve(value * 2);
         });
      });

      var third = first.then(value => {
         return Promise.resolve(value * 2);
      });

      second.then(value => {
         console.log("Second " + value);
      });

      third.then(value => {
         console.log("Third " + value);
      });

      var it = main();
      console.log("Create outer");
      console.log("Outer return = " + it.next().value);
      console.log("Outer 1");
      console.log("Outer return = " + it.next().value);
      console.log("Outer 2");
      it.next();*/

      //async.run(main);
      //async.run(asyncMain);
      //async.run(trade);
      asyncPromise.run(tradeP);
   }
}

function* main() {
   console.log("inner start");
   yield 1;
   console.log("inner middle");
   yield 2;
   console.log("inner end");
}

function* asyncMain(){
   console.log(1);
   yield pause(2500);
   console.log(2);
   yield pause(2500);
   console.log(3);
}

function pause(timeout){
   setTimeout(() => {
      async.resume();
   }, timeout);
}

class AsyncRunner {
   constructor(generator){
      this.sequence = null;
   }

   run(generator){
      this.sequence = generator();
      this.sequence.next();
   }

   resume(value) {
      this.sequence.next(value);
   }

   fail(err) {
      this.sequence.throw(err);
   }
}

class AsyncPromise {
   constructor(){
      this.sequence = null;
   }

   run(generator) {
      this.sequence = generator();
      this.process(this.sequence.next());
   }

   process(result){
      if(!result.done){
         result.value.then((value) => {
            this.process(this.sequence.next(value));
         });
      }
   }
}

global.async = new AsyncRunner();
global.asyncPromise = new AsyncPromise();

function* trade() {
   try {
      var price = yield getStockPrice();
      console.log("price = " + price);
   }
   catch(ex) {
      console.log(ex);
   }
}

function* tradeP() {
   try {
      var price = yield getStockPriceP();
      console.log("price = " + price);
   }
   catch(ex) {
      console.log(ex);
   }
}

function getStockPrice() {
   setTimeout(() => {
      async.resume(45);
   }, 500);
}

function getStockPriceP() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(45);
      }, 500);
   });
}
