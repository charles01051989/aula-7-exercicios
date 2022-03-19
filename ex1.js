/*Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido;
Todos os números ímpares do 0 ao número escolhido.*/

const prompt = require('prompt-sync')();
const numeros = prompt("Digite algum número ")
const listaPar = []
const listaImpar = []
for (let i = 0; i < numeros; i++){
    if(i%2==0){
        listaPar.push(i);
    }else{
        listaImpar.push(i)
    }
}
console.log(`Números Par ${listaPar}
Números Impar ${listaImpar}`);
