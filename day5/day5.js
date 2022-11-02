let item = document.getElementById('item');
let cat = document.getElementById('cat');
let lista = document.getElementById('lista');

let vetores = [];

let res = document.getElementById('res');

function inLista(v){
    if(vetores.indexOf(v) != -1){
        return true;
    }else{
        return false;
    }
}

function add(){
    if (item.value == 0 || cat.value == 0){
        window.alert('Insira um item ou selecione uma categoria para adicionar às compras!')
    }else if (cat.value == inLista(cat.value)){
        let (cat.value) = [];
        cat.push(item.value);
        res.innerHTML = `${item.value}:`
    }
}