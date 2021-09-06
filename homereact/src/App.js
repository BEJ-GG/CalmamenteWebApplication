import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { faBook, faExclamationTriangle, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './Components/img/logo.png'
import perfil from './Components/img/icon-usuario.png'
import ebook from './Components/img/teste-ebook.jpg'
import logoIcon from './Components/img/logo-icon.png'
import facebook from './Components/img/facebook-logo.png'
import twitter from './Components/img/twitter-logo.png'
import instagram from './Components/img/instagram-logo.png'

export default function App() {

return(
  
<>
<div id="container">
    <div id="main">

      {/* <!-- inicio menu  --> */}
      <Navbar collapseOnSelect expand="lg" variant="light" className="back-menu m-0 p-0 d-flex justify-content-between">
        <div className="m-0 container-fluid ">
        <Navbar.Brand href="#home"><img src={logo} alt="cerebro meditando, nome: calmamente"
                className="logo m-0"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="">
            <a href="#features" className="menu-di  mx-1 linkreact">Estou em crise</a>
            <a href="#pricing" className="menu-di  mx-1 linkreact">Quero me acalmar</a>
            <a href="#pricing" className="menu-di  mx-1 linkreact">Informações</a>
            {/* <!-- inicio do perfil --> */}
            <div className="perfi-usu">
                <button className="menu-dir mx-1" id="bt-perfi" onclick='mostra_ocultaper()' href="#"><img
                    src={perfil} className="men-home " alt=""></img></button>
                <div className="per-text" id="bt-quaper">
                  <a href="#"><i className="fas fa-user-edit i-per-fil linkreact"></i></a>
                  <i className="fas fa-question-circle i-imusu"></i>
                  <h4 className="p-nomus ">Xandao de Combate</h4>
                  <hr className="hr-per" size="4"></hr>
                  <h5 className="nomus-p">Missilbalistico@intercontinental</h5>
                  <hr className="hr-per" size="4"></hr>
                  <a href="#" className="linkreact">
                    <div className=" per-falabo">
                      <h6 className="pa-per">Falar com o bot</h6>
                      <i className="fas fa-robot ic-bot-per ic-fabo"></i>
                    </div>
                  </a>
                  <div className="mrgt-media mrgr-pequena d-flex justify-content-end">
                    <button type="button" className="bt-sape" id="idSaiPer" onclick='saiper()'>Sair <i
                        className="fas fa-sign-in-alt ic-sape"></i></button>
                  </div>
                </div>
              </div>
              {/* <!-- fim do perfil --> */}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
      {/* <!-- fim menu  --> */}

      {/* <!-- inicio dos cards de 3 funcionalidade --> */}
      {/* <!-- card 1 --> */}
      <div className="mrgx-pequena mrgt-pequena">
        <div className="row m-0 row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="ho-bor">
              <a className="linkreact" href="estouEmCriseCadastro.html">
                 
                <div className="card h-100" style={{border: "0px", position: "static"}}> 

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="tam-funcprin" style={{color: "crimson"}} />
                  </div>
                  <div className="card-body esp-car">
                    <h5 className="card-title d-flex justify-content-center titulos">Estou em crise</h5>
                    <p className="card-text textos " style={{textAlign: 'center'}}>Se estiver em uma crise 
                      de ansiedade entre
                      aqui
                      para fazer alguns exercícios recomendados pra você, ou personalize seus exercícios.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="col ">
            <div className="ho-bor">
              <a className="linkreact" href="queroMeAcalmar.html">

                <div className="card h-100" style={{border: "0px", position: "static"}}> 

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faMugHot} className="tam-funcprin" style={{color: "rgb(204, 204, 25)"}} />
                  </div>
                  <div className="card-body esp-card">
                    <h5 className="card-title d-flex justify-content-center titulos" style={{textAlign: 'center'}}>Quero me 
                      acalmar</h5>
                    <p className="card-text textos " style={{textAlign: 'center'}}>Quando estiver 
                      começando
                      a ficar ansioso e
                      precisar se acalmar, entre nessa área para exercícios mais específicos pra esse momento, ou
                      personalize
                      seus exercícios.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/*  card 3  */}
          <div className="col">
            <div className="ho-bor">
              <a className="linkreact" href="informacoes.html">

                <div className="card h-100 " style={{border: '0px', position: 'static'}} >

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faBook} className="tam-funcprin" style={{color: "rgb(69, 165, 202)"}} />
                    
                  </div>
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center titulos">Informações</h5>
                    <p className="card-text textos" style={{textAlign: 'center'}} > A chave para diminuir sua 
                      ansiedade é o
                      autoconhecimento e entender como a ansiedade funciona, portanto nessa área você poderá encontrar
                      e-books, pesquisas e vídeos informacionais.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- fim dos cards de 3 funcionalidade --> */}
      <div className="paralax-montain mrgt-media">
        <h1 className=" tieb  titulos t-home d-flex justify-content-center">Video</h1>
      </div>

      {/* <!-- inicio video --> */}

      <div class="d-flex justify-content-center mrgt-media">
        <iframe  width="560" height="315"
          src="https://www.youtube.com/embed/4eoM26ZmHd0" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen style={{borderRadius: '20px 5px 20px 5px'}}></iframe> 
      </div>
      {/* <!-- fim video  --> */}
      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb  titulos t-home d-flex justify-content-center">E-Books</h1>
      </div>

      {/* <!-- inicio e-book --> */}

      <div class=" mrgt-grande">
      </div>
      <div class="d-flex  mrgt-grande row m-0">
        <div class=" mrgl-grande col-12 col-sm-12 col-md-8 col-lg-8 " id="home-book">
          <img src={ebook} alt="Imagem e-book" title="Imagem e-book" style={{width: '100%'}}></img> 
        </div>
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <p class="titulos mrgx-media" id="home-tbook">Titulo do E-book</p>
          <p class="textos mrgx-media">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            eligendi
            sapiente, totam in qui
            veniam. Dicta vero voluptas maxime nesciunt excepturi libero! Perspiciatis esse ad commodi
            maiores odio quia
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit, molestiae
            laudantium modi
            pariatur
            sapiente nesciunt ipsa quas nam cum alias totam architecto vero est vel animi doloribus,
            similique quia.
            Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Enim, rerum ab! Deserunt temporibus rem
            impedit
            consectetur
            illo, consequatur distinctio atque at sapiente provident, porro ducimus eum libero nam, sequi
            dolorem?</p>
        </div>
      </div>
      {/* <!-- fim do e-book --> */}

      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb  titulos t-home d-flex justify-content-center">Institucional</h1>
        <h5 class="d-flex justify-content-center sub-tieb">Quem somos / Missão</h5>
      </div>

      {/* <!-- inicio parte institucional --> */}
      <div class="cards-insti mrgx-grande">
        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{clear: 'left'}} >Somos um grupo de desenvolvedores que entendemos 
            que a
            ansiedade no Brasil é um problema real, sério e que aumentou muito durante a pandemia. Por isso
            criamos o
            Calmamente uma plataforma digital que possa ajudar você em momentos de uma crise de ansiedade e em
            momentos
            antes de uma crise, forncecendo exercícios simples com a capacidade retirada de sua mente do
            estado de crise.
            Entendemos também que cada pessoa tem suas individualidades em momentos de crise e que devem ser
            respeitadas,
            recomendando assim exercícios de acordo com suas próprias características individuais.</p>
        </div>


        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{clear: 'left'}} >Ajudar pessoas que possuem problemas com 
            ansiedade sugerindo
            diversos exercícios de acordo com a personalidade da pessoa, e permitindo que ela personalize suas
            soluções.
            Ultimamente os casos de pessoas com ansiedade vem subindo muito e quanto mais pessoas forem
            ajudadas melhor.
          </p>
        </div>
      </div>
      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb titulos t-home d-flex justify-content-center">Institucional</h1>
        <h5 class="d-flex justify-content-center sub-tieb">Visão / Valores</h5>
      </div>

      <div class="cards-insti mrgx-grande mrgb-media">
        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{clear: 'left'}}>Pretendemos nos tornar o maior canal acessível 
            para ajuda
            contra ansiedade do Brasil, sendo bem-visto e recomendado por conselhos de psicologia de todo o
            país. Nosso
            objetivo é ser capaz de ajudar milhares de pessoas todos os dias a lidarem com essa doença e
            contribuir para
            que o Brasil pare de ser, no ranking da OMS, o pais mais ansioso do Mundo.</p>
        </div>


        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{clear: 'left'}} ><span style={{fontWeight: 'bold'}}>Humanização:
            </span>
            Cuidado centrado nas pessoas, respeitando todos os usuários.</p>
          <p class="textos mrgt-pequena" style={{clear: 'left'}}><span style={{fontWeight: 'bold'}}>Compreensão:
            </span>
            Compreendemos que a ansiedade é um problema sério e que deve ser tratada com muita atenção.</p>
          <p class="textos mrgt-pequena" style={{clear: 'left'}}><span style={{fontWeight: 'bold'}}>Gratidão:
            </span> Somos
            gratos pela possibilidade de auxílio às pessoas principalmente por termos passado por momentos tão
            difíceis.
          </p>
          <p class="textos mrgt-pequena" style={{clear: 'left'}}><span style={{fontWeight: 'bold'}}>Confiabilidade:
            </span>
            Estabelecer relacionamentos abertos, transparentes e apoiados na confiança mútua.</p>
        </div>
      </div>

      {/* fim parte institucional  */}
    </div>
  </div> 

  {/* <!-- inicio rodapé --> */}
  <footer class="bg-dark m-0" id="roda">
    <div class=" rodape">
      <div class="rodape-icone">
        <img src={logoIcon} style={{width: "100%"}} alt="" />
      </div>

      <div class="d-flex justify-content-center align-items-start mrgr-grande" style={{width: "100%"}}>
        <ul class="rodape-itens mx-1">
          <li><a href="estouEmCriseCadastro.html" class="linkreact text-light roda-link font-weight-bold itens">Estou em
              crise</a>
          </li>
          <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
        </ul>

        <ul class="rodape-itens mx-1">
          <li><a href="queroMeAcalmar.html" class="linkreact text-light roda-link font-weight-bold itens">Quero me
              acalmar</a>
          </li>
          <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de pré-crise </li>
        </ul>

        <ul class="rodape-itens mx-1">
          <li><a href="informacoes.html" class="linkreact text-light roda-link font-weight-bold itens">Informações</a>
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
  </footer>
  {/* <!-- fim rodapé  -->  */}

</>
)}