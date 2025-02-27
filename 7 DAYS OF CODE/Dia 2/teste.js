// - Qual o seu nome?
let nome = prompt("Qual o seu nome?");
// - Quantos anos você tem?
let idade = parseInt(prompt("Quantos anos você tem?"));
// - Qual linguagem de programação você está estudando?
let linguagem = prompt("Qual linguagem de programação você está estudando?");
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)


let pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (pergunta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (pergunta == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  alert("Digite somente 1 para sim e 2 para não pf!!");
}