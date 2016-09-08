//AddressBook.js

'use strict';

import { App } from "./App"
import { Contact } from "./Contact"

export class AddressBook extends App {
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

//end AddressBook.js