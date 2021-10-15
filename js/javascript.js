//inicio dos iframes de exercícios
var urls = ['ifra-estoucrise.html', '3.html', '1.html', '2.html'];
var index = 0;

$("#estouCrise").click(function () {
  if (index < (urls.length - 1)) {
    index++;
  }
  $("#ifra-quadro").attr("src", urls[index]);

});

$("#inicio").click(function () {
  if (index < urls.length && index > 0) {
    index--;
  }
  $("#ifra-quadro").attr("src", urls[index]);
});
//fim dos iframes de exercícios

// inicio dos iframes do grounding
var urlsG = ['exerciciovisao.html', 'exerciciomao.html', 'exerciciosom.html','exerciciocheiro.html', 'exerciciogosto.html'];
var indexG = 0;

$("#grounPro").click(function () {
  if (indexG < (urlsG.length - 1)) {
    indexG++;
  }
  $("#ifra-groun").attr("src", urlsG[indexG]);

});

$("#grounVol").click(function () {
  if (indexG < urlsG.length && indexG > 0) {
    indexG--;
  }
  $("#ifra-groun").attr("src", urlsG[indexG]);
});
// fim dos iframes do grounding


//inicio link pros botões iniciais
$(".btn-inicial-enter").click(function () {
  location.href = 'cadastro.html'
});
$(".btn-inicial-crise").click(function () {
  location.href = 'estouTendoumaCrise.html'
});
//fim link pros botões iniciais




//inicio da responsividade dos botões da index
document.addEventListener("DOMContentLoaded", function (e) {

  // medias (as an array to make it a little easier to manage)
  var mqls = [
    window.matchMedia("(max-width: 710px)")
  ]

  // event listeners
  for (var i = 0; i < mqls.length; i++) {
    mqls[i].addListener(mqh)
  }

  

  // matches methods
  function mqh() {
    if (mqls[0].matches) {
      $(".bor-bot").removeClass("carousel-caption");
      $("#idpraia").html("Outros E-Books");
      $("#idpapra").addClass("mrgt-media");
      $("#idpapra").addClass("mrgb-grande");
    } else {
      $(".bor-bot").addClass("carousel-caption");
      $("#idpraia").html("");
      $("#idpapra").removeClass("mrgt-media");
      $("#idpapra").removeClass("mrgb-grande");
    }
  }

  // call once on load
  mqh();
});
// fim da responsividade dos botões da index

//inicio do mostrar e ocultar senha
function mostrarOcultarSenha() {
  var senha = document.getElementById("idSenha");
  if (senha.type == "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
  var comsenha = document.getElementById("idComSenha");
  if (comsenha.type == "password") {
    comsenha.type = "text";
  } else {
    comsenha.type = "password";
  }
}

function loginOcultarSenha() {
  var loginsenha = document.getElementById("idSenhaLogin");
  if (loginsenha.type == "password") {
    loginsenha.type = "text";
  } else {
    loginsenha.type = "password";
  }
}
//fim do mostrar e ocultar senha

//inicio validação de form cadstro
var check1 = document.getElementById('checkAnsi');
var check2 = document.getElementById('checkAnsi2');

function validaCamposForm() {


  const listaDeInputs = document.querySelectorAll('input');
  const listaDeSpans = document.querySelectorAll('span');


  let controle = true;

  for (elemento of listaDeInputs) {
    if (elemento.value == '') {
      elemento.style.border = "2px solid #d60d21";
      controle = false;
      for (span of listaDeSpans) {
        span.innerHTML = "Preencha este campo";
      }
    }
    if ($('#checkAnsi').is(':not(:checked)')) {
      check1.style.border = "2px solid #d60d21";
      controle = false;
    }
    if ($('#checkAnsi2').is(':not(:checked)')) {
      check2.style.border = "2px solid #d60d21";
      controle = false;
    }

    if (idSenha.value.length <= 5) {
      msgSenhaPqn.innerHTML = "Preencha o campo com 6 ou mais caracteres!";
      idSenha.style.border = "2px solid #d60d21";
      controle = false;
    }
  }

  return controle;
}
//fim validação de form cadstro


//inicio validação da data
var data = document.getElementById('idDate');

data.onblur = function () {
  if (data.value.length == 0) {
    data.style.border = "2px solid #d60d21";
  }
}

data.onfocus = function () {
  data.style.border = "";
}
//fim validação da data

//validação do checkbox
check1.onchange = function () {
  if (check1.checked === true) {
    check1.style.border = "";

  } else {
    check1.style.border = "2px solid #d60d21";
  }
}

check2.onchange = function () {
  if (check2.checked === true) {
    check2.style.border = "";
  } else {
    check2.style.border = "2px solid #d60d21";
  }
}
// fim validação do checkbox

//validação de nome
var nome = document.getElementById("idNome");
var sobre = document.getElementById("idSobrenome");
var msgNome = document.getElementById("msgNome");
var msgSobre = document.getElementById("msgSobrenome");

nome.onblur = function () {
  if (nome.value.length == 0) {
    nome.style.border = "2px solid #d60d21";
    msgNome.innerHTML = "Preencha este campo";
  }
}

sobre.onblur = function () {
  if (sobre.value.length == 0) {
    sobre.style.border = "2px solid #d60d21";
    msgSobre.innerHTML = "Preencha este campo";
  }
}

nome.onfocus = function () {
  nome.style.border = "";
  msgNome.innerHTML = "";
}

sobre.onfocus = function () {
  sobre.style.border = "";
  msgSobre.innerHTML = "";
}
//fim validação de nome

//inicio da validação do verififcar senha
var idSenha = document.getElementById("idSenha");
var idComSenha = document.getElementById("idComSenha");
var msgSenhaPqn = document.getElementById("msgSenhaPequena");
var msgSenhaDif = document.getElementById("msgSenhaDiferente");

idSenha.onblur = function tamanhoSenha() {
  if (idSenha.value.length <= 5 && idSenha.value.length != 0) {
    msgSenhaPqn.innerHTML = "Preencha o campo com 6 ou mais caracteres!";
    idSenha.style.border = "2px solid #d60d21";
  }
}

idComSenha.onblur = function () {
  if (idSenha.value != idComSenha.value && idComSenha.value.length == 0) {
    msgSenhaDif.innerHTML = "A senha está diferente";
    idComSenha.style.border = "2px solid #d60d21";
    idComSenha.setCustomValidity(".");

  }
}

idSenha.onfocus = function () {
  msgSenhaPqn.innerHTML = "";
  idSenha.style.border = "";
}

idComSenha.onfocus = function () {
  msgSenhaDif.innerHTML = "";
  idComSenha.style.border = "";
  idComSenha.setCustomValidity("");

}
//fim da validação do verificar senha



// validação email visual cad

var email = document.getElementById("idEmail");
var msgEmail = document.getElementById("msgEmail");

email.onblur = function () {
  if ((/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) == false && email.value.length != 0) {
    email.style.border = "2px solid #d60d21";
    msgEmail.innerHTML = "Digite um email válido";
  }
}


email.onfocus = function () {
  email.style.border = "";
  msgEmail.innerHTML = "";
}

//fim validação de email cad






//tem que criar varios js?
// span do preencha este campo aparece até nos preenchidos (tava aparecendo antes?)



// document.getElementById("bt-perfi")
//   .addEventListener("click", function () {
//     document.getElementById("bt-quaper").hidden = ;
//     document.getElementById("awesome").hidden = false;
//   }, false);


// inicio para fazer o perfil aparecer
function mostra_ocultaper() {
  var idBtQuaper = document.getElementById("bt-quaper");
  if (idBtQuaper.style.display === "none") {
    idBtQuaper.style.display = "block";
  } else {
    idBtQuaper.style.display = "none";
  }

}

function saiper() {
  var idBtQuaper = document.getElementById("bt-quaper");
  idBtQuaper.style.display = "none";
}

// fim para fazer o perfil aparecer

function limpaesc() {
  if (document.getElementById('limescr').value != "") {
    document.getElementById('limescr').value = "";
  }
}
