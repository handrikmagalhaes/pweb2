//Carregando o módulo minimist
const minimist = require('minimist')
const args = minimist(process.argv)
const operacao = args.operacao
let resultado = 0
switch(operacao){
    case "soma":
        args._.slice(2).forEach((valor) => {
            resultado += valor
        })
        break;
    case "subtracao":
        resultado = args._.slice(2)[0]*2      
        args._.slice(2).forEach((valor) => {
            resultado -= valor
        })
        break;
    case "multiplicacao":
        resultado = 1
        args._.slice(2).forEach((valor) => {
            resultado *= valor
        })
        break;
    case "divisao":
        resultado = 1      
        args._.slice(2).forEach((valor) => {
            resultado /= valor
        })
        break;


}
console.log(`O resultado da operação é: ${resultado}`)

