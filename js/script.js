$( function() {
    $( "#datepicker" ).datepicker();
  } );
  // fuuncao que faz as datas funcionaram
$(function(){
$('#timepicker').timepicker();});
// funcao que fas=z as horas funcionaram 



function estudar() {
  document.getElementById("demo").innerHTML = "Status:  Se concentre hora de estudar";
  document.getElementById('myButton1').className = 'formatg';
  document.getElementById('myButton2').className = 'formatr';
  

}
// troca a cor das opcoes

function jogar() {
  document.getElementById("demo").innerHTML = "Status:  Hora de se divertir !!";
  document.getElementById('myButton2').className = 'formatg';
  document.getElementById('myButton1').className = 'formatr';
}
// troca a cor das opcoes

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
// troca o conteudo da pagina ps deu um trampo pra fazer
