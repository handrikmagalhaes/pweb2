//Carregando o módulo readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida? ', (answer) => {
    console.log(`Sua linguagem preferida é ${answer}`)
    readline.close();
})


