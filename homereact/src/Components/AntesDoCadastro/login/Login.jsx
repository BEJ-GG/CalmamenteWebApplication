import React from 'react'


export default function Login() {
return (
<>


    {/*
    <!-- inicio formulario --> */}
    <h1 className="d-flex justify-content-center titulos" style={{marginTop: '3%', marginBottom: '3%',textAlign: 'center'}}>
        Faça seu login</h1>
    <div className="formul">
        <div className="for">
            <form action="../../PosCadastro/principais/home/Home.jsx" method="GET"
                onsubmit="return validaCamposFormLogin()">
                <fieldset>
                    <div className="em-email-login">
                        <label for="idEmailLogin" className="form-label lbl-em itens">Email: </label>
                        <input type="email" class="form-control" id="idEmailLogin" name="txtEmailLog"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="d-flex">
                        <span id="msgEmail" style={{marginLeft: '3%'}}></span>
                    </div>
                    <div className="pas-senha">
                        <label for="idSenhaLogin" className="form-label lbl-noso itens">Senha: </label>
                        <input type="password" className="form-control" id="idSenhaLogin" name="txtSenha" />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span id="msgSenhaPequena" style={{marginLeft: '3%'}}></span>
                    </div>
                    <div className="check-senha form-switch">
                        <input type="checkbox" className="form-check-input" id="idMostrarLogin"
                            onclick="loginOcultarSenha()" />
                        <label className="form-check-label lbl-noso itens" style={{marginLeft: '1%'}} for="idMostrarLogin"
                            name="checkMostar">Mostrar senha</label>
                    </div>
                    <div>
                        <button type="submit" className="btn-logs btn btn-primary">Entrar</button>
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