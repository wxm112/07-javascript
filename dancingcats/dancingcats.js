
var movePixels = 1;
var delayMs = 5;
var catTimer = null;
var div = document.getElementById('info');

function flipCat(img) {
  if (img.style.transform === 'scaleX(-1)') {
    img.style.transform = 'scaleX(1)';
  } else {
    img.style.transform = 'scaleX(-1)';
  }
}

function shiftCat(img) {
  var currentLeft = parseInt(img.style.left);
  if(img.direction === undefined) {
    img.direction = 1;
  }

  img.style.left = (currentLeft + (movePixels * img.direction)) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    flipCat(img);
    img.direction = -1;
  }
  if (currentLeft <= 0) {
    flipCat(img);
    img.direction = 1;
  }
}

function catWalk() {
  var images = document.getElementsByClassName('main');
  [].forEach.call(images, function(img) { 
    shiftCat(img);
  });
}

function startCatWalk() {
  stopCatWalk();
  movePixels = 1;
  catTimer = window.setInterval(catWalk, delayMs);
}

function speedCatWalk() {
  movePixels += 10;
}

function stopCatWalk() {
  window.clearInterval(catTimer);
}

function startInfo() {
  div.innerHTML = "Click on it and the cats shall commence dancing.";
}

function speedInfo() {
  div.innerHTML = "Click on it and speed the cats.";
}

function stopInfo() {
  div.innerHTML = "Click on it and stop the cats.";
}

function clearInfo() {
  div.innerHTML = "";
}


var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startCatWalk, false);
startButton.addEventListener('mouseover', startInfo, false);
startButton.addEventListener('mouseout', clearInfo, false);

var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', speedCatWalk, false);
speedButton.addEventListener('mouseover', speedInfo, false);
speedButton.addEventListener('mouseout', clearInfo, false);


var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopCatWalk, false);
stopButton.addEventListener('mouseover', stopInfo, false);
stopButton.addEventListener('mouseout', clearInfo, false);



