var nome = prompt("qual seu nome?");
var idade = prompt("quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");
//var res = prompt()
var div1 = document.getElementById("div1")

div1.innerHTML = `Olá <strong>${nome}</strong>, você tem <strong>${idade}</strong> anos e já está aprendendo <strong> ${linguagem}</strong>!`;

var div2 = document.getElementById("div2");
div2.innerHTML = `Você gosta de estudar ${linguagem}? Responda com o número 1 para <strong>Sim</strong> ou 2 para <strong>Não</strong>.`

function clicarSim() {
    var div3 = document.getElementById("div3");
    div3.innerHTML = `Muito bom! Continue estudando e você terá muito sucesso.` 
}

function clicarNao() {
    var div3 = document.getElementById("div3");
    div3.innerHTML = `Ahh que pena... Já tentou aprender outras linguagens?` 
}

//if (res == 1) {
 //   div2.innerHTML = `Muito bom! Continue estudando e você terá muito sucesso.`
//}
//if (res == 2) {
 //   div2.innerHTML = `Ahh que pena... Já tentou aprender outras linguagens?`
//}
