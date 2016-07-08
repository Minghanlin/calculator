

/*var calculator = {
  numOne: 0,
  numTwo: 0,
  operator: "",
  result: 0,
  getValue1: function() {

  },
  getValue2: function() {

  }

};

$(document).ready(function() {
  $('#basic-calc').click.(function() {

  });
});



});*/




function basicButton() {
  var $numOne = $('#basic-num-1');
  var $numTwo = $('#basic-num-2');
  var $basicButton = $('#basic-calc');
$basicButton.click(function() {
    if($("#basic-operation option:selected").html() === 'plus') {
    var sum = parseInt($numOne.val()) + parseInt($numTwo.val());
    $('#basic-answer-alert').html("The Answer is " + sum);
  } else if($("#basic-operation option:selected").html() === 'minus') {
  var subtract = parseInt($numOne.val()) - parseInt($numTwo.val());
  $('#basic-answer-alert').html("The Answer is " + subtract);
} else if($("#basic-operation option:selected").html() === 'multiplied by') {
var multiplied = parseInt($numOne.val()) * parseInt($numTwo.val());
$('#basic-answer-alert').html("The Answer is " + multiplied);
} else if($("#basic-operation option:selected").html() === 'divided by') {
var divided = parseInt($numOne.val()) / parseInt($numTwo.val());
$('#basic-answer-alert').html("The Answer is " + divided);
}

});
}

basicButton();

function tripButton() {
  var $distance = $('#trip-distance');
  var $mpg = $('#trip-mpg');
  var $costgallon = $('#trip-cost');
  var $speed = $('#trip-speed');
  var $tripButton = $('#trip-calc');
$tripButton.click(function() {
  if(parseInt($speed.val()) < 60) {
    var tripCost1 = parseFloat($distance.val()) / parseFloat($mpg.val()) * parseFloat($costgallon.val());
    $('#trip-answer-alert').html("The trip cost is " + tripCost1);
  } else if(parseInt($speed.val()) >= 60) {
    var tripCost2 = parseFloat($distance.val()) / ((parseFloat($mpg.val()) - (parseFloat($speed.val()) - 60) * 2)) * parseFloat($costgallon.val());
    $('#trip-answer-alert').html("The trip cost is " + tripCost2);
  }


});
}

tripButton();


function bmiButton() {
  var $mass = $('#bmi-mass');
  var $height = $('#bmi-height');
  var $bmiButton = $('#bmi-calc');
$bmiButton.click(function() {
  var bmi = parseFloat($mass.val()) / ((parseFloat($height.val()) * parseFloat($height.val())) * 703);
  $('#bmi-answer-alert').html("BMI is " + bmi);

});
}


bmiButton();

function loanButton() {
  var $loan = $('#mortgage-loan');
  var $apr = $('#mortgage-apr');
  var $term = $('#mortgage-term');
  var $loanButton = $('#mortgage-calc');
$loanButton.click(function() {
  var mortgage = (parseFloat($loan.val()) * parseFloat($apr.val()) * ((1 + parseFloat($apr.val())) ^ parseFloat($term.val()))) / (((1 + parseFloat($apr.val())) ^ parseFloat($term.val())) - 1);
  $('#mortgage-answer-alert').html("Mortgage is " + mortgage);


});
}

loanButton();


/*The BMI calculator should compute a body mass index, with the formula ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
The mortgage calculator formula should compute the monthly cost of a loan, with the formula loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1)
When a user presses a "calculate button", the result should appear in the green div for the appropriate calculator section. The elements where the result should be displayed have an ID in the form #XXX-answer.
*/
