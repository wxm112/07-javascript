
function sqrtcalculate(event) {
  var num = document.getElementById('square-input').value;
  var result = Math.sqrt(num);
  document.getElementById('solution').innerHTML = result;
}

var sqrtButton = document.getElementById('square-button');
sqrtButton.addEventListener('click', sqrtcalculate);



function halfcalculate(event) {
  var num = document.getElementById('half-input').value;
  var result = num/2;
  document.getElementById('solution').innerHTML = result;
}

var halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', halfcalculate);


function percentcalculate(event) {
  var fracnum = document.getElementById('percent1-input').value;
  var wholnum = document.getElementById('percent2-input').value;
  var result = (fracnum/wholnum * 100).toFixed(2) + "%";
  document.getElementById('solution').innerHTML = result;
}

var percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', percentcalculate);



function areacalculate(event) {
  var num = document.getElementById('area-input').value;
  var result = (Math.PI*num*num).toFixed(2);
  document.getElementById('solution').innerHTML = result;
}

var areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', areacalculate);



