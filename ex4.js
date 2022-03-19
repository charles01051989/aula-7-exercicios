//Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.

const prompt = require('prompt-sync')();
//comando regex para verificar se existe nº dentro da string.
const regexNum = /[0-9]/;
//comando regex para verificar se há caracteres especiais.
const regexChar = /^[ 0-9a-zA-Z\b]+$/;
let passwordOk = "";

console.log("<<<<<<<<Digite o nome do usuário e senha>>>>>>>>");
console.log();
const userName = prompt("Digite o nome de usuário: ")
console.log();
console.log("A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.");
console.log();

for(let i = 0; passwordOk!="ok"; i++){
const password = prompt("Digite a sua senha: ")
console.log();
//verifica a qtd de caracteres.
if(password.length<8){
	console.log("A senha deve ter no mínimo 8 caracteres");
}
//o comando regex nesse caso retorna true se não conter nº dentro da string.
if(!regexNum.test(password)){
	console.log("A senha deve ter pelo menos um número");
}
//o comando regex nesse caso retorna true se conter caracter especial dentro da string.
if(regexChar.test(password)){
	console.log("A senha deve ter pelo menos um caracter especial");
}else{
	console.log("Senha inserida com sucesso");
	passwordOk = ("ok")
}
}
