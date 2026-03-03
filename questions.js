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

Tabuada
let numero = parseInt(prompt("INSIRA UM NUMERO: "));
for(let i=0;i<=10;i++){
    let resultado = numero * i;
    console.log(numero + "x" + i + "= " + resultado );
}

Media
let nota = parseInt(prompt("INSIRA A PRIMEIRA NOTA: "));
let nota2 = parseInt(prompt("INSIRA A SEGUNDA NOTA: "));
let nota3 = parseInt(prompt("INSIRA A TERCEIRA NOTA: "));
let media = (nota + nota2 + nota3) /3
 if(media >= 7){
     console.log("Parabéns, você passou!! ");
 }else if(media >=5 && media < 7){
     console.log("Você está de recuperação");
 }else{
     console.log("Meus parabéns, você repitiu de ano !!")
 }

Contagem 
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}
Soma até digitar 0
let soma = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número (0 para parar):"));
    soma += numero;
} while (numero !== 0);

console.log("Soma total:", soma);

Contador de Numeros Positivos
let positivos = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));
    
    if (numero > 0) {
        positivos++;
    }
}

console.log("Quantidade de números positivos:", positivos);

Contador de Numeros Positivos
let positivos = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));
    
    if (numero > 0) {
        positivos++;
    }
}

console.log("Quantidade de números positivos:", positivos);

Sistema de Login
let usuarioCorreto = "admin";
let senhaCorreta = "1234";
let tentativas = 0;
let acesso = false;

while (tentativas < 3) {
    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        acesso = true;
        break;
    } else {
        tentativas++;
        console.log("Usuário ou senha incorretos.");
    }
}

if (acesso) {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}

Calculo Fatorial
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

if (numero >= 0) {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log("Fatorial de " + numero + " é: " + fatorial);
} else {
    console.log("Digite um número válido.");
}
