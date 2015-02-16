var colors = ['Yellow', 'Orange', 'Red', 'Green']

for (var index = 0; index < colors.length; index++) {
  console.log("My #" + index + " choice is " + colors[index])
}


for (var index = 0; index < colors.length; index++) {
  if (index === 0) {
    console.log("My 1st " + "choice is " + colors[index]);
  } else if (index === 1){
    console.log("My 2nd " + "choice is " + colors[index]);
  } else if (index === 2){
    console.log("My 3rd " + "choice is " + colors[index]);
  } else {
    console.log("My " + (index+1) + "th" + " choice is " + colors[index])
  }; 
}