let listaCompras = {};

alert("Bem-Vindo a lista de compras!")
let pergunta = parseInt(prompt("Deseja adicionar algum item a lista de compras? 1 = Sim ou 2 = Não!"));

while (pergunta !== 1 && pergunta !== 2) {
  alert(`Valor Incorreto!! \nUse: \n1 para Sim\n2 para Não`);
  pergunta = parseInt(prompt("Deseja adicionar algum item a lista de compras? 1 = Sim ou 2 = Não!"));
}

while (pergunta === 1) {

  let item = prompt("Digite o item que você quer adicionar a lista:");
  let categoria = prompt("Digite a qual categoria ele pertence:");

  if (!(categoria in listaCompras)) {
    listaCompras[categoria] = [];
  }
  listaCompras[categoria].push(item);

  pergunta = parseInt(prompt("Tem algum item que você deseja adicionar? 1 = Sim ou 2 = Não!"))
}

let listaFormatada = "A Sua lista é: \n";

for (let categoria in listaCompras) {
  listaFormatada += `${categoria}: ${listaCompras[categoria].join("\n")}\n\n`;
}

alert(listaFormatada);