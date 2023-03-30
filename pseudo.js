// classic object.
let userOne = {
    email:'ryu@ninja.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);
// Author: S.A.Salako

// Object with Class 

class BVN_user {
    constructor(name,dob,phoneNumber,email,nin,fingerPrint) {
        this.name = name;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.nin = nin;
        this.fingerPrint = fingerPrint;
    }
    verifyBVN(){
        console.log(`${this.name}'s BVN:${this.fingerPrint} verification is successful`);
        return this
    }

    verifyNIN(){
        console.log(`${this.name}'s NIN:${this.nin} is valid`);}

}

const omolola = new BVN_user('Omolola Odusola', 'Jan-20','0801234567','lola@uk.com','182391100');
const abisola = new BVN_user('Abisola', 'Jan-23','0801234569','abisola@uk.com','nin','0xb189273jka');

abisola.verifyBVN();
omolola.verifyNIN();
class Salako extends BVN_user{

}

const salakoSunday = new Salako('SundaySalako', 'April 6','08128000734','sunday.s@fidelitybank.ng');

console.log(salakoSunday);


function Bird(name) {
    this.name = name;
}

Bird.prototype.phoneNumber = 08038000734;

let student = new Bird('Donald');
console.log(student);

// Prototype.

function Cat(name) {
    this.name = name;
  }
  
Cat.prototype = {
    constructor: Cat,
  };
  
function Bear(name) {
    this.name = name;
  }
  
Bear.prototype = {
    constructor: Bear,
  };
  
function Animal() { };
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
      }
  
  };


  function BankAccount(initialBalance) {
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  };

const account1 = new BankAccount(100);
const account2 = new BankAccount(500);

account1.deposit(50);  

account1.withdraw(25);

console.log(account1.balance); // Output: 125

account2.deposit(1000);
account2.withdraw(2000); // Output: "Insufficient funds"

console.log(account2.balance); // Output: 1500


