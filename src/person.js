import {Runnable} from "./utils.js"

class Person {
   constructor(name, surname){
      this.name =name;
      this.surname = surname;
   }
}

export class PersonTest extends Runnable {
   run() {
      const p = new Person("Marko", "Danijel");
      p.surname = "Horvat";
      const log = ({name="Ivan", surname="Horvat"}) => { console.log(`2 ${name} ${surname}`); }
      const formatter = (p) => `1 ${p.surname} ${p.name}`;
      const logger = (p, f) => console.log(f(p));

      logger(p, formatter);
      log(p);
      console.log("3", p.name, p.surname);
   }
}

