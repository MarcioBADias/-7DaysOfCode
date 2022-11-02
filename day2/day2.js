var nome = document.getElementById("nome");
var idade = document.getElementById('idade');
var linguagem = document.getElementById('linguagem');
//var res = prompt()
var div1 = document.getElementById("div1")

function enviar() {
    if (nome == 0 || idade == 0 || linguagem == 0) {
        div1.innerHTML = `Preencha todos os campos acima e tente novamente.`;
        div1.style.color = 'red';
        div1.style.width = 'bold';
        div1.style.textAlign = 'center';
    }else{
        div1.innerHTML = `Olá <strong>${nome.value}</strong>, você tem <strong>${idade.value}</strong> anos e já está aprendendo <strong> ${linguagem.value}</strong>!`;

        var div2 = document.getElementById("div2");
        div2.innerHTML = `<p>Você gosta de estudar ${linguagem.value}? Responda com o número 1 para 
        <strong>Sim</strong> ou 2 para <strong>Não</strong>.</p>
        <input type="button" value="1" id="button1" onclick="clicarSim()">
        <input type="button" value="2" id="button2" onclick="clicarNao()">
        `
    }
      
}

function clicarSim() {
    var div3 = document.getElementById("div3");
    div2.innerHTML = `<strong>Muito bom! Continue estudando e você terá muito sucesso.</strong>` 
}

function clicarNao() {
    var div3 = document.getElementById("div3");
    div2.innerHTML = `<strong>Ahh que pena... Já tentou aprender outras linguagens?</strong>` 
    }

//if (res == 1) {
 //   div2.innerHTML = `Muito bom! Continue estudando e você terá muito sucesso.`
//}
//if (res == 2) {
 //   div2.innerHTML = `Ahh que pena... Já tentou aprender outras linguagens?`
//}
