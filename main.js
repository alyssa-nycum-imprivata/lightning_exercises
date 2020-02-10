// Lightning Exercise 1

const officeName = "officeName";
const streetAddress = "streetAddress";
const doctorName = "doctorName";
const patientName = "patientName";
const visitDate = "visitDate";
const amountBilled = "amountBilled";
const dueDate = "dueDate";

const bills = [
    {
        officeName: "East Nashville Family Medicine",
        streetAddress: "124 Woodland St",
        doctorName: "Dr. Kristen Madia",
        patientName: "Alyssa Nycum",
        visitDate: "1/30/20",
        amountBilled: 25.00,
        dueDate: "2/15/20"
    }
];

// Lightning Exercise 2

console.log(bills[0][visitDate]);
console.log(bills[0][amountBilled]);
console.log(bills[0][patientName]);

// Lightning Exercise 3

console.log(Object.values(bills));

bills.forEach(bill => {
    for (let value of Object.values(bill)) {
        console.log(value);
    }
});

// Lightning Exercise 4

bills.forEach(bill => {
    for (let key of Object.keys(bill)) {
        console.log(key);
    }
});

// Lightning Exercise 5

const billContainer = document.querySelector("#keys");

const bill = bills[0];

for (let key of Object.keys(bill)) {
    billContainer.innerHTML += `<span>${key}</span><br>`
}

// Lightning Exercise 6

const favoriteFood = {
    name: "Chipotle Seitan Burrito",
    restaurant: "Wild Cow",
    isVegan: true
}

const mealContainer = document.querySelector(".food");

for (const entry of Object.entries(favoriteFood)) {
    mealContainer.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
}
