// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com double click");
//         this.remove();
//     })
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode; // TD = paciente = remover
    // paiDoAlvo.remove();

    event.target.parentNode.remove();
})