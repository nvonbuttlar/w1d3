var person = {
  firstName: 'John',  // <= property containing data
  lastName:  'Tavares', // <= ditto
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

console.log('Hello, ' + person.firstName + ' ' + person.lastName);
console.log('Hello, ' + person.fullName()); // This is a cleaner way to write this code