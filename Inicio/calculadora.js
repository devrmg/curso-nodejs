var nome = "Minha calculadora V1";

function soma(a,b){
    return a + b;
}
console.log(soma(20,300));

function mult(a,b){
    return a * b;
}
console.log(mult(5,2));

function sub(a,b){
    return a-b;
}
console.log(sub(50,2));

function div(a,b){
    return a/b;
}
console.log(div(5,2));

module.exports = {
    soma,
    mult,
    sub,
    div,
    nome
};