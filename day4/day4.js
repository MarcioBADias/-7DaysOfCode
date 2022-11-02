

let res = document.getElementById('div1'); 
let tentativas = 2;
let acerto = Math.floor((Math.random() * 11) );

function chute(n) {  
    let chute = document.getElementById('button');
    chute = n;
    if (n == acerto) {
        document.getElementById('resfinal').style.fontSize = '30px';
        resfinal.innerHTML = `<p>Parabens você <strong>ACERTOU!</strong></p> O numéro secreto era ${acerto}.`
        res.innerHTML = ` `
    } else if (tentativas < 1) {
        document.getElementById('resfinal').style.fontSize = '30px';
        resfinal.innerHTML = `<p>Não foi dessa vez, suas tentativas <strong>se esgotaram!</strong></p> O numéro secreto era ${acerto}.`
        res.innerHTML = ` ` 
     
    }else {
        res.innerHTML = `Escolha errada, você tem mais <strong> ${tentativas} tentativas.</strong>`;
        tentativas --;   
                    
    } 
    
    
              
}

/*Falta por a condição que limita as tentativas em 3, que por fim em caso de fracasso
no jogo ele imprime o numero secreto.*/