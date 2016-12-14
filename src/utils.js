export class Runnable {
   run(){ }

   logArray(array, name = ""){
      var str = "[" + array.join(",") + "]";
      console.log(name, str);
   }

   logSet(set, name=""){
      var items = "";
      for(var item of set){
         items += item + ",";
      }
      var str = `Set (${name}) size = ${set.size} [${items}]`;

      console.log(str);
   }

   logMap(map, name=""){
      var items = "";
      for(var key of map.keys()){
         items += `${key} = ${map.get(key)}, `;
      }
      var str = `Map (${name}) size = ${map.size} [${items}]`;

      console.log(str);
   }

   logIterable(iterator, name=""){
      var items = "";
      var next = iterator.next();
      while(!next.done){
         items += `${next.value} `;
         next = iterator.next();
      }

      var str = `Collection (${name}) [${items}]`;
      console.log(str);
   }

   logEnumerable(collection, name=""){
      var items = "";
      for(var item of collection){
         items += `${item} `;
      }

      var str = `Collection (${name}) [${items}]`;
      console.log(str);
   }
}
