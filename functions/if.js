var bigger = function(num1, num2) {
if(num1 > num2) {
  return num1;
} else {
  return num2};
}

console.log(bigger(2,3));


var helloWorld = function(code) {
if(code === "sx") {
  return "hallå världen.";
} else if(code === "zh") {
  return "世界， 你好.";
} else {
  return "Hello World."
};
} 

console.log(helloWorld("sx"));
console.log(helloWorld("zh"));
console.log(helloWorld());

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

console.log(assignGrade(80));
console.log(assignGrade(70));
console.log(assignGrade(60));
console.log(assignGrade(50));
console.log(assignGrade(40));

var pluralie = function(noun, number) {
  if (number === 1) {
    return number + " " + noun;
  } else {
    return number + " " + noun+"s"
  };
}

console.log(pluralie('dog',1));
console.log(pluralie('dog',3));

