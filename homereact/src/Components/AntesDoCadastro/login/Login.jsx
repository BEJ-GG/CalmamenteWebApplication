import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Logo from '../../img/logo.png'
import logoIcon from '../../img/logo-icon.png'
import facebook from '../../img/facebook-logo.png'
import twitter from '../../img/twitter-logo.png'
import instagram from '../../img/instagram-logo.png'
import Estouemcrise from '../../PosCadastro/principais/estouemcrise/Estouemcrise'
import Queromeacalmar from '../../PosCadastro/principais/queromeacalmar/Queromeacalmar';
import Informacoes from '../../PosCadastro/principais/informacoes/Informacoes';

export default function Login() {
    return (
        <>
            <div id="container">
                <div id="main">
                    {/* <!-- inicio menu  --> */}
                    <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center back-menu">
                        <div>
                            <a href="../InicioCal/Index.jsx" class="m-0"> <img src={Logo} alt="cerebro meditando, nome: calmamente"
                                class="logo m-0" /> </a>
                        </div>
                    </nav>
                    {/* <!-- fim menu --> */}

                    {/* <!-- inicio formulario --> */}
                    <h1 class="d-flex justify-content-center titulos" style={{marginTop: '3%', marginBottom: '3%',textAlign: 'center'}}>
                        Faça seu login</h1>
                    <div class="formul">
                        <div class="for">
                            <form action="../../PosCadastro/principais/home/Home.jsx" method="GET" onsubmit="return validaCamposFormLogin()">
                                <fieldset>
                                    <div class="em-email-login">
                                        <label for="idEmailLogin" class="form-label lbl-em itens">Email: </label>
                                        <input type="email" class="form-control" id="idEmailLogin" name="txtEmailLog"
                                            aria-describedby="emailHelp"/>
                                    </div>
                                    <div class="d-flex">
                                        <span id="msgEmail" style={{marginLeft: '3%'}}></span>
                                    </div>
                                    <div class="pas-senha">
                                        <label for="idSenhaLogin" class="form-label lbl-noso itens">Senha: </label>
                                        <input type="password" class="form-control" id="idSenhaLogin" name="txtSenha"/>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span id="msgSenhaPequena" style={{marginLeft: '3%'}}></span>
                                    </div>
                                    <div class="check-senha form-switch">
                                        <input type="checkbox" class="form-check-input" id="idMostrarLogin" onclick="loginOcultarSenha()"/>
                                        <label class ="form-check-label lbl-noso itens" style={{marginLeft: '1%'}} for="idMostrarLogin"
                                        name="checkMostar">Mostrar senha</label>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn-logs btn btn-primary">Entrar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    {/* <!-- fim formulario --> */}
                </div>
            </div >

            {/*<!-- inicio rodapé --> */}
    <footer class="bg-dark m-0" id="roda">
        <div class=" rodape">
            <div class="rodape-icone">
                <img src={logoIcon} style={{width: "100%"}} alt="" />
            </div>

            <div class="d-flex justify-content-center align-items-start mrgr-grande" style={{width: "100%"}}>
                <ul class="rodape-itens mx-1">
                    <li><Link to="/"
                            class="linkreact text-light roda-link font-weight-bold itens">Estou em
                            crise</Link>
                    </li>
                    <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                </ul>

                <ul class="rodape-itens mx-1">
                    <li><Link to="/"
                            class="linkreact text-light roda-link font-weight-bold itens">Conheça nosso site</Link>
                    </li>
                    <li class="text-muted roda-link itens">Estou em crise </li>
                    <li class="text-muted roda-link itens">Quero me acalmar </li>
                    <li class="text-muted roda-link itens">Informações </li>
                </ul>
            </div>

            <div class="rodape-contatos ">
                <ul class="rodape-itens list-group list-group-horizontal list-group-horizontal-sm list-group-horizontal-md
          list-group-horizontal-xl">
                    <li class="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={instagram}
                                alt="" /></a></li>
                    <li class="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={twitter}
                                alt="" /></a></li>
                    <li class="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={facebook}
                                alt="" /></a></li>
                </ul>
                <p class="text-light roda-email itens">contatobejgg@gmail.com</p>
            </div>
        </div>
    </footer>
    {/*<!-- fim rodapé  --> */}

            <main>
                <Switch>
                    {/* <Route exact path="/">
                            <Redirect to="/home" />
                            </Route>
                            <Route path="/home" component={Home}/> */}
                    <Route path="/estouemcrise" component={Estouemcrise} />
                    <Route path="/queromeacalmar" component={Queromeacalmar} />
                    <Route path="/informacoes" component={Informacoes} />
                </Switch>
            </main>

        </>
    )
}
