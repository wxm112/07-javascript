var ratePoundToDollar = 1.9837
var rateDollarToPound = 0.5041

var dollarsToPounds = function(dollar) {
  var pound = dollar * rateDollarToPound;
  var result = pound.toFixed(2);
  console.log("$" + dollar + " is " + "£"+result);
}

dollarsToPounds(90);

var poundsToDollars = function(pound) {
  var dollar = pound * ratePoundToDollar;
  var result = dollar.toFixed(2);
  console.log("£" + pound + " is " + "$"+result);
}


poundsToDollars(90)