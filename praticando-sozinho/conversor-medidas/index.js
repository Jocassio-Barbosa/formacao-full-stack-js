const medida = parseFloat(prompt("Conversor de Medidas!\nInforme o valor em metros."));

const unidade = parseFloat(prompt("Escolha uma das alternativas a seguir!\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)"));

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
  default:
    alert("Opção Invalida escolha um valor entre (1 e 6)!");
    break;

}