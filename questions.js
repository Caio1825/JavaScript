/*Maior Idade
let idade = prompt("Dígite sua idade: ");;
if(idade >= 18){
    console.log("Você tem a idade apropriada")
}else{
    console.log("\nVocê não tem a idade apropriada pra entrar nesse site")
}

Impar ou Par
let numero = Number(prompt("Dígite seu número: "));
if(numero % 2==0){
    console.log(numero+" É par");
}else{
    console.log(numero+" É impar")
}

Calculadora Simples
let numero = parseInt(prompt("Digite seu primeiro número: "));
let numero2 = parseInt(prompt("Digite seu primeiro número: "));
let operacao = parseInt(prompt("Escolha sua operação: 1- soma, 2-menos, 3-divisao e 4-multiplicacao: "));
console.clear();
if(operacao == 1){
    let soma = numero + numero2;
    console.log("A soma do primeiro " + numero + (" mais o segundo ") + numero2 + " vai dar " + soma);
}else if(operacao == 2){
    let subtracao = numero - numero2;
    console.log("A subtracao do primeiro " + numero + (" mais o segundo ") + numero2 + " vai dar " + subtracao);
}else if(operacao == 3){
    let divisao = numero / numero2;
    console.log("A divisao do primeiro " + numero + (" mais o segundo ") + numero2 + " vai dar " + divisao);
}else{
    let multiplicacao = numero * numero2;
    console.log("A multiplicação do primeiro " + numero + (" mais o segundo ") + numero2 + " vai dar " + multiplicacao);
}
