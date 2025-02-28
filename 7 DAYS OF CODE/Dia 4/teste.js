let limite = 10;
let numeroAleatorio = Math.floor((Math.random() * limite) + 1);
let chute;
let tentativa = 3;
console.log(numeroAleatorio);

alert(`Bem vindo ao jogo de advinhação, chute um numero aleatorio entre 0 e ${limite}, você tem ${tentativa} tentativas!`);

while (tentativa > 0) {

  chute = parseInt(prompt("Digite um numero"));

  if (chute === null || chute === "" || isNaN(chute)) {
    alert("Digite um valor valido!");
    continue;
  }

  if (chute === numeroAleatorio) {
    alert(`Parabens você acertou o numero aleatorio que era ${numeroAleatorio} com ${tentativa} tentativas restando!`);
    break;
  } else {
    tentativa--;
  }

  if (tentativa == 0) {
    alert("Game Over, você não acertou o numero aleatorio. :( ")
    break;
  } else if (chute < numeroAleatorio) {
    alert(`Numero errado, tente novamente, você tem ${tentativa} tentativas!, uma dica o numero aleatorio é maior > ;) `);

  } else if (chute > numeroAleatorio) {
    alert(`Numero errado, tente novamente, você tem ${tentativa} tentativas!, uma dica o numero aleatorio é menor < ;) `);
  }
}