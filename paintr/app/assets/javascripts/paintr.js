$(document).ready(function () {
  var addPixel = function () {
    var $pixel = $('<div/>').addClass('pixel');
    $pixel.appendTo('#canvas');
  }
  
  var PIXEL_COUNT = 10000;
  for (var i = 0; i < PIXEL_COUNT; i++) {
    addPixel();
  };

  // Event delegatioin for efficiency.
  $('#canvas').on('mouseover','.pixel', function(event) {
    var currentColor = $('.selected').css('background-color');
    if (event.ctrlKey === true) {
      $(this).css('background-color', currentColor);
    };
  });

  var addColor = function () {
    var color = $('#color').val();

    var $box = $('<div/>').addClass('box');
    $box.css('background-color', color);

    $box.prependTo('#colors');

    $('#color').focus();

  };

  $('#add_color').on('click', addColor);

  var resetPalette = function () {
    $('#colors').empty();
    $('.selected').css('background-color','white');
  };

  $('#clear_palette').on('click', resetPalette);

  var setColor = function () {
    var color = $(this).css('background-color');
    $('.selected').css('background-color', color);
  };
  // Event delegation:
  $('#colors').on('click','.box', setColor);

});



