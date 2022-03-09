function converterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorRealEmDolar = valorEmDolarNumerico / 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O Resultado em Dolar é $" + valorRealEmDolar.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorRealEmEuro = valorEmEuroNumerico / 5.53;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Resultado em Euro é € " + valorRealEmEuro.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}