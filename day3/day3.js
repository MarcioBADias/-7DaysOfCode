function step1() {
    let escolha = document.getElementById('dev').value;
    let res = document.getElementById('res');
    let res1 = document.getElementById('div1');
    let step = document.getElementById('step');
    
    if (escolha === 'Front-end') {
        res.innerHTML = `Que bom que escolheu <strong>${escolha}</strong>! `
                
        res1.innerHTML = `
        <legend> No <strong>${escolha}</strong> qual tecnologia deseja aprender? </legend>
        <select name="dev" id="dev">
            <option></option>
            <option>React</option>
            <option>Vue</option>
        </select>
        `;

        step.setAttribute('onclick', 'step2()')
        
        
    } else if (escolha === 'Back-end') {
        res.innerHTML = `Que bom que escolheu <strong>${escolha}</strong>! `
                
        res1.innerHTML = `
        <legend> No <strong>${escolha}</strong> qual tecnologia deseja aprender? </legend>
        <select name="dev" id="dev">
            <option></option>
            <option>C#</option>
            <option>Java</option>
        </select>
        `;

        step.setAttribute('onclick', 'step3()')
        
    }   

}

function step2() { //VUE ou React
    let escolha = document.getElementById('dev').value;
    let res1 = document.getElementById('div1');
    let res2 = document.getElementById('div2');
    let step = document.getElementById('step');
    
    if (escolha === 'Vue') {
        res1.innerHTML = `O <strong>${escolha}</strong>, é um framework progressivo para a 
        construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue 
        foi projetado desde sua concepção para ser adotável incrementalmente.
        
        `
                
        res2.innerHTML = `
        <p>
        <legend> Seu próximo passo será determitar como se aperfeiçoar com uma das duas opções: </legend>
        </p>
        <input type="button" value="Se especialiar na área que escolheu até aqui." id="op1" onclick="especializacao('1')" class="opcoes">
        <input type="button" value="Seguir se desenvolvento para se tornar Fullstack." id="op2" onclick="especializacao('2')" class="opcoes">
        </select>
        `;

        step.setAttribute('onclick', 'step4()')
         
    } else if (escolha === 'React') {
        res1.innerHTML = `O <strong>${escolha}</strong>, é a biblioteca mais popular do JavaScript e é 
        usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o 
        usuário adicionar comandos usando um novo método de renderizar sites. Os componentes dessa 
        ferramenta foram desenvolvidos pelo Facebook. 
        `
                
        res2.innerHTML = `
        <p>
        <legend> Seu próximo passo será determitar como se aperfeiçoar com uma das duas opções: </legend>
        </p>
        <input type="button" value="Se especialiar na área que escolheu até aqui." id="op1" onclick="especializacao('1')" class="opcoes">
        <input type="button" value="Seguir se desenvolvento para se tornar Fullstack." id="op2" onclick="especializacao('2')" class="opcoes">
        </select>
        `;

        step.setAttribute('onclick', 'step4()')
        
    }   

}

function step3() { //C# ou Java
    let escolha = document.getElementById('dev').value;
    let res1 = document.getElementById('div1');
    let res2 = document.getElementById('div2');
    let step = document.getElementById('step');
    
    if (escolha === 'C#') {
        res1.innerHTML = `O <strong>${escolha}</strong>, é uma linguagem de programação, 
        multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma 
        .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências 
        de outras linguagens de programação, como Object Pascal e, principalmente, Java.  
        `
                
        res2.innerHTML = `
        <p>
        <legend> Seu próximo passo será determitar como se aperfeiçoar com uma das duas opções: </legend>
        </p>
        <input type="button" value="Se especialiar na área que escolheu até aqui." id="op1" onclick="especializacao('1')" class="opcoes">
        <input type="button" value="Seguir se desenvolvento para se tornar Fullstack." id="op2" onclick="especializacao('2')" class="opcoes">
        </select>
        `;

        step.setAttribute('onclick', 'step4()')
        
        
    } else if (escolha === 'Java') {
        res1.innerHTML = `O <strong>${escolha}</strong>, é uma linguagem de programação e 
        plataforma de computação liberada pela primeira vez pela Sun Microsystems em 1995. De um 
        início humilde, ela evoluiu para uma grande participação no mundo digital dos dias atuais, 
        oferecendo a plataforma confiável na qual muitos serviços e aplicativos são desenvolvidos.
        `
                
        res2.innerHTML = `
        <p>
        <legend> Seu próximo passo será determitar como se aperfeiçoar com uma das duas opções: </legend>
        </p>
        <input type="button" value="Se especialiar na área que escolheu até aqui." id="op1" onclick="especializacao('1')" class="opcoes">
        <input type="button" value="Seguir se desenvolvento para se tornar Fullstack." id="op2" onclick="especializacao('2')" class="opcoes">
        </select>
        `;

        step.setAttribute('onclick', 'step4()')
        
    }   

}

function especializacao(n) {
    let result1 = document.getElementById('op1');
    let result2 = document.getElementById('op2');
    let res2 = document.getElementById('div2');
    let res4 = document.getElementById('div4');
    if (n == 1) {
        res2.innerHTML = `
        Se especializar pode te dar mais poder de resolução para trabalhos maiores onde no Front-End deve se aprimorar em linguagens e recursos que vão tornar a interface com o usuário clara e intuitiva, enquanto o Back-End desenvolve os recursos que definem o negócio para o qual o sistema foi idealizado.
        `;
        result1.setAttribute('value', ' ');
        result2.setAttribute('value', ' ');
    }else if (n == 2){
        res2.innerHTML = `
        Os desenvolvedores full stack, ou full stack developers , são profissionais multifuncionais, que entendem de diferentes tecnologias voltadas ao desenvolvimento de software. As principais áreas, ou camadas, são: back-end, front-end, banco de dados , devops e mobile .
        `;
        result1.setAttribute('value', ' ');
        result2.setAttribute('value',' ');

    }
}
   
function step4() {
    let res5 = document.getElementById('div5');
    let res6 = document.getElementById('div6');

    res5.innerHTML = `
    <p>
    <legend> Para finalizar nos diga quais são as tecnilogias que você gostaria de se especializar?</legend>
    </p>`;
    res6.innerHTML = `
    <input type="text" id='texttec'>
    <input type="submit" value="Inserir" id="inserir" onclick="adcionar()">
    
    `
    step.setAttribute('value', ' ')
  
}

function adcionar() {
    let item = document.getElementById('texttec');
    let res5 = document.getElementById('div5');

    if(item.value == 0){
        window.alert('Insira um item na área tecnologia.')
    }else {
        res5.innerHTML += ` ${item.value} `;
        res5.style.color(red);
    }

}
