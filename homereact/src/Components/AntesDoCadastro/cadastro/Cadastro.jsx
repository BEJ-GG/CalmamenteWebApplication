import React from 'react'


export default function cadastro() {

    //inicio do mostrar e ocultar senha
const mostrarOcultarSenha = () => {
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
  //fim do mostrar e ocultar senha

return (
<>
    {/*
    <!-- inicio formulario --> */}
    <h1 className="d-flex justify-content-center titulos"
        style={{ marginTop: '3%', marginBottom: '3%', textAlign: 'center' }}>
        Antes
        de continuarmos precisamos
        que você se cadastre</h1>
    <div className="formul mrgb-media">
        <div className="for">
            {/* Link chatbot mudar */}
            <form action="/chatbot" method="POST" onsubmit="return validaCamposForm()">
                <fieldset>
                    <div className="nome-sobrenome">
                        <label for="idNome" className="form-label lbl-noso itens">Nome: </label>
                        <input type="text" className="form-control nm-nome" id="idNome" name="txtNome"
                            pattern="[a-zA-Z]+" />
                        <label for="idSobrenome" className="form-label mrgl-pequena lbl-noso itens">Sobrenome: </label>
                        <input type="text" className="form-control" id="idSobrenome" name="txtSobrenome"
                            pattern="[a-zA-Z]+" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span id="msgNome" style={{ marginLeft: '3%' }}></span>
                        <span id="msgSobrenome" className="mrgr-media"></span>
                    </div>
                    <div class="em-email">
                        <label for="idEmail" className="form-label lbl-em itens">Email: </label>
                        <input type="email" className="form-control" id="idEmail" name="txtEmail"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="d-flex">
                        <span id="msgEmail" style={{ marginLeft: "3%" }}></span>
                    </div>
                    <div className="pas-senha">
                        <label for="idSenha" className="form-label lbl-noso itens">Senha: </label>
                        <input type="password" className="form-control" id="idSenha" name="txtSenha" />
                        <input type="password" className="form-control mrgl-pequena" id="idComSenha" name="txtComfirma"
                            placeholder="Confirmar senha" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span id="msgSenhaPequena" style={{ marginLeft: "3%" }}></span>
                        <span id="msgSenhaDiferente" className="mrgr-media"></span>
                    </div>
                    <div className="check-senha form-switch mt-3">
                        <input type="checkbox" className="form-check-input" id="idMostrar"
                            onclick={() => mostrarOcultarSenha()} />
                        <label className="form-check-label lbl-noso itens " style={{ marginLeft: "1%" }} for="idMostrar"
                            name="checkMostar">Mostrar senha</label>
                    </div>
                    <div className="genero-data">
                        <label for="idGenero" className="form-label lbl-noso itens">Gênero: </label>
                        <select name="txtGenero" id="idGenero" className="form-select nm-nome" required>
                            <option value="m" className="itens">Masculino</option>
                            <option value="f" className="itens">Feminino</option>
                            <option value="o" className="itens">Outros</option>
                        </select>
                        <label for="idData" className="form-label mrgl-pequena lbl-noso itens">Nascimento: </label>
                        <input type="date" className="form-control" id="idDate" name="daData" />
                    </div>
                    <div className="check-infor ">
                        <input type="checkbox" className="form-check-input ck-an" id="checkAnsi" />
                        <label className="form-check-label itens mrgl-pequena" style={{ fontSize: "0.8rem" }}
                            for="checkAnsi" name="ansiCheck">Tenho um quadro de ansiedade e entendo que a real ajuda é
                            feita apenas através de
                            profissionais</label>
                    </div>
                    <div className="check-infor  ">
                        <input type="checkbox" className="form-check-input ck-an" id="checkAnsi2" />
                        <label className="form-check-label itens mrgl-pequena" style={{ fontSize: "0.8rem" }}
                            for="checkAnsi" name="ansiCheck">Li e concordo com os termos de uso</label>
                    </div>
                    <div>
                        <button type="submit" className="btn-cadas btn btn-primary">Cadastrar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
    {/*
    <!-- fim formulario --> */}






</>
)


}