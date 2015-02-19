
var movePixels = 1;
var delayMs = 5;
var catTimer = null;

var direction = 1;

function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + (movePixels * direction)) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.transform = 'scaleX(-1)';
    direction = -1;
  }
  if (currentLeft <= 0) {
    img.style.transform = 'scaleX(1)';
    direction = 1;
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function speedCatWalk() {
  movePixels += 10;
}

function stopCatWalk() {
  window.clearInterval(catTimer);
}



var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startCatWalk, false);

var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', speedCatWalk, false)

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopCatWalk, false);



