// Exercise 1 - Classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`
    }
}

// Exercise 2 - This

const person1 = new Person("Shefali", 25);
console.log(person1.introduce()); // Output: "Hi, my name is Shefali and I am 25 years old."

const describePerson = (callback) => {
      
      return callback.call(person1);  // Call the callback function with person1 as the "this" context
}

function customIntroduction() {   // Define a callback function to be passed to describePerson
  console.log(this.introduce());
} 
 // call describeperson function
describePerson(customIntroduction); // Output: "Hi, my name is shefali and I am 25 years old."

// Exercise 3 - Promises

function wait(milliseconds) {
    return new Promise((resolve,) => {
      setTimeout(() => {
        resolve(`Waited for ${milliseconds} milliseconds`);
      }, milliseconds);
    });
  }

  
  document.getElementById('waitButton').addEventListener('click', () => {
  wait(3000).then((result) => {
    console.log(result);
  })
  })




