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
  ;

}

function jogar() {
  document.getElementById("demo").innerHTML = "Status:  Hora de se divertir !!";
  document.getElementById('myButton2').className = 'formatg';
  document.getElementById('myButton1').className = 'formatr';
}


function ativar(botao) {
  var botao;
  if (botao === datepicker) {
  document.getElementById("myButtonte").className = "ativado";
  document.getElementById('myButtonhr').className = 'desativado';
  document.getElementById("d/h").innerHTML = "Escolha o dia";
  document.getElementById('timepicker').className = 'hidden';
  document.getElementById('datepicker').className = 'show';
  } else {
    document.getElementById("myButtonte").className = "desativado";
    document.getElementById('myButtonhr').className = 'ativado';
    document.getElementById("d/h").innerHTML = "Escolha a hora";
    document.getElementById('datepicker').className = 'hidden';
    document.getElementById('timepicker').className = 'show';
  }


}

