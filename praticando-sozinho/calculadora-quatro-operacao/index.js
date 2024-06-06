let primeiroValor = parseFloat(prompt("Informe o 1° valor!"));
let segundoValor = parseFloat(prompt("Informe o 2º valor!"));

let soma = primeiroValor + segundoValor;
let subtracao = primeiroValor - segundoValor;
let divisao = primeiroValor / segundoValor;
let multiplicacao = primeiroValor * segundoValor;

alert(
  "Calculo das 4 operações basicas" +
    "\nSoma.: " +
    primeiroValor +
    " + " +
    segundoValor +
    " = " +
    soma +
    "\nSubtração.: " +
    primeiroValor +
    " - " +
    segundoValor +
    " = " +
    subtracao +
    "\nDivisão.: " +
    primeiroValor +
    " / " +
    segundoValor +
    " = " +
    divisao +
    "\nMultiplicação.: " +
    primeiroValor +
    " * " +
    segundoValor +
    " = " +
    multiplicacao
);
