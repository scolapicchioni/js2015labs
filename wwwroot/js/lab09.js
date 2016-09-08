'use strict';

let createCustomer = (id, name, city) => {
    return {
        id,
        name,
        city,
        bills : {
            _bills: new Map([[true, new Map()],[false, new Map()]]),
            pay(billNumber) {
                let unpaid = this._bills.get(false);
                let bill = unpaid.get(billNumber);
                unpaid.delete(billNumber);
                let paid = this._bills.get(true);
                paid.set(bill.number, bill);
            },
            add(bill) {
                let unpaid = this._bills.get(false);
                unpaid.set(bill.number, bill);
                this._bills.set(false, unpaid);
            },

            *paid(){
                for(let [key,bill] of this._bills.get(true).entries()){
                    yield bill;
            }
            },
            *unpaid(){
                for(let [key,bill] of this._bills.get(false).entries()){
                    yield bill;
                }
            }
        }
    }
}

let c1 = createCustomer(1,"Mario","Roma");
c1.bills.add({number: "ab123", amount : 123});
c1.bills.add({number: "cd456", amount : 456});
c1.bills.add({number: "ef789", amount : 789});
c1.bills.add({number: "gh012", amount : 128});
c1.bills.add({number: "ij386", amount : 946});

console.log("*********unpaid***********");
for(let b of c1.bills.unpaid()){
    console.log(b.number, b.amount);
}

c1.bills.pay("ef789");
c1.bills.pay("cd456");

console.log("*********unpaid***********");
for(let b of c1.bills.unpaid()){
    console.log(b.number, b.amount);
}

console.log("*********paid***********");
for(let b of c1.bills.paid()){
    console.log(b.number, b.amount);
}

