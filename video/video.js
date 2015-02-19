var liarray = document.querySelectorAll('li');

for (var i = 0; i < liarray.length; i++) {
  var link = liarray[i].children
  var href = link[0].getAttribute('href');
  var thumbnailUrl = youtube.generateThumbnailUrl(href);
  var img = document.createElement('img');
  img.setAttribute('src', thumbnailUrl);
  liarray[i].appendChild(img);
  }
