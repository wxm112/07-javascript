
// var addition = function(n1, n2){
//   return n1 + n2;
// }

// var subtraction = function(n1,n2) {
//   return n1 - n2;
// }

// var multiplication = function(n1,n2) {
//   return n1 * n2;
// }

// var division = function(n1,n2) {
//   return n1 / n2;
// }

// var modulus = function(n1,n2) {
//   return n1 % n2;
// }

// var squareRoot = function(n){
//   return Math.sqrt(n);
// }

// var calculator = function() {
//   var number1 = parseFloat(prompt('Enter the first number:'));
//   var operator = prompt('Enter the operator:');
//   if (operator != "sqrt") {
//     var number2 = parseFloat(prompt('Enter the second number:'));
//   }
//   if (operator === "+") {
//     return addition(number1, number2);
//   } else if (operator === "-"){
//     return subtraction(number1,number2);
//   } else if (operator === "*") {
//     return multiplication(number1,number2);
//   } else if (operator === "/") {
//     return division(number1,number2);
//   } else if (operator === "%") {
//     return modulus(number1,number2);
//   } else if (operator === "sqrt") {
//     return squareRoot(number1);
//   } else {
//     return "Invalid method !"; 
//   }
// }




// +, -, *, /
var calculate = {
  tidy: parseFloat, // You are not expected to understand this.

  add: function(a,b){
    return this.tidy(a) + this.tidy(b);
  },

  subtract: function(a, b){
    return this.tidy(a) - this.tidy(b);
  },

  multiply: function(a, b){
    return this.tidy(a) * this.tidy(b);
  },

  divide: function(a, b){
    return this.tidy(a) / this.tidy(b);
  },

  operate: function(num1, num2, operation){
    var result;

    if (operation=== '+'){
      result = calculate.add(num1, num2);
    } else if (operation=== '-'){
      result = calculate.subtract(num1, num2);
    } else if (operation=== '*'){
      result = calculate.multiply(num1, num2);
    } else if (operation=== '/'){
      result = calculate.divide(num1, num2);
    } else {
      result = 'Unknown operation';
    }
    return result;
      }
};



var num1 = prompt('Enter the first number:');
var operation = prompt('Enter your operations: +,-,*,/')
var num2 = prompt('Enter the second number:');


var result = calculate.operate(num1,num2,operation)
console.log('The result is: ' + result);



















