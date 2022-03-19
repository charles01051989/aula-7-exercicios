//Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente

const prompt = require('prompt-sync')()
const numbersZeroAcem = [];
const numDraw = [];
//FORMA O ARRAY DE 100 ITENS
for(let i = 0; i < 101; i++){
    numbersZeroAcem.push(i);
    }
//SORTEIA OS 20 VALORES    
for(let i = 0; i < 20; i++){
    function randomNumberInterval(a, b){
        return Math.floor(Math.random()*(b-a+1))+a
        }
    //DEFINE O INTERVALO DE 0 A 100/ /ORDENA EM CRESCENTE
    numDraw.push(randomNumberInterval(0, 100));numDraw.sort((a, b) => a - b)
    }
//console.log(numbersZeroAcem);
console.log(`Os 20 números sorteados de 0 a 100 são\n
${numDraw}`);
