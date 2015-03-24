var roman_numerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
  ]


var to_roman = function (number) {
  var result = '';
  for (var i = 0; i < roman_numerals.length; i++) {
    while (number >= roman_numerals[i][1]) {
      result += roman_numerals[i][0]
      number -= roman_numerals[i][1]
    }
  }
  return result;
}


// var to_roman = function (number) {
//   var result = '';
//   for (var i = 0; i < roman_numerals.length; i++) {
//     var roman = roman_numerals[i][0]
//     var arabic = roman_numerals[i][1]
//     while (number >= arabic) {
//       result += roman;
//       number -= arabic;
//     }
//   }
//   return result;
// }

console.log("IV" == to_roman( 4 ));
console.log( "V" == to_roman( 5 ) );
console.log( "VI" == to_roman( 6 ) );
console.log( "IX" == to_roman( 9 ) );
console.log( "XXVII" == to_roman( 27 ) );
console.log( "XLVIII" == to_roman( 48 ) );
console.log( "LIX" == to_roman( 59 ) );
console.log( "XCIII" == to_roman( 93 ) );
console.log( "CXLI" == to_roman( 141 ) );
console.log( "CLXIII" == to_roman( 163 ) );
console.log( "CDII" == to_roman( 402 ) );
console.log( "DLXXV" == to_roman( 575 ) );
console.log( "CMXI" == to_roman( 911 ) );
console.log( "MXXIV" == to_roman( 1024 ) );
console.log( "MMM" == to_roman( 3000 ) );