var tellForturne = function(numChildren, partnerName, geoLocations, job) {
  console.log("You will be a " + job + " and married to " + partnerName + " with " + numChildren + " kids.");
};

tellForturne(4, 'Hooch', 'Seattle', 'Umdertaker');

var ageCalculator = function(currentYear, birthYear) {
  var postBirthdayAge = currentYear - birthYear;
  var preBirthdayAge = currentYear - birthYear - 1; 
  console.log("They are either " + postBirthdayAge + " or " + preBirthdayAge);
}

ageCalculator(2015, 1983)

var ageCalculatorDynamic = function(birthYear) {
  var currentYear = (new Date()).getFullYear();
  var postBirthdayAge = currentYear - birthYear;
  var preBirthdayAge = currentYear - birthYear - 1; 
  console.log("They are either " + postBirthdayAge + " or " + preBirthdayAge);
}

ageCalculatorDynamic(1983)

var lifetimeSupply = function(currentAge, maximumAge, perDay){
  var yearTOGo = maximumAge - currentAge;
  var perYear = perDay * 365.25;
  var sum = parseInt(yearTOGo * perYear);
  console.log("You will need " + sum + " to last you until the ripe old age of " + maximumAge + ".");
}

lifetimeSupply(30,80,1);

var geometrizer = function(radius) {
  var circumference = Math.PI * 2 * radius;
  var area = Math.PI * radius * radius;
  console.log("The circumference is " + circumference + ".");
  console.log("The area is " + area + ".");
}

geometrizer(3);


var cTof =  function(c) {
  var f = c * 1.8 + 32;
  console.log("°C is " + f +".");
}

cTof(20)

var fToc = function(f) {
  var c = (f - 32)/1.8;
  console.log("°F is " + c + ".")
}
fToc(20)

