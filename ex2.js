/*Crie um programa em que o usuário escolha a quantidade de notas serem entradas e 
depois peça e armazene essa quantidade de notas em um array. 
Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).*/

const prompt = require('prompt-sync')();
const amountGrade = +prompt("Quantas notas serão lançadas? ")
const grade = [];
approved = 0;
disapproved = 0;
recovery = 0;
for(let i = 1; i < amountGrade+1; i++){
    let getinGrade = +prompt(`Digite a ${i}ª nota: `);
    grade.push(getinGrade);
if(getinGrade>=7){
    approved++    
}else if(getinGrade>=5&&getinGrade<7){
    recovery++
}else if (getinGrade<5){
    disapproved++
    }
}
console.log(`${approved} APROVADOS
${recovery} EM RECUPERAÇÃO
${disapproved} REPROVADOS`);

average = 0
for(let i = 0; i < grade.length; i++){
    average += grade[i]/amountGrade
}


/*
if(average>5&&average<7){
    console.log(`${recovery} estudantes em RECUPERAÇÃO`);
    recovery++
}
if(average<5){
    console.log(`${disapproved} estudantes REPROVADOS`);
    disapproved++
}
*/

