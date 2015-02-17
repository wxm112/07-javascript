
var addition = function(n1, n2){
  return n1 + n2;
}

var subtracton = function(n1,n2) {
  return n1 - n2;
}

var multiplication = function(n1,n2) {
  return n1 * n2;
}

var division = function(n1,n2) {
  return n1 / n2;
}

var modulus = function(n1,n2) {
  return n1 % n2;
}

var squareRoot = function(n){
  return Math.sqrt(n);
}

var calculator = function() {
  var number1 = parseFloat(prompt('Enter the first number:'));
  var operator = prompt('Enter the operator:');
  if (operator != "sqrt") {
    var number2 = parseFloat(prompt('Enter the second number:'));
  }
  if (operator === "+") {
    return addition(number1, number2);
  } else if (operator === "-"){
    return subtracton(number1,number2);
  } else if (operator === "*") {
    return multiplication(number1,number2);
  } else if (operator === "/") {
    return division(number1,number2);
  } else if (operator === "%") {
    return modulus(number1,number2);
  } else if (operator === "sqrt") {
    return squareRoot(number1);
  } else {
    return "Invalid method !"; 
  }
}

console.log(calculator());