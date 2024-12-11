function insert(valor) {
  var numero = document.getElementById("visor").innerHTML;

  document.getElementById("visor").innerHTML = numero + valor;
}

function apagar() {
  document.getElementById("visor").innerHTML = "";
}

function voltar() {
  resultado = document.getElementById("visor").innerHTML;
  document.getElementById("visor").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  var resultado = document.getElementById("visor").innerHTML;
  document.getElementById("visor").innerHTML = eval(resultado);
}
