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

// How do I determine the number of vowels in a sentence?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach((value) => {
        if (vowels.includes(value)) {
            count++;
        }

    })
    return count;

}

countVowels("I Love My Country");


//How to remove duplicate number from an array?

const numbers = [1, 3, 4, 5, 3, 5, 7, 8, 9, 4, 8, 10, 12, 15];

const duplicate = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index
})
console.log(duplicate)