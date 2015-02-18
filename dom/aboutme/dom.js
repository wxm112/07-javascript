console.log('hello World', document.body)

var body = document.getElementsByTagName('body')[0]
body.style['font-family'] = "Arial, sans-serif";

document.getElementById('nickname').innerHTML = 'Bruno'
document.getElementById('favorites').innerHTML = 'May'
document.getElementById('hometown').innerHTML = 'Per'

var nodes = document.getElementsByTagName('li');

for (var i = 0; i < nodes.length; i++) {
  nodes[i].className ='listitem';
};

var img = document.createElement('img');
img.src = 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wiktionary_small.svg/350px-Wiktionary_small.svg.png';
document.body.appendChild(img);