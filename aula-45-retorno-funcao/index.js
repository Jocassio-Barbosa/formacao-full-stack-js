function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);

console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome, //nome: nome
    preco, //preco: preco
    estoque: 1,
  };
  return produto;
}

const notebook = criarProduto("notebook intel core i3 8gb", 2500);

console.log(notebook);

// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo!";
  console.log(texto);
}
console.log(olaMundo());

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maioridade(20));
console.log(maioridade(13));
