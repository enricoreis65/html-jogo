$( function() {
    $( "#datepicker" ).datepicker();
  } );
$(function(){
$('#timepicker').timepicker();});

function myFunction() {
    var x = document.getElementById("myTextarea").value;
    document.getElementById("myProgress").value = x;
  }