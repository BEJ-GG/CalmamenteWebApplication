import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faQuestionCircle, faRobot, faUserEdit, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../img/logo.png'
import perfil from '../../../img/icon-usuario.png'
import logoIcon from '../../../img/logo-icon.png'
import facebook from '../../../img/facebook-logo.png'
import twitter from '../../../img/twitter-logo.png'
import instagram from '../../../img/instagram-logo.png'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import Respiracao from '../../exercicios/respiracao/Respiracao'
import Estouemcrise from '../estouemcrise/Estouemcrise'
import Queromeacalmar from '../queromeacalmar/Queromeacalmar';
import Informacoes from '../informacoes/Informacoes';
import MusicaDeUsoTerapeutico from '../../exercicios/musicaDeUsoTerapeutico/MusicaDeUsoTerapeutico'
import Meditacao from '../../exercicios/meditacao/Meditacao'
import MeditacaoGuiada from '../../exercicios/meditacao/MeditacaoGuiada'
import MeditacaoPranayama from '../../exercicios/meditacao/MeditacaoPranayama';
import EstimularCriatividadeHistorias from '../../exercicios/estimulaciatividade/EstimularCriatividadeHistorias'
import EscritaTerapeutica from '../../exercicios/escritaterapeutica/EscritaTerapeutica';
import Modal from 'react-bootstrap/Modal'


export default function Main() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div id="container">
                <div id="main">
                    {/*
    <!-- inicio menu  --> */}
                    <Navbar collapseOnSelect expand="lg" variant="light" className="back-menu m-0 p-0 d-flex justify-content-between">
                        <div className="m-0 container-fluid ">
                            <Link to="/"><img src={logo} alt="cerebro meditando, nome: calmamente" className="logo m-0"></img></Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                <Nav className="">
                                    <Link to="/escritaTerap" className="menu-di  mx-1 linkreact">Estou em crise</Link>
                                    <Link to="/queromeacalmar" className="menu-di  mx-1 linkreact">Quero me acalmar</Link>
                                    <Link to="/informacoes" className="menu-di  mx-1 linkreact">Informações</Link>
                                    {/* <!-- inicio do perfil --> */}
                                    <div className="perfi-usu">
                                        <button className="menu-dir mx-1" id="bt-perfi" onClick={handleShow}><img src={perfil} className="men-home" alt=""></img></button>
                                        <Modal className="modPerfil" show={show} onHide={handleClose}>
                                            <Modal.Body>
                                                <a href="#" ><FontAwesomeIcon icon={faUserEdit} className=" ic-modal i-per-fil linkreact" style={{ color: "black" }} /></a>
                                                <FontAwesomeIcon  icon={faQuestionCircle} style={{color: 'black', marginLeft:'37%'}} className="fas i-imusu" />
                                                <h4 className="p-nomus ">Calmamente</h4>
                                                <div className="hrPer"></div>                                             
                                                <h5 className="nomus-p" >contatobejgg@gmail.com</h5>
                                                       
                                                <div className="hrPer"></div>                                                                   
                                                <a href="#" className="linkreact">
                                                    <div className="per-falabo">
                                                        <h6 className="pa-per" style={{paddingTop: '2%'}}>Falar com o bot</h6>
                                                        <FontAwesomeIcon icon={faRobot} className="ic-bot-per ic-fabo" />
                                                    </div>
                                                </a>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <button type="button" className="bt-sape" id="idSaiPer" onClick={handleClose}>Sair <FontAwesomeIcon icon={faSignInAlt} className="fas ic-sape" /></button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    {/* <!-- fim do perfil --> */}
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>

                    {/* Conteudo */}
                    <main>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route path="/home" component={Home} />
                            <Route path="/estouemcrise" component={Estouemcrise} />
                            <Route path="/queromeacalmar" component={Queromeacalmar} />
                            <Route path="/informacoes" component={Informacoes} />
                            <Route path="/respiracao" component={Respiracao} />
                            <Route path="/musicaTerapia" component={MusicaDeUsoTerapeutico} />
                            <Route path="/meditacao" component={Meditacao} />
                            <Route path="/meditacaoGuiada" component={MeditacaoGuiada} />
                            <Route path="/meditacaoPranayama" component={MeditacaoPranayama} />                       
                            <Route path="/estimularCriatividade" component={EstimularCriatividadeHistorias} />
                            <Route path="/escritaTerap" component={EscritaTerapeutica} />

                        </Switch>
                    </main>
                    {/* Fim Conteudo */}

                </div>
            </div>

            {/*
    <!-- inicio rodapé --> */}
            <footer className="bg-dark m-0" id="roda">
                <div className=" rodape">
                    <div className="rodape-icone">
                        <img src={logoIcon} style={{ width: "100%" }} alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-start mrgr-grande" style={{ width: "100%" }}>
                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/" className="linkreact text-light roda-link font-weight-bold itens">Estou em
                                    crise</Link>
                            </li>
                            <li className="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                        </ul>

                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/" className="linkreact text-light roda-link font-weight-bold itens">Quero me
                                    acalmar</Link>
                            </li>
                            <li className="text-muted roda-link roda-link-cel itens">Exercícios para momentos de pré-crise </li>
                        </ul>

                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/" className="linkreact text-light roda-link font-weight-bold itens">Informações</Link>
                            </li>
                            <li className="text-muted roda-link itens">E-books</li>
                            <li className="text-muted roda-link itens">Pesquisas</li>
                            <li className="text-muted roda-link itens">Vídeos</li>
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
            {/*
    <!-- fim rodapé  --> */}

        </>
    )
}