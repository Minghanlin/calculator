


$('#basic-calc').click(clickButton);

function clickButton(){
  var $numOne = $('numOne');
  var $numTwo = $('numTwo');
  if $('#basic-operation' > 'option value='+'') {
    var $addition = $('addition');
    $addition = $numOne + $numTwo;
    $('basic-answer-alert').print($addition);
  } else if $('#basic-operation' > 'option value='-'') {
    var $subtraction = $('subtraction');
    Ssubtraction = $numOne - $numTwo;
    $('basic-answer-alert').print($subtraction);
  } else if $('#basic-operation' > 'option value='*'') {
    var $multiplication = $('multiplication');
    $multiplication = $numOne * $numTwo;
    $('basic-answer-alert').print($multiplication);
  } else $('#basic-operation' > 'option value='/'') {
    var $division = $('division');
    $division = $numOne / $numTwo;
    $('basic-answer-alert').print($division);
  }
