// var liarray = document.querySelectorAll('li');

// for (var i = 0; i < liarray.length; i++) {
//   var link = liarray[i].children
//   var href = link[0].getAttribute('href');
//   var thumbnailUrl = youtube.generateThumbnailUrl(href);
//   var img = document.createElement('img');
//   img.setAttribute('src', thumbnailUrl);
//   liarray[i].appendChild(img);
//   }


// var links = document.querySelectorAll('a');

// for (var i = 0; i < links.length; i++) {
//   var link = links[i]
//   var href = link.getAttribute('href');
//   var thumbnailUrl = youtube.generateThumbnailUrl(href);
//   var img = document.createElement('img');
//   img.setAttribute('src', thumbnailUrl);
//   link.appendChild(img);
//   }


// $('a').each(function(i) {
//   var links = $('a');
//   var thumbnailUrl = youtube.generateThumbnailUrl(links[i].href)
//   var img = $("<img src='" + thumbnailUrl +"'>");
//   $(links[i]).append(img);
// });

var $links = $('a');

$links.each(function(i, elem) {
  var thumbnailUrl = youtube.generateThumbnailUrl(elem.href)
  $('<img>', {src: thumbnailUrl}).appendTo(elem);
});