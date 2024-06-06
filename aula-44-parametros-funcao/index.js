function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(5);

function criarUsuario(nome, email, senha, tipo = "adm") {
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipo: tipo,
  };
  console.log(usuario);
} //o parametro com valor padrão deve ser informado no final

criarUsuario("Jocassio", "joca@gmail.com", "1234");

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}
function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado(
  //chamada da funcão do jeito errado
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);
const dadosDoUsuario = {
  //objeto que vai receber os parametros da função usuario
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: "",
};
parametrosDoJeitoCerto(dadosDoUsuario); //chamada da função do jeito certo
