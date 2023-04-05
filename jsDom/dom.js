// let listedItems = document.getElementsByTagName("li");

// for (let i = 0; i < listedItems.length; i++) {
//   i % 2
//     ? (listedItems[i].style.backgroundColor = "#f4f4f4")
//     : (listedItems[i].style.backgroundColor = "#ffffff");
// }

let numbers = [9, 16, 25, 400, 900];
let result = numbers.map(squared);

function squared(num) {
  return Math.sqrt(num);
}

console.log(result);

let population = [
  {
    state: "California",
    population: 1,
  },
  {
    state: "Virginia",
    population: 1,
  },
  {
    state: "Florida",
    population: 1,
  },
  {
    state: "Maine",
    population: 1,
  },
];

let resultPop = population.reduce((acc, item) => {
  return acc + item.population;
}, 0);

console.log(resultPop);
