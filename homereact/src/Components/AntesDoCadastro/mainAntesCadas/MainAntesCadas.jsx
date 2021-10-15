import React from 'react'
import Index from '../InicioCal/Index'
import Login from '../login/Login'
import Cadastro from '../cadastro/Cadastro'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Logo from '../../img/logo.png'
import logoIcon from '../../img/logo-icon.png'
import facebook from '../../img/facebook-logo.png'
import twitter from '../../img/twitter-logo.png'
import instagram from '../../img/instagram-logo.png'

export default function MainAntesCadas() {

return(
<>
    <div id="container">
        <div id="main">
            {/*
            <!-- inicio menu  --> */}
            <Navbar collapseOnSelect expand="lg" variant="light"
                className="back-menu m-0 p-0 d-flex justify-content-between">
                <div className="m-0 container-fluid ">
                    <Link to="/"><img src={Logo} alt="cerebro meditando, nome: calmamente" className="logo m-0"></img>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="">
                            <hr />
                            {/* HR? */}
                            <Link to="/login" className="menu-di  mx-1 linkreact" aria-current="page">Login</Link>
                            <Link to="/cadastro" className="menu-dir mx-1 linkreact">Cadastre-se</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/*
            <!-- fim menu --> */}

            {/* Conteudo */}
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/index" />
                    </Route>
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/cadastro" component={Cadastro} />
                    
                    

                </Switch>
            </main>
            {/* Fim Conteudo */}

        </div>
    </div>

    {/*<!-- inicio rodapé --> */}
    <footer className="bg-dark m-0" id="roda">
                <div className=" rodape">
                    <div className="rodape-icone">
                        <img src={logoIcon} style={{ width: "100%" }} alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-start mrgr-grande" style={{ width: "100%" }}>
                        <ul className="rodape-itens mx-1">
                            <li><Link to="/"
                                className="linkreact text-light roda-link font-weight-bold itens">Estou em
                                crise</Link>
                            </li>
                            <li className="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                        </ul>

                        <ul className="rodape-itens mx-1">
                            <li><Link to="/"
                                className="linkreact text-light roda-link font-weight-bold itens">Conheça nosso site</Link>
                            </li>
                            <li className="text-muted roda-link itens">Estou em crise </li>
                            <li className="text-muted roda-link itens">Quero me acalmar </li>
                            <li className="text-muted roda-link itens">Informações </li>
                        </ul>
                    </div>

                    <div className="rodape-contatos ">
                        <ul className="rodape-itens list-group list-group-horizontal list-group-horizontal-sm list-group-horizontal-md
          list-group-horizontal-xl">
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={instagram}
                                alt="" /></a></li>
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={twitter}
                                alt="" /></a></li>
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={facebook}
                                alt="" /></a></li>
                        </ul>
                        <p className="text-light roda-email itens">contatobejgg@gmail.com</p>
                    </div>
                </div>
            </footer>
            {/*<!-- fim rodapé  --> */}
</>
)}