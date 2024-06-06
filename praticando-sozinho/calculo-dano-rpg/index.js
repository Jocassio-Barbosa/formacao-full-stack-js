/*Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de
pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:*/
let nomePersonagemAtaque = prompt("Digite o nome do personagem de ataque");
let poderAtaque = parseFloat(prompt("Digite o poder de ataque do personagem.: " + nomePersonagemAtaque));

let nomePersonagemDefesa = prompt("Informe o nome do personagem de defesa");
let pontosDeVida = parseFloat(prompt("Informe a qtd pontos de vida do personagem.: " + nomePersonagemDefesa));
let poderDefesa = parseFloat(prompt("Informe o pode de defesa do personagem.: " + nomePersonagemDefesa));
let possuiEscudo = prompt("O Personagem.: " + nomePersonagemDefesa + " possui um escudo? (S/N)");

/*Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a
diferença entre o ataque e a defesa.*/
let danoCausado = "0";

if (poderAtaque > poderDefesa && possuiEscudo === "N") {
  danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && possuiEscudo === "S") {
  danoCausado = (poderAtaque - poderDefesa) / 2;
} else if (poderAtaque <= poderDefesa) {
  danoCausado = "0";
}

alert(nomePersonagemAtaque + " causou " + danoCausado + " pontos de dano em " + nomePersonagemDefesa)
alert(
  nomePersonagemAtaque + "\nPoder de ataque: " + poderAtaque + "\n\n" +
  nomePersonagemDefesa + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDefesa + "\nPossui escudo: " + possuiEscudo
)