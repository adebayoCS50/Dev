const now = new Date();
console.log(now);
console.log(typeof now);

// Year, Month, Day, Timestamp

let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
let timeStamp = now.getUTCDay();


console.log(day, month, year);

// Date String:

let dateNow = now.toDateString();  
console.log(dateNow);
let localDate = now.toLocaleTimeString(); // convert
let localDate1 = now.toLocaleDateString(); // convert
let localDate2 = now.toLocaleString(); // convert
console.log(localDate);
console.log(localDate1);
console.log(localDate2);