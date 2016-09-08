'use strict';

function sum(...numbers){
    let result = 0;
    for(let n of numbers)
        result += n;
    return result;
}

let sum2 = (...numbers) => numbers.reduce((prev, curr)=> prev + curr ,0)

function hello(name = "you"){
    console.log(`Hello ${name}`);
}

    let hello2 = (name = "you") => console.log(`Hello ${name}`)

    console.log(sum(1,2,3,4,5));
    console.log(sum2(1,2,3,4,5));
    hello();
    hello("Simona");
    hello2();
    hello2("Simona");
