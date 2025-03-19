//Carregando o módulo minimist
const minimist = require('minimist')
const args = minimist(process.argv)
console.log(args.nome)
