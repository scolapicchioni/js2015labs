//PhoneMain.js

'use strict';

import { Phone } from "./Phone"
import { Contact } from "./Contact"

let p1 = new Phone("Samsung", "Galaxy S5");

let ab = p1.appDrawer.addressBook;

ab.addContact(new Contact("Andrea", "Anderson", "06123456"));
ab.addContact(new Contact("Bob", "Builders", "018258392"));
ab.addContact(new Contact("Candice", "Clarkson", "0657890"));
ab.addContact(new Contact("David", "Danielson", "012356380"));

console.log("***********all contacts**************");
for(let c of ab){
    console.log(c);
}

console.log("***********phone numbers including 06**************");
for(let c of ab.where(contact => contact.phoneNumber.includes("06"))){
    console.log(c);
}

let calc = p1.appDrawer.calculator;
console.log(calc.add(1,2,3,4,5,6,7,8,9,10));
console.log(calc.multiply(1,2,3,4,5));

//end PhoneMain.js