
var movePixelsX = 1;
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
  var currentTop = parseInt(img.style.top);
  var movePixelsY = parseInt(img.attributes['data-move-y'].value);
  if(img.directionX === undefined) {
    img.directionX = 1;
  }
  if(img.directionY === undefined) {
    img.directionY = 1;
  }
  img.style.left = (currentLeft + (movePixelsX * img.directionX)) + 'px';
  img.style.top = (currentTop + (movePixelsY * img.directionY)) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    flipCat(img);
    img.directionX = -1;
  }
  if (currentLeft <= 0) {
    flipCat(img);
    img.directionX = 1;
  }
  if (currentTop <= -10) {
    img.directionY = -1
  }
  if (currentTop > (window.innerHeight-img.height)) {
    img.directionY = 1
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
  movePixelsX = 1;
  catTimer = window.setInterval(catWalk, delayMs);
}

function speedCatWalk() {
  movePixelsX += 10;
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



