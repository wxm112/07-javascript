var ratePoundToDollar = 1.9837
var rateDollarToPound = 0.5041

var dollarsToPounds = function(dollar) {
  var pound = dollar * rateDollarToPound;
  var result = Math.round(pound*100)/100;
  console.log("$" + dollar + " is " + "£"+result);
}

dollarsToPounds(90);

var poundsToDollars = function(pound) {
  var dollar = pound * ratePoundToDollar;
  var result = Math.round(dollar*100)/100;
  console.log("£" + pound + " is " + "$"+result);
}


poundsToDollars(90)