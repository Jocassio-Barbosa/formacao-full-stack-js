let nomeVeiculo1 = prompt("Informe o nome do 1º Veículo!");
let velVeiculo1 = parseFloat(prompt("Informe a velocidade do 1° Veículo!"));

let nomeVeiculo2 = prompt("Informe o nome do 2º Veículo!");
let velVeiculo2 = parseFloat(prompt("Informe a velocidade do 2° Veículo!"));

if (velVeiculo1 > velVeiculo2) {
  alert(
    "Veículo.: " +
      nomeVeiculo1 +
      " Velocidade.: " +
      velVeiculo1 +
      "\nVeículo.: " +
      nomeVeiculo2 +
      " Velocidade.: " +
      velVeiculo2 +
      "\nVeículo.: " +
      nomeVeiculo1 +
      " é mais rápido!"
  );
} else if (velVeiculo2 > velVeiculo1) {
  alert(
    "Veículo.: " +
      nomeVeiculo1 +
      " Velocidade.: " +
      velVeiculo1 +
      "\nVeículo.: " +
      nomeVeiculo2 +
      " Velocidade.: " +
      velVeiculo2 +
      "\nVeículo.: " +
      nomeVeiculo2 +
      " é mais rápido!"
  );
} else {
  alert(
    "Veículo.: " +
      nomeVeiculo1 +
      " Velocidade.: " +
      velVeiculo1 +
      "\nVeículo.: " +
      nomeVeiculo2 +
      " Velocidade.: " +
      velVeiculo2 +
      "\nVeículo.: " +
      " a velocidade dos veículos são iguais!"
  );
}
