function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    var resultado = document.getElementById("resultado");
    var situacao;
    if (media >= 6.0) {
        situacao = "Aprovado!";
        resultado.style.backgroundColor = "green";
    } else if (media >= 2.0 && media < 6.0) {
        situacao = "Recuperação!";
        resultado.style.backgroundColor = "blue";
    } else {
        situacao = "Reprovado!";
        resultado.style.backgroundColor = "red";
    }
    resultado.innerHTML = "A média do aluno " + nome + " é: " + media + " Situação: " + situacao;
}
