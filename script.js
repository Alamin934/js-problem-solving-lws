//How can we print 1-6 number randomly in LODU game?

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRndInteger(1, 6);


// How do we sort the names of everyone in our classroom alphabetically?

const students = ["Abir", "Shams", "Kiron", "Rahim", "Hasan", "Sajjad"];

console.log(students.sort());
