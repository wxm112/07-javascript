console.log('Hello world', document.body);

var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];


for (var i = 0;  i < books.length; i++) {
  var pelement = document.createElement('p');
  pelement.innerHTML = "<b>"+ books[i].title + "</b>, " + books[i].author; 
  document.body.appendChild(pelement);
};

for (var i = 0;  i < books.length; i++) {
  var lielement = document.createElement('li');
  lielement.innerHTML = books[i].title + ", " + books[i].author; 
  document.body.appendChild(lielement);
};

for (var i = 0;  i < books.length; i++) {
  books[i].URL = '';
};

books[0].URL= "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wiktionary_small.svg/350px-Wiktionary_small.svg.png";

books[1].URL= "https://pbs.twimg.com/profile_images/604644048/sign051.gif";

for (var i = 0;  i < books.length; i++) {
  var img = document.createElement('img');
  img.src = books[i].URL
  document.body.appendChild(img);
};

for (var i = 0;  i < books.length; i++) {
  var lielement = document.createElement('li'); 
  lielement.innerHTML = books[i].title + ", " + books[i].author; 
  if (books[i].alreadyRead === true){
    lielement.className = 'read';
  } else {
    lielement.className = 'unread'; 
  }
  document.body.appendChild(lielement);
};












