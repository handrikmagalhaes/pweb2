const prompt = require('prompt-sync')();

console.log("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")
let opcao = prompt("Escolha sua opção: ")
let valores = prompt("Digite os valores separados por vírgula: ")

let resultado = 0
valores = valores.split(',')
switch (opcao){
    case "1":
        valores.forEach(element => {
            resultado += parseInt(element)
        });
        console.log(`O resultado da soma é ${resultado}`)
        break;
    case "2":
        resultado = parseInt(valores[0])*2
        valores.forEach(element => {
            resultado -= parseInt(element)
        });
        console.log(`O resultado da subtração é ${resultado}`)
        break;
    case "3":
        resultado = 1
        valores.forEach(element => {
            resultado *= parseInt(element)
        });
        console.log(`O resultado da Multiplicação é ${resultado}`)
        break;
    case "4":
        resultado = 1
        valores.forEach(element => {
            resultado /= parseInt(element)
        });
        console.log(`O resultado da Divisão é ${resultado}`)
        break;
    }    

