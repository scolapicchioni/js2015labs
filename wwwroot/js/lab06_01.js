'use strict';

let course = {
    title: 'ES6',
    description: 'blabla',
    editions: [
        {
            trainer: 'Matt Smith',
            dates: {
                start: '01/01/2016',
                end : '05/01/2016'
            },
            location: {
                address1: 'One Way Street',
                city : 'New York'
            }
        },
        {
            trainer: 'Frank Gambale',
            dates: {
                start: '03/05/2016',
                end: '08/05/2016'
            },
            location: {
                address1: 'Two Blocks Road',
                city: 'Las Vegas'
            }
        },
        {
            trainer: 'John Doe',
            dates: {
                start: '10/10/2016',
                end : '15/10/2016'
            },
            location: {
                address1: 'One Way Street',
                city : 'New York'
            }
        },
    ]
};


let firstEdition = () => {
    let { title, editions : [{trainer = "TBD", dates : {start : startDate }, location : {city } }]} = course;
    return {title, trainer, startDate, city};
}

let {trainer : t, city:c} = firstEdition();
console.log(t, c);
