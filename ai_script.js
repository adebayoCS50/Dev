//?  @salakosunday Night Owl, Dank Mono, & Quokka on vscode

// ! write a function that returns  an array consisting of the largest number from each provided sub-array.
function largestNumber(arr){
    let result = []
    for(let item=0; item<arr.length; item++){
        let maxNum = Math.max(...arr[item]);
        result.push(maxNum)  
    }
    return result
}

function largestNumber2(arr){
    let result = []
    for(const item in arr){
        const maxNum = Math.max(...arr[item]);
        result.push(maxNum)  
    }
    return result
}

// ? Test cases:
let testCase1 = [[2,3,4], [30,20,40,40]]
let testCase2= [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]] //should return [25, 48, 21, -3].
let testCase3 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
console.log(largestNumber(testCase1));
console.log(largestNumber(testCase2));
console.log(largestNumber2(testCase3));

// ! Write a function that Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
    const targetCount = target.length;
  if (target !== str.substring(str.length - targetCount)) {
    return false;
  } else return true;
}

console.log(confirmEnding("Open sesame", "same"));

//! Write a function that Repeat a given string str (first argument) 
//!...for num times (second argument).

function strRepeater(str, num){
    let result = '';
    if (num <= 0 && str === '')
    console.log(`no value to repeat`);
    else {
      for(let i=0; i<num; i++){
        result +=str
      }
    }
    return result
} 
console.log(strRepeater('ahah! ', 3));



//! Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length === 0 || num <= 0) {
      return "Invalid Parameter";
    } else if (num >= str.length) {
      return str;
    } else {
      const regex = new RegExp(`^(.{${num}})(.*)$`); //How to work with regex in JS.
      return str.replace(regex, "$1...");
    }
  }

testString = "Peter Piper picked a peck of pickled peppers"
testString2 = "Absolutely Longer"
console.log(truncateString(testString, 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//! Simple Function.
function findElement(arr, func) {
    for (let i = 0; i <= arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }

  

