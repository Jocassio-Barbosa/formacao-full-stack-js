function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a Base do Triângulo.:"));
  const altura = parseFloat(prompt("Informe a Altura do Triângulo.:"));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a Base do Retangulo.:"));
  const altura = parseFloat(prompt("Informe a Altura do Retangulo.:"));
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado.:"));
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio.:"));
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio.:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio.:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirulo() {
  const raio = parseFloat(prompt("Informe o raio do círculo.:"));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;
    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirulo();
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida");
    }
    if (resultado) {
      alert("Resultado.: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
