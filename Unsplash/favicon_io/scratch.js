//! Filter Metthod.

let age = [8, 10, 11, 12, 43, 47, 50];

const adult = age.filter((e) => {
  return e > 12;
});

//? returns age above age 12
console.log(adult);

//? create function to filter teen age 
function checkAge(age) {
  return age <= 12 && age >= 8;
}

//? log teen age using the filter function 
console.log(age.filter(checkAge));


// ! Map Method

let people = [
  { firstname: "Jimmy", lastname: "Brown" },
  { firstname: "Cindy", lastname: "Malcolm" },
  { firstname: "Timothy", lastname: "Stumps" },
];

function getFullName(element, index) {
  let fullName = element.firstname + " " + element.lastname;
  return `${index}:${fullName}`;
}

console.log(people.map(getFullName));

//! Filter & Map Method
const kidAges = [8, 10, 11, 12];
const kids = ["Toke", "Olaseni", "Adebare", "Dad", "Mum"];

const filteredAges = kidAges.filter((age) => age < 50);//filter out elder >=
const result = filteredAges.map(
  (age, index) => `${kids[index]} is ${age} years old.` //log kid name against their age
);

console.log(result);


