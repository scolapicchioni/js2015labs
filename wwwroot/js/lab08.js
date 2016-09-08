'use strict';

let serverdata = [{
    email: "user1@gmail.com",
    name: "User1",
    address: "Street 1"
}, {
    email: "user2@hotmail.com",
    name: "User2",
    address: "Street 2"
}, {
    email: "user3@yahoo.com",
    name: "User3",
    address: "Street 3"
}, {
    email: "user4@outlook.com",
    name: "User4",
    address: "Street 4"
}];

let createUser = ({email, name, address} = {})=>{
    return {
        email, name, address,
        [Symbol.toPrimitive](hint) {
            //if(hint=="string"){
            return `${this.email} ${this.name} ${this.address}`;
            //}
            //else return this;
        }
    }
}

let users = (() => {
    let res = new Map();
    for(let user of serverdata) {
        res.set(user.email, createUser(user));
    }
    return res;
})();

for(let [key,user] of users.entries()) {
    console.log(`key: ${key} - value: ${user}`);
}

let addUser = (user)=>{
    users.set(user.email, createUser(user));
};

console.log(users.size);
addUser({email:"a@a.a", name:"bla",address:"yada"});
console.log(users.size);
console.log(`${users.get("a@a.a")}`);

addUser({email:"a@a.a", name:"gu",address:"plump"});
console.log(users.has("a@a.a"));
console.log(`${users.get("a@a.a")}`);