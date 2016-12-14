import {RepoTest} from "./data.js";
import {RandomTest} from "./random.js";
import {ArrayTest} from "./array.js";
import {PersonTest} from "./person.js";
import {SetTest} from "./set.js";
import {MapTest} from "./map.js";
import {PromiseTest} from "./promise.js";

var tests = [];
//tests.push(new PersonTest());
//tests.push(new RepoTest());
//tests.push(new RandomTest());
//tests.push(new ArrayTest());
//tests.push(new SetTest());
//tests.push(new MapTest());
tests.push(new PromiseTest());

for(var test of tests){
   test.run();
}
