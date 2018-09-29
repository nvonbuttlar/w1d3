var person = {
  firstName: 'John',  // <= property containing data
  lastName:  'Tavares', // <= ditto
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log('Hello, ' + person.firstName + ' ' + person.lastName);
console.log('Hello, ' + person.fullName()); // This is a cleaner way to write this code

// In our example, We called fullName on the object referred to by
// var person and so this refers to that person object.

