// ! String & Number Conversion.

let number = 500;
// using .toString() method
convString =number.toString();
console.log(convString);
console.log(typeof convString);

//using String() function.
convertedString = String(number);
console.log(convertedString);

// Number conversion
let rating = 3.0;
userInput = rating.toFixed(2);
console.log(userInput);

// Convert to Number.

systemRating = parseFloat(userInput);
console.log(systemRating); 
// ? Note parseInt does not keep decimal while parsingFloat does. 

let num = [5,4,3,2,1,0]

let newNum = [];
num.forEach(num => {
  num++
  newNum.push(num)
});

console.log(newNum);

let fruits = [ 'kiwi','apple','banana', 'pear', 'grape', 'lime', 'orange', 'lemon'];

fruits.forEach((fruit, index) => {
   console.log(`${fruit} is in index ${index}`);
})

