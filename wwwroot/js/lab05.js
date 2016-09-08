'use strict';

let CreateCustomer = (id, name, city) => {
    return {
        id,
        name,
        city,
        nrOfUnpaidBills: 0,
        buyStuff() {
            this.nrOfUnpaidBills++;
        },
        payBill() {
            this.nrOfUnpaidBills--;
        },
        toString() {
            return `(${this.id}) ${this.name} - ${this.city}`;
        }
    };
}

let c1 = CreateCustomer(1, "John", "New York");

c1.buyStuff();
c1.buyStuff();
c1.buyStuff();
console.log(`${c1} has ${c1.nrOfUnpaidBills}`);
c1.payBill();
console.log(`${c1} has ${c1.nrOfUnpaidBills}`);
