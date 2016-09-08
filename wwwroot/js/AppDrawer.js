//AppDrawer.js

'use strict';

import { App } from "./App"
import { AddressBook } from "./AddressBook"
import { Calculator } from "./Calculator"

export class AppDrawer {
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

//end AppDrawer.js