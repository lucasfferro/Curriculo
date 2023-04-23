function frutaResultado(){
    let elemento = document.getElementsByName('gender');
    let resultado = document.getElementById('result');
  
    for(let i = 0; i < elemento.length; i++){
    if(elemento[i].checked){
        let fruta = elemento[i].value;
        resultado.innerHTML = "Sua fruta favorita é: " + fruta;

    if (fruta === "Maçã") {
        resultado.style.color = "red";
      } else if (fruta === "Abacate") {
        resultado.style.color = "green";
      } else if (fruta === "Laranja") {
        resultado.style.color = "orange";
      }
} 
}
}
