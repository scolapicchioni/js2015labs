//Calculator.js

'use strict';

import { App } from "./App"

export class Calculator extends App {
    constructor() {
        super("Calculator");
    }
    add(...numbers) {
        let result = 0;
        for(let n of numbers) {
            result += n;
        }
        return result;
    }
    subtract(...numbers) {
        let result = 0;
        for(let n of numbers) {
            result -= n;
        }
        return result;
    }
    multiply(...numbers) {
        let result = 1;
        for(let n of numbers) {
            result *= n;
        }
        return result;
    }
    divide(...numbers) {
        let result = 1;
        for(let n of numbers) {
            result /= n;
        }
        return result;
    }
}

//end Calculator.js