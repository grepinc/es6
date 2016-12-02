class Person {
   constructor(name, surname){
      this.name =name;
      this.surname = surname;
   }
}

let p = new Person("Marko", "Danijel");
let log = (p) => { console.log("2", p.name, p.surname); }
let formatter = (p) => "1 " + p.surname + " " + p.name;
let logger = (p, f) => console.log(f(p));

logger(p, formatter);
log(p);
console.log("3", p.name, p.surname);
