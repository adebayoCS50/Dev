//! A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

//! For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

//! In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

//! Now instances of Bird will have both eat() and fly() methods:
let duck = new Bird();

duck.eat() //would display the string nom nom nom in the console, and 
duck.fly() // fly() would display the string I'm flying!.

let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();


  let funModule  = (function() {
    return {
      isCuteMixin:  function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin : function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }

    }
  })();

// Object Literal.

const book1 = {
  title: 'Book 1',
  author: 'John Eskrima',
  year: 2000,
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
};

console.log(Object.values(book1));
console.log(Object.keys(book1));
console.log(book1.getSummary);


// Constructor
function Book(title, author, year){
  this.author = author;
  this.year = year;
  this.title = title;
}

// Prototype
Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author} in ${this.year}}`
}

const bookNew = new Book('Le Bleu', 'Olaseni', 2025);
console.log(bookNew.getSummary);

