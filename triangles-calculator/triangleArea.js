var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};

var area = function(triangle){
  var sideTest1 = (triangle.sideA + triangle.sideB) > triangle.sideC;
  var sideTest2 = (triangle.sideB + triangle.sideC) > triangle.sideA;
  var sideTest3 = (triangle.sideC + triangle.sideA) > triangle.sideB;

  if (sideTest1 && sideTest2 && sideTest3) {
    var s = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
    return Math.sqrt(s).toFixed(2); 
  } else {
      return "Invalid triangle!";
    }
}

console.log(area(triangle));