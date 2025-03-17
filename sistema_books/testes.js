var cryptojs = require("crypto-js");
/*fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));*/

const data = Date.now()
const apikey = "dcd9a77d12f2f9511b7221052a138658"
const privateKey = "7647fa0306e9f938a967bf8253d31e4c7aa330fd"
const myHash = cryptojs.MD5(`${data}${privateKey}${apikey}`);

fetch(`http://gateway.marvel.com/v1/public/characters?limit=50&ts=${data}&apikey=${apikey}&hash=${myHash.toString()}`)
.then(response => response.json())
.then(data => {
    console.log(data.data.results)
})
.catch(response => console.log(response))