var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

var campoAtual = "n1"; 
 

function somar(){
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}

function subtrair(){
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}

function multiplicacao(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
} // Chave corrigida aqui

function divisao(){
    resultado.innerHTML = Number(n1.value) / Number(n2.value);
}

function areaquadrado(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}


function areatriangulo(){
    resultado.innerHTML = (Number(n1.value) * Number(n2.value)) / 2;
}

function porcentagem(){
    resultado.innerHTML = (Number(n1.value) * Number(n2.value)) / 100;
}
// Funcoes adicionais
function inserir(valor) {
    document.getElementById(campoAtual).value += valor;
}

function segundoNumero() {
    campoAtual = "n2";
}

function PrimeiroNumero() {
    campoAtual = "n1";
}

function limpar() {
    n1.value = "";
    n2.value = "";
    resultado.innerHTML = ""; // Limpa também o resultado visual
}