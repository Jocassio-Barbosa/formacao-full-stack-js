const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem - Vindo(a) ao cadastro de Imóveis!\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Listar Imóveis\n3. Sair"
  );
  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Infoma o nome do proprietário do imóvel:");
      imovel.quartos = prompt("Quantos quartos possui o imóvel?");
      imovel.banheiros = prompt("Quantos Banheiros possui o imóvel?");
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário.: " +
          imovel.proprietario +
          "\nQuartos.: " +
          imovel.quartos +
          "\nBanheiros.: " +
          imovel.banheiros +
          "\nPossui garagem.: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imoveis);
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;

    case "3":
      alert("Encerrando...");
    default:
      alert("Opção invalida!");
  }
} while (opcao !== "3");
