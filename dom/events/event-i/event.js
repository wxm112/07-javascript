console.log("Hello world", document.body);

var button = document.getElementById('lib-button');

function onClick(even) {
  var noun = document.getElementById('noun').value;
  var adjective = document.getElementById('adjective').value;
  var person = document.getElementById('person').value;
  alert(person + " really likes " + adjective + " " + noun);
}

button.addEventListener('click', onClick);