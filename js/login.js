// inicio validação de form login
function validaCamposFormLogin() {

    const listaDeInputs = document.querySelectorAll('input');
    const listaDeSpans = document.querySelectorAll('span');

    let controle = true;

    for (elemento of listaDeInputs) {
        if (elemento.value == '') {
            elemento.style.border = "2px solid #d60d21";
            listaDeSpans.indexOf(elemento).innerHTML = "Preencha esse campo";
            controle = false;
        }

    }

    return controle;
}
// fim validação de form login


//incio de validação de email login
var email2 = document.getElementById("idEmailLogin");
email2.onblur = function () {
    if ((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email2.value)) == false && email2.value.length != 0) {
        email2.style.border = "2px solid #d60d21";
        msgEmail.innerHTML = "Digite um email válido";
    }
}

email2.onfocus = function () {
    email2.style.border = "";
    msgEmail.innerHTML = "";
}


// FIM Validação do email login

//perguntar pro prof a questão do index e dos spans