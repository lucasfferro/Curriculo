function sortear() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("sorteado").innerHTML = sorteado;
}
