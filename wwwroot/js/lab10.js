'use strict';

class App {
    constructor(name) {
        if (new.target === App)
            throw new Error("This class cannot be instantiated.")
        this.name = name;
    }
    
    start() {
        console.log(`******${this.name}******`);
    }
}

class AppDrawer {
    constructor(){
        this.apps = [];
    }
    addApp(app){
        if(app instanceof App)
            this.apps.push(app);
        else
            throw new Error("Cannot add item other than an App");
    }
    *[Symbol.iterator](){
        yield* this.apps;
    }
    get addressBook(){
        for (let app of this.apps) {
            if(app instanceof AddressBook)
                return app;
        }
    }
    get calculator(){
        for (let app of this.apps) {
            if(app instanceof Calculator)
                return app;
        }
    }
}

class Phone {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.appDrawer = new AppDrawer();
        this.appDrawer.addApp(new AddressBook());
        this.appDrawer.addApp(new Calculator());
    }
}

class Contact {
    constructor(name, surname, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }
}

class AddressBook extends App {
    constructor() {
        super("Address Book");
        this._contacts = [];
    }
    start() {
        super.start();

    }
    addContact(contact) {
        if(contact instanceof Contact)
            this._contacts.push(contact);
        else
            throw new Error("Cannot add item other than a Contact");
    }
    *where(predicate) {
        for(let contact of this._contacts){
            if(predicate(contact)){
                yield contact;
            }
        }
    }
    *[Symbol.iterator](){
        yield* this._contacts;
    }

}

class Calculator extends App{
    constructor(){
        super("Calculator");
    }
    add(...numbers){
        let result = 0;
        for(let n of numbers){
            result +=n;
        }
        return result;
    }
    subtract(...numbers){
        let result = 0;
        for(let n of numbers){
            result -=n;
        }
        return result;
    }
    multiply(...numbers){
        let result = 1;
        for(let n of numbers){
            result *=n;
        }
        return result;
    }
    divide(...numbers){
        let result = 1;
        for(let n of numbers){
            result /=n;
        }
        return result;
    }
}

//let a = new App("WhatsApp"); //throws an error

let p1 = new Phone("Samsung", "Galaxy S5");

let ab = p1.appDrawer.addressBook;

ab.addContact(new Contact("Andrea", "Anderson", "06123456"));
ab.addContact(new Contact("Bob", "Builders", "018258392"));
ab.addContact(new Contact("Candice", "Clarkson", "0657890"));
ab.addContact(new Contact("David", "Danielson", "012356380"));
//ab.addContact({name:"Simona", surname:"Gardner", phoneNumber:"0752984"}); //throws an error

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

