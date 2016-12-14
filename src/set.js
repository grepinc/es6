import {Runnable} from "./utils.js"

export class SetTest extends Runnable {
   run() {
      var set = new Set();
      this.logSet(set);

      set.add(1);
      set.add(2);

      this.logSet(set);

      set.add(2);

      this.logSet(set);

      set.delete(3);
      this.logSet(set);

      set.clear();
      this.logSet(set);

      set.add(1).add(2).add(3);
      var copy = new Set(set);
      this.logSet(copy, "copy");
      copy.delete(2);
      this.logSet(copy, "copy");
      this.logSet(set, "set");

      var it = set.values();
      var next = it.next();
      console.log(next);

      it = set.keys();
      next = it.next();
      console.log(next);

      it = set.entries();
      next = it.next();
      console.log(next);


   }
}
