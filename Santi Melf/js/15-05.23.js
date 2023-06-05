let num= 545;
function ejemplo(params) {
    let inp = document.querySelector("#entrada");
    let valor = inp.value;
    let p = document.querySelector("#salida");
    let divImg = document.querySelector("#img");
    divImg.innerHTML = '<img src="../img/Traicionera.jpg" alt="error"/>'
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(inp);
    console.log(num);
}