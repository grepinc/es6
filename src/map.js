import {Runnable} from "./utils.js";

export class MapTest extends Runnable {
   run() {
      var map = new Map();
      this.logMap(map);

      map.set("Skyrim", 5);
      map.set("Oblivion", 4);

      this.logMap(map);

      this.logEnumerable(map.entries());
      this.logEnumerable(map.keys());
      this.logEnumerable(map.values());
   }
}
