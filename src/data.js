import {Runnable} from "./utils.js"

export class Player {
   constructor(name, surname){
      this._name = name;
      this._surname = surname;
   }

   get name(){
      return this._name;
   }

   set name(value){
      this._name = value;
   }

   get surname(){
      return this._surname;
   }

   set surname(value){
      this._surname = value;
   }

   get fullName(){
      return `[${this.name} ${this.surname}]`;
   }
}

export class Score {
   constructor(player, score){
      this.player = player;
      this.score = score;
   }
}

export class ScoresRepository {
   constructor(){
      var player = new Player("Marko", "Danijel");

      this._scores = [
         new Score(player, 80),
         new Score(player, 68),
         new Score(player, 62),
         new Score(player, 57)
      ];

      this._collection = new ScoresCollection(this._scores);
   }

   get collection(){
      return this._collection;
   }

   *[Symbol.iterator]() {
      for(var i=0; i<this._scores.length; ++i){
         yield this._scores[i];
      }
   }

   getScores(){
      return this._scores;
   }

   getBest(){
      return this._scores[0].score;
   }
}

export class ScoresCollection {
   constructor(scores){
      this._scores = scores;
   }

   [Symbol.iterator]() {
      return new ScoresCollectionIterator(this._scores);
   }
}

export class ScoresCollectionIterator {
   constructor(collection){
      this._current = 0;
      this._collection = collection;
      this._length = collection.length;
   }

   next(){
      if(this._current < this._length){
         var value = { value: this._collection[this._current], done: false };
         this._current += 1;
         return value;
      }
      else {
         return { value: undefined, done: true };
      }
   }
}

export class RepoTest extends Runnable {
   run() {
      const log = ({name="Ivan", surname="Horvat"}) => { console.log(`2 ${name} ${surname}`); }
      const repo = new ScoresRepository();

      var [{ score: best}, {player: { name, surname }, score}, { score: second}, third] = repo.getScores();

      console.log(name, surname, score);
      console.log(third.player.fullName, third.score);
      console.log("best = ", best);

      log(third.player);
      log({});

      let collection = repo.collection;

      for(let person of collection){
         console.log(person.score);
      }
      console.log("");

      for(let person of repo){
         console.log(person.score);
      }
   }
}
