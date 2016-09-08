//excercise 2
let addEdition = (title, {trainer = "TBD", startDate = new Date() , duration = 5, city = "TBD"} = {})=> {
    console.log(title, trainer, startDate, duration, city);
}

addEdition("Course1", {trainer : "T1", startDate : new Date(2016,3,1), duration : 3, city: "New York"});
addEdition("Course2", {startDate : new Date(2016,3,12)});
addEdition("Course3");

