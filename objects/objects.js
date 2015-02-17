var recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon','cumin','cocoa'],
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log('Ingredients:')
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}



var books = [
  {
    title: 'Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: true,
  },
  {
    title: 'Coming home',
    author: 'May Wang',
    alreadyRead: false,
  }
];



for (var i = 0; i < books.length; i++){
  var book = books[i];
  var desc = '"' + book.title + '" by' + book.author
  if (books[i].alreadyRead) {
    console.log('You already read ' + desc);
  } else {
    console.log('You still need to read ' + desc);
  }
}


favoriteMovie = {
  title: 'Big horo six',
  duration: 120,
  stars: ['Puff', 'Jacke', 'Living Sneezes'],
};

var printer = function(movie){
  var info = '';
  info += movie.title;
  info += ' lasts for ' + movie.duration + ' minutes.'
  info += ' Satars: ' + movie.stars.join(',');
  info += '.'
  console.log(info);
}

console.log(printer(favoriteMovie));




var number = prompt('Enter the first number:');
console.log('The first number is ' + number)
parseFloat(number)

















