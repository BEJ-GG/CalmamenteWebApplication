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
import Carousel0 from '../../img/carousel0.jpg'
import Carousel1 from '../../img/carousel1.jpg'
import Carousel2 from '../../img/carousel2.png'
import Carousel3 from '../../img/carousel3.jpg'


export default function index() {
    return (

        <>
            <div id="container">
                <div id="main">
                    {/* <!-- inicio menu  --> */}
                    <nav class="navbar navbar-expand-lg navbar-light back-menu">
                        <div class=" container-fluid">
                            <div>
                                <a href="../InicioCal/Index.jsx" class="m-0"> <img src={Logo} alt="cerebro meditando, nome: calmamente" class="logo m-0" /> </a>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <hr />
                                    <a class="menu-di  mx-1 linkreact" aria-current="page" href="../login/Login.jsx">Login</a>
                                    <a class="menu-dir mx-1 linkreact" href="../cadastro/Cadastro.jsx">Cadastre-se</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- fim menu --> */}

                    {/* <!-- incio carrossel  --> */}
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active " data-bs-interval="6000">
                                <img src={Carousel2} class="d-block w-100 img-carousel"
                                    alt="Pessoa sentada em um por do sol na praia, com os braços pra cima" />
                                <div class="carousel-caption d-flex justify-content-center bor-bot ">
                                    <button type="button" class="btn btn-outline-info  btn-inicial-enter">Conheça nosso site</button>
                                    <button type="button" class="btn btn-outline-danger  btn-inicial-crise">Estou em crise</button>
                                </div>
                            </div>
                            <div class="carousel-item " data-bs-interval="6000">
                                <img src={Carousel1} class="d-block w-100 img-carousel"
                                    alt="Mulher sentada em um campo aberto, com os braços abertos lateralmente" />
                                <div class="carousel-caption d-flex justify-content-center bor-bot">
                                    <button type="button" class="btn btn-outline-info btn-inicial-enter">Conheça nosso site</button>
                                    <button type="button" class="btn btn-outline-danger btn-inicial-crise">Estou em crise</button>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="6000">
                                <img src={Carousel3} class="d-block w-100 img-carousel"
                                    alt="Pedras empilhadas uma em cima da outra se equilibrando, na beira do mar" />
                                <div class="carousel-caption d-flex justify-content-center bor-bot">
                                    <button type="button" class="btn btn-outline-info btn-inicial-enter">Conheça nosso site</button>
                                    <button type="button" class="btn btn-outline-danger btn-inicial-crise">Estou em crise</button>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="0500">
                                <img src={Carousel2} class="d-block w-100 img-carousel"
                                    alt="Pessoa sentada em um por do sol na praia, com os braços pra cima" />
                                <div class="carousel-caption d-flex justify-content-center bor-bot">
                                    <button type="button" class="btn btn-outline-info btn-inicial-enter">Conheça nosso site</button>
                                    <button type="button" class="btn btn-outline-danger btn-inicial-crise">Estou em crise</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fim carrossel  --> */}
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
