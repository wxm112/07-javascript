// The even/odd reporter

for (var i = 0; i < 21; i++) {
  if(i % 2 === 0) {
    console.log(i + " is even.");
  }
}

// Multiplication Tables

for (var i = 0; i < 11; i++) {
  var result = i * 9;
    console.log("The result is " + result);
}


for (var i = 1; i < 11; i++) {
  for (var j = 1; j < 11; j++) {
    var result = i * j;
      console.log("The result is " + result);
  }
}

// The Grade Assigner

var assignGrade = function(score){
if(score >= 80) {
  return "A";
} else if(70 <= score) {
  return "B";
} else if(60 <= score) {
  return "C";
} else if(50 <= score) {
  return "D"
} else {
  return "F"
};
}

for (var i = 60; i < 101; i++){
  var result = assignGrade(i);
    console.log("For " + i + " , you got a " + result);
}
