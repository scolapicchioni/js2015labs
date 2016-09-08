//before
for (var i = 1; i <= 4; i++) {
    var b = document.getElementById("button" + i);
    b.addEventListener("click", function () {
        console.log("You clicked on " + i);
    });
}


//after
'use strict';
for (let i = 1; i <= 4; i++) {
    let b = document.getElementById("button" + i);
    b.addEventListener("click", function () {
        console.log("You clicked on " + i);
    });
}
