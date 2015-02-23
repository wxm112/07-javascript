$(document).ready(function () {
  // $('#makeSundae').on('click', function () {
  //   if ($('#flavour').val() === 'Chocolate') {
  //   console.log('i am making choco');
  //   } else {
  //   console.log('i am making caramel');
  //     }
  // });


  $('#makeSundae').on('click', function() {
    if ($('#flavour').val() !== 'Chocolate') {
      return;
    }

    console.log('I am making chocolate');
  });

  $('#makeSundae').on('click', function() {
    if ($('#flavour').val() !== 'Salted Caramel') {
      return;
    }

    console.log('I am making salted caramel');
  });
});



$(document).ready(function () {
  var addBehaviour = 0;

  $('#erratic').on('click', function() {
    if (addBehaviour % 2 === 0) {
      console.log('Even number');
    } else {
      console.log('odd number');
    }
    addBehaviour++;
  });
});


$(document).ready(function () {
  $('#toggle').on('click', function(){
    // if ($(this).hasClass('active')) {
    //   $(this).removeClass('active');
    // } else {
    //   $(this).addClass('active');
    // }
    $(this).toggleClass('active');
  });
});



