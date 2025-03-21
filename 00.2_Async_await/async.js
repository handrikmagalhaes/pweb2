//Forma primitiva
const divImagem = document.getElementById("images");

function primeiroDado() {
    setTimeout(() => {
        const img1 = document.createElement("img")
        img1.setAttribute("src", "sw0.jpg")
        img1.setAttribute("width","600px")
        img1.setAttribute("height","500px")
        img1.setAttribute("border-radius", "10px")
        img1.setAttribute("margin-left", "10px;");
        document.body.appendChild(img1)
    }, 1000);
}

function segundoDado() {
    setTimeout(() => {
        const img2 = document.createElement("img")
        img2.setAttribute("src", "sw1.jpg")
        img2.setAttribute("width","600px")
        img2.setAttribute("height","500px")
        img2.setAttribute("border-radius", "10px")
        img2.setAttribute("margin-left", "10px;");
        document.body.appendChild(img2)
    }, 5000);
}

function terceiroDado(){
    setTimeout(() => {
        const img3 = document.createElement("img")
        img3.setAttribute("src", "sw2.jpg")
        img3.setAttribute("width","600px")
        img3.setAttribute("height","500px")
        img3.setAttribute("border-radius", "10px")
        img3.setAttribute("margin-left", "10px;");
        document.body.appendChild(img3)
    }, 3000);
}

function recebeDados(){
    primeiroDado();
    segundoDado();
    terceiroDado();
}

recebeDados();


/*
// Usando Async
function primeiroDado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const img1 = document.createElement("img")
            img1.setAttribute("src", "sw0.jpg")
            img1.setAttribute("width","600px")
            img1.setAttribute("height","500px")
            img1.setAttribute("border-radius", "10px")
            img1.setAttribute("margin-left", "10px;");
            document.body.appendChild(img1)
        resolve();
    }, 1000);
    })
}

function segundoDado() {

    return new Promise((resolve) => {
        setTimeout(() => {
            const img2 = document.createElement("img")
            img2.setAttribute("src", "sw1.jpg")
            img2.setAttribute("width","600px")
            img2.setAttribute("height","500px")
            img2.setAttribute("border-radius", "10px")
            img2.setAttribute("margin-left", "10px;");
            document.body.appendChild(img2)
        resolve();
    }, 5000);
    })
}

function terceiroDado(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const img3 = document.createElement("img")
            img3.setAttribute("src", "sw2.jpg")
            img3.setAttribute("width","600px")
            img3.setAttribute("height","500px")
            img3.setAttribute("border-radius", "10px")
            img3.setAttribute("margin-left", "10px;");
            document.body.appendChild(img3)
        resolve();
    }, 3000);
    })
}

function recebeDados(){
    primeiroDado();
    segundoDado();
    terceiroDado();
}



recebeDados(); */

