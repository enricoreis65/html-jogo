$( function() {
    $( "#datepicker" ).datepicker();
  } );
$(function(){
$('#timepicker').timepicker();});

function myFunction() {
    var x = document.getElementById("myTextarea").value;
    document.getElementById("myProgress").value = x;
  }


function estudar() {
  document.getElementById("demo").innerHTML = "Status:  Se concentre hora de estudar";
  document.getElementById('myButton1').className = 'formatg';
  document.getElementById('myButton2').className = 'formatr';
  btn.setBackground(Color.BLACK);

}

function jogar() {
  document.getElementById("demo").innerHTML = "Status:  Hora de se divertir !!";
  document.getElementById('myButton2').className = 'formatg';
  document.getElementById('myButton1').className = 'formatr';
}
