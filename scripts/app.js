

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




function clickButton() {
  var $numOne = $('#basic-num-1');
  var $numTwo = $('#basic-num-2');
  var $clickButton = $('#basic-calc');
$clickButton.click(function() {
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


  clickButton();


  /*$(document).ready(function() {
​
​
​
function basicCalc() {
  var numone = $('#basic-num-1');
  var numtwo = $('#basic-num-2');
  var calcnum = $('#basic-calc');
  calcnum.click(function() {
    if($("#basic-operation option:selected").html() === 'plus') {
      var sum = parseInt(numone.val()) + parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + sum);
    }
    else if($("#basic-operation option:selected").html() === 'minus') {
      var remainder = parseInt(numone.val()) - parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + remainder);
    }
    else if($("#basic-operation option:selected").html() === 'multiplied by') {
      var multiplied = parseInt(numone.val()) * parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + multiplied);
    }
    else if($("#basic-operation option:selected").html() === 'divided by') {
      var divided = parseInt(numone.val()) / parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + divided);
    }
  }
);}
​
​
basicCalc();
*/
