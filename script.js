function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
     const resultado = document.getElementById("resultado");

       resultado.className = "";

    if (!peso || !altura || altura <=0 || peso <=0) {
        alert("Preencha os campos corretamente!");
        return;
    }
    else if (altura <0.45 || peso <0.950){
        alert("Informações invalidas!");
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";
    let classeCor
    
    if (imc < 18.5){
        classificacao = "Abaixo do peso!";
        classeCor = "abaixo";
    } 
    else if (imc <24.9){
        classificacao = "Peso normal!";
        classeCor = "normal";
    }
    else if (imc <29.9){
        classificacao = "Sobrepeso!";
        classeCor = "sobrepeso";
    }
    else if (imc <34.9){
        classificacao = "Obesidade grau 1!";
        classeCor = "obesidade1";
    }
    else if (imc <39.9){
        classificacao = "Obesidade grau 2!";
        classeCor = "obesidade2";
    }
    else {
        classificacao = "Obesidade grau 3!";
        classeCor = "obesidade3";
    }
document.getElementById("resultado").textContent =
`🧮 Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;


resultado.classList.add(classeCor);


}