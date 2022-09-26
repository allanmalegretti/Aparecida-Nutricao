var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdNome = paciente.querySelector(".info-nome");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var nome = tdNome.textContent;
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura Inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}