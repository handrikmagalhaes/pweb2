function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Isso aqui aparece durante o processamento")
            resolve()
        }, 1000)
    })
}


/*function segundaFuncao() {
    console.log('Iniciou')
    primeiraFuncao()
    console.log('Terminou')
}*/

 //função com Async
async function segundaFuncao() {
    console.log('Iniciou')
    await primeiraFuncao()
    console.log('Terminou')
}


segundaFuncao()