//Phone.js

'use strict';

import { AppDrawer } from "./AppDrawer"
import { AddressBook } from "./AddressBook"
import { Calculator } from "./Calculator"

export class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.appDrawer = new AppDrawer();
        this.appDrawer.addApp(new AddressBook());
        this.appDrawer.addApp(new Calculator());
    }
}

//end Phone.js