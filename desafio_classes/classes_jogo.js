// Definindo a classe Heroi
class Heroi {
    // Definindo o construtor da classe
    constructor(nome, idade, tipo) {
      // Atribuindo os valores dos parâmetros às propriedades da classe
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Definindo o método atacar
    atacar() {
      // Mapeando os tipos de ataques aos seus respectivos métodos de ataque
      const ataques = {
        "mago": "o mago atacou usando magia",
        "guerreiro": "o guerreiro atacou usando espada",
        "monge": "o monge atacou usando artes marciais",
        "ninja": "o ninja atacou usando shuriken"
      };
  
      // Verificando se o tipo de ataque existe no objeto ataques
      if (ataques[this.tipo]) {
        // Exibindo a mensagem correspondente ao tipo de ataque
        console.log(ataques[this.tipo]);
      } else {
        // Exibindo uma mensagem de erro para um tipo inválido
        console.log("Tipo de ataque inválido");
      }
    }
}

// Criando um array de objetos da classe Heroi
let herois = [
    new Heroi("Arthur", 25, "guerreiro"),
    new Heroi("Merlin", 120, "mago"),
    new Heroi("Lancelot", 30, "monge"),
    new Heroi("Ninjago", 35, "ninja")
];

// Usando um laço for para fazer cada herói atacar
for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}
