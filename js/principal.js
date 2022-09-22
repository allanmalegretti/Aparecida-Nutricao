var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var nome = paciente.querySelector(".info-nome").textContent;

// var tdPeso = paciente.querySelector(".info-peso");
// var peso = tdPeso.textContent;
var peso = paciente.querySelector(".info-peso").textContent;

// var tdAltura = paciente.querySelector(".info-altura");
// var altura = tdAltura.textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


// console.log(paciente);
// console.log(tdPeso);
// console.log("O paciente",nome);
// console.log("com peso de", peso, "Kgs");
// console.log("altura de", altura, "mts");
// console.log("e IMC", imc);
console.log("O paciente",nome,"com peso de", peso, "Kgs e altura de", altura, "mts tem IMC", imc);