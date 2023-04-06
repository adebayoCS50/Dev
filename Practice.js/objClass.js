class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} was written ${years} years ago`;
  }

  revised(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log("You drive this car");
  }

  brake() {
    console.log("You step on the brake");
  }

  reverse() {
    console.log("You apply the reverse gear");
  }
}

class User {
  constructor(username, email, score) {
    //Set Up the Properties:
    this.username = username;
    this.email = email;
    this.score = score;
  }

  // Set Up the Methods:
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logOut() {
    console.log(`${this.username} logged out`);
    return this; // TODO enable chaining of object's methods
  }

  playScore() {
    this.score++;
    console.log(`${this.username} scores ${this.score}`);
    return this;
  }
}


const userJHK89 = new User('James Haskell', 'jhk89@mac.com',0);

// Chaining.
console.log(userJHK89.login().playScore().playScore().playScore().logOut());
