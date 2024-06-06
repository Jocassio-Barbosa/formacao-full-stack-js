let pessoa = {
  //isso é um objeto
  nome: "Jocassio",
  idade: 26,
  dizerOla() {
    //isso é um metodo ("uma função dentro de um objeto")
    console.log("Olá, Mundo! Meu Nome é " + this.nome); //this.nome é a forma de referencia ao proprio objeto
  },
};

pessoa.dizerOla(); //forma de chamar o metodo
