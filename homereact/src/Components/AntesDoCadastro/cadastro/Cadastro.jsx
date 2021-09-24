import React from 'react'
import logo from '../../../img/logo.png'
import logoIcon from '../../../img/logo-icon.png'
import facebook from '../../../img/facebook-logo.png'
import twitter from '../../../img/twitter-logo.png'
import instagram from '../../../img/instagram-logo.png'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import Respiracao from '../../exercicios/respiracao/Respiracao'
import Estouemcrise from '../../../PosCadastro/principais/estouemcrise/Estouemcrise'
import Queromeacalmar from '../../../PosCadastro/principais/queromeacalmar/Queromeacalmar';
import Informacoes from '../../../PosCadastro/principais/informacoes/Informacoes';

export default function cadastro() {

    return (
        <>

            <div id="container" >
                <div id="main">
                    {/* <!-- inicio menu  --> */}
                    <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center back-menu">
                        <div>
                            <a href="../../Components/PosCadastro/principais/home/Home.jsx" class="m-0"> <img src={logo} alt="cerebro meditando, nome: calmamente"
                                class="logo m-0" /> </a>
                        </div>
                    </nav>
                    {/* <!-- fim menu  --> */}


                    {/* <!-- inicio formulario --> */}
                    <h1 class="d-flex justify-content-center titulos" style={{ marginTop: '3%', marginBottom: '3%', textAlign: 'center' }}>
                        Antes
                        de continuarmos precisamos
                        que você se cadastre</h1>
                    <div class="formul mrgb-media">
                        <div class="for">
                            {/* Link chatbot mudar */}
                            <form action="./chatbot.html" method="GET" onsubmit="return validaCamposForm()">
                                <fieldset>
                                    <div class="nome-sobrenome">
                                        <label for="idNome" class="form-label lbl-noso itens">Nome: </label>
                                        <input type="text" class="form-control nm-nome" id="idNome" name="txtNome" pattern="[a-zA-Z]+" />
                                        <label for="idSobrenome" class="form-label mrgl-pequena lbl-noso itens">Sobrenome: </label>
                                        <input type="text" class="form-control" id="idSobrenome" name="txtSobrenome" pattern="[a-zA-Z]+" />
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span id="msgNome" style={{ marginLeft: '3%' }}></span>
                                        <span id="msgSobrenome" class="mrgr-media"></span>
                                    </div>
                                    <div class="em-email">
                                        <label for="idEmail" class="form-label lbl-em itens">Email: </label>
                                        <input type="email" class="form-control" id="idEmail" name="txtEmail" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="d-flex">
                                        <span id="msgEmail" style={{ marginLeft: "3%" }}></span>
                                    </div>
                                    <div class="pas-senha">
                                        <label for="idSenha" class="form-label lbl-noso itens">Senha: </label>
                                        <input type="password" class="form-control" id="idSenha" name="txtSenha" />
                                        <input type="password" class="form-control mrgl-pequena" id="idComSenha" name="txtComfirma"
                                            placeholder="Confirmar senha" />
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <span id="msgSenhaPequena" style={{ marginLeft: "3%" }}></span>
                                        <span id="msgSenhaDiferente" class="mrgr-media"></span>
                                    </div>
                                    <div class="check-senha form-switch mt-3">
                                        <input type="checkbox" class="form-check-input" id="idMostrar" onclick="mostrarOcultarSenha()" />
                                        <label class="form-check-label lbl-noso itens " style={{ marginLeft: "1%" }} for="idMostrar"
                                            name="checkMostar">Mostrar senha</label>
                                    </div>
                                    <div class="genero-data">
                                        <label for="idGenero" class="form-label lbl-noso itens">Gênero: </label>
                                        <select name="txtGenero" id="idGenero" class="form-select nm-nome" required>
                                            <option value="m" class="itens">Masculino</option>
                                            <option value="f" class="itens">Feminino</option>
                                            <option value="o" class="itens">Outros</option>
                                        </select>
                                        <label for="idData" class="form-label mrgl-pequena lbl-noso itens">Nascimento: </label>
                                        <input type="date" class="form-control" id="idDate" name="daData" />
                                    </div>
                                    <div class="check-infor ">
                                        <input type="checkbox" class="form-check-input ck-an" id="checkAnsi" />
                                        <label class="form-check-label itens mrgl-pequena" style={{ fontSize: "0.8rem" }} for="checkAnsi"
                                            name="ansiCheck">Tenho um quadro de ansiedade e entendo que a real ajuda é feita apenas através de
                                            profissionais</label>
                                    </div>
                                    <div class="check-infor  ">
                                        <input type="checkbox" class="form-check-input ck-an" id="checkAnsi2" />
                                        <label class="form-check-label itens mrgl-pequena" style={{ fontSize: "0.8rem" }} for="checkAnsi"
                                            name="ansiCheck">Li e concordo com os termos de uso</label>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn-cadas btn btn-primary">Cadastrar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    {/* <!-- fim formulario --> */}

                </div >
            </div >


            {/* <!-- inicio rodapé --> */}
            <footer footer class="bg-dark m-0" id="roda" >
                <div class=" rodape">
                    <div class="rodape-icone">
                        <img src={logoIcon} style={{ width: "100%" }} alt="" />
                    </div>

                    <div class="d-flex justify-content-center align-items-start mrgr-grande" style={{ width: "100%" }}>
                        <ul class="rodape-itens mx-1">
                            <li><Link to="/"
                                class="linkreact text-light roda-link font-weight-bold itens">Estou em
                                crise</Link>
                            </li>
                            <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                        </ul>

                        <ul class="rodape-itens mx-1">
                            <li><Link to="/"
                                class="linkreact text-light roda-link font-weight-bold itens">Quero me
                                acalmar</Link>
                            </li>
                            <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de pré-crise </li>
                        </ul>

                        <ul class="rodape-itens mx-1">
                            <li><Link to="/"
                                class="linkreact text-light roda-link font-weight-bold itens">Informações</Link>
                            </li>
                            <li class="text-muted roda-link itens">E-books</li>
                            <li class="text-muted roda-link itens">Pesquisas</li>
                            <li class="text-muted roda-link itens">Vídeos</li>
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

                <main>
                    <Switch>
                        {/* <Route exact path="/">
                            <Redirect to="/home" />
                            </Route>
                            <Route path="/home" component={Home}/> */}
                        <Route path="/respiracao" component={Respiracao} />
                        <Route path="/estouemcrise" component={Estouemcrise} />
                        <Route path="/queromeacalmar" component={Queromeacalmar} />
                        <Route path="/informacoes" component={Informacoes} />

                    </Switch>
                </main>
            </footer >
        </>
    )
}