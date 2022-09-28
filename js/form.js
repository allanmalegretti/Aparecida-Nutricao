var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // Extraindo informacoes do paciente do formulario
    var paciente = obtemPacienteDoFormulario(form);

    // cia a td do paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
    // if(!validaPaciente(paciente)){

        exibeMensagensDeErro(erros);

        // var mensagemErro = document.querySelector("#mensagem-erro");
        // mensagemErro.textContent = erros;
        // console.log("Paciente inválido");
        return;
    }

    // Adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    // for(var i = 0; I < erros.length; i++){
    //     var erro = erros[i];
    // }
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0) erros.push("O nome não pode estar em branco");
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if(paciente.peso.length == 0) erros.push("O peso não pode estar em branco");
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    if(paciente.altura.length == 0) erros.push("A altura não pode estar em branco");
    if(paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco");
    return erros;
}