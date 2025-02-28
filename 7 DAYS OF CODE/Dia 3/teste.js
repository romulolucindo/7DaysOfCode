//Selecionar Back ou Front
let area = prompt("Escolha uma area de atuação: " + 1 + " Para Back-End ou " + 2 + " Para Front-End!!");
let linguagem;

if (area == 1) {
  alert("Você selecionou Back-End!");
  alert("Back-End: Cuida da lógica, bancos de dados e servidores, garantindo que tudo funcione corretamente por trás da interface.");
  // Selecionar linguagem
  let linguagem = prompt("Qual linguagem você quer aprender? " + 1 + " Para C# ou " + 2 + " Para Java!");
  if (linguagem == 1) {
    alert("Você selecionou C#!");
    alert("C#: Usado principalmente com .NET para criar aplicativos web, jogos (com Unity) e sistemas corporativos.");
  } else if (linguagem == 2) {
    alert("Você selecionou Java!");
    alert("Java: Muito utilizado para aplicações web, Android e sistemas robustos de empresas.");
  } else {
    alert("Digite uma opção valida!");
  }
} else if (area == 2) {
  alert("Você selecionou Front-End!");
  alert("Front-End: Responsável pela interface visual e experiência do usuário em sites e aplicativos. Trabalha com HTML, CSS e JavaScript.");

  // Selecionar linguagem
  let linguagem = prompt("Qual linguagem você quer aprender? " + 1 + " Para REACT ou " + 2 + " Para VUE!");
  if (linguagem == 1) {
    alert("Você selecionou REACT!");
    alert("React: Biblioteca JavaScript para criar interfaces dinâmicas e interativas.")
  } else if (linguagem == 2) {
    alert("Você selecionou VUE!");
    alert("Vue: Framework JavaScript simples e flexível para criar interfaces web modernas.")
  } else {
    alert("Digite uma opção valida!")
  }
} else {
  alert("Digite uma opção valida!!")
}

//Selecionar Especialista ou FullStack
let especialista = prompt("Você quer se Especializar em Back-End digite " + 1 + " ou digite " + 2 + " para ser FullStack!");


if (especialista == 1) {
  alert("Você selecionou Especializar em Back-End");
  alert("Ótima escolha! Um especialista em Back-End foca no desenvolvimento de servidores, bancos de dados e regras de negócio das aplicações. Continue se aprofundando para dominar APIs, segurança e otimização!");
} else if (especialista == 2) {
  alert("Você selecionou ser FullStack");
  alert("Que legal! Um desenvolvedor Fullstack domina tanto o Back-End quanto o Front-End, podendo construir aplicações completas do zero. Esse é um caminho versátil e muito valorizado no mercado!");
} else { alert("Digite uma opção valida!") }


let pergunta = true;

while (pergunta) {
  alert("Você quer aprender outra tecnologia além da nossa grade curricular?");
  let resposta = prompt("Digite 1 para sim e 2 para não");

  if (resposta == "1") {
    prompt("Qual tecnologia que você gostaria de aprender?");
  } else if (resposta == "2") {
    alert("Não?, Bons estudos então!!");
    pergunta = false;
  } else {
    alert("Digite um valor valido entre 1 e 2 pf!!");
  }
} 