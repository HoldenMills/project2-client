


$(document).ready(function() {

  var box = ['','','','','','','','',''];

  var lastSelected = 'X';

  $( "#profile").on( "submit", function(event) {

    var elementSelected = event.target;

    var cellNumberClicked = $(elementSelected).data('cell');

    console.log("click" + cellNumberClicked);

    if(lastSelected === 'X') {
      $(elementSelected).html('X');
      getWinner(lastSelected);
        lastSelected = 'O';
        //Step 5: add the X or O to boxes
        box[cellNumberClicked] = 'X';
    }
    //If previous element was O then return X
    else {
      $(elementSelected).html('O');
      getWinner(lastSelected);
        lastSelected = 'X';
        box[cellNumberClicked] = 'O';
