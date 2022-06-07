//How can we print 1-6 number randomly in LODU game?

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRndInteger(1, 6);


// How do we sort the names of everyone in our classroom alphabetically?

const students = ["Abir", "Shams", "Kiron", "Rahim", "Hasan", "Sajjad"];

console.log(students.sort());



// How do we sort the Roll numbers of everyone in our classroom seriully?

const roll_numbers = [3, 2, 6, 4, 75, 34, 23, 5, 8, 7];

console.log(roll_numbers.sort((a, b) => { return a - b }));


//How can we check the year is Leap year or not?

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`)
    }
    else {
        console.log(`${year} is not a leap year`);
    }
}

isLeapYear(2026);