//App.js

'use strict';

export class App {
    constructor(name) {
        if (new.target === App)
            throw new Error("This class cannot be instantiated.")
        this.name = name;
    }
    
    start() {
        console.log(`******${this.name}******`);
    }
}

//end App.js