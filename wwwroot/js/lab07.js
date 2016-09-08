'use strict';

// An object without Symbol.toPrimitive property.
var obj1 = { };
console.log("************obj1********************");
console.log(+obj1);     // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 == 0); // false

// An object with Symbol.toPrimitive property.
var obj2 = {
  [Symbol.toPrimitive](hint) {
      if (hint == "number") {
          return 10;
      }
      if (hint == "string") {
          return "hello";
      }
      return true;
  }
};
console.log("*************obj2*******************");
console.log(+obj2);     // 10      -- hint is "number"
console.log(`${obj2}`); // "hello" -- hint is "string"
console.log(obj2 == 0); //false -- hint is "default"
