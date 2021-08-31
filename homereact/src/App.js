import React from 'react'
import './App.css'


export default function App() {

return(
<>
<div id="container">
    <div id="main">
      {/* <!-- inicio menu  --> */}
      <nav class="navbar navbar-expand-lg navbar-light back-menu">
        <div class=" container-fluid">
          <div>
            <a href="./home.html" class="m-0"> <img src="./img/logo.png" alt="cerebro meditando, nome: calmamente"
                class="logo m-0"></img> </a>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>
            <span class="navbar-toggler-icon"></span>
          
          <div class="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <hr></hr>
              <a class="menu-di  mx-1" aria-current="page" href="./estouEmCriseCadastro.html">Estou em crise</a>
              <a class="menu-di mx-1" href="./queroMeAcalmar.html">Quero me acalmar</a>
              <a class="menu-di mx-1" href="./informacoes.html">Informações</a>
              <div class="perfi-usu">
                <button class="menu-dir mx-1" id="bt-perfi" onclick='mostra_ocultaper()' href="#"><img
                    src="./img/icon-usuario.png" class="men-home" alt=""></img></button>
                {/* <!-- inicio do perfil --> */}
                <div class="per-text" id="bt-quaper">
                  <a href="#"><i class="fas fa-user-edit i-per-fil"></i></a>
                  <i class="fas fa-question-circle i-imusu"></i>
                  <h4 class="p-nomus ">Xandao de Combate</h4>
                  <hr class="hr-per" size="4"></hr>
                  <h5 class="nomus-p">Missilbalistico@intercontinental</h5>
                  <hr class="hr-per" size="4"></hr>
                  <a href="#">
                    <div class=" per-falabo">
                      <h6 class="pa-per">Falar com o bot</h6>
                      <i class="fas fa-robot ic-bot-per ic-fabo"></i>
                    </div>
                  </a>
                  <div class="mrgt-media mrgr-pequena d-flex justify-content-end">
                    <button type="button" class="bt-sape" id="idSaiPer" onclick='saiper()'>Sair <i
                        class="fas fa-sign-in-alt ic-sape"></i></button>
                  </div>
                </div>
                {/* <!-- fim do perfil --> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- fim menu  --> */}

      {/* <!-- inicio dos cards de 3 funcionalidade --> */}
      {/* <!-- card 1 --> */}
      <div class="mrgx-pequena mrgt-pequena">
        <div class="row m-0 row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="ho-bor">
              <a href="estouEmCriseCadastro.html">
                 
                <div class="card h-100"> {/*style="border: 0px; position: static;"*/}

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div class="d-flex justify-content-center mrgt-media">
                    <i class="fas fa-exclamation-triangle tam-funcprin" ></i> {/*style="color: crimson;"*/}
                  </div>
                  <div class="card-body esp-car">
                    <h5 class="card-title d-flex justify-content-center titulos">Estou em crise</h5>
                    <p class="card-text textos " >{/*style="text-align: center; "*/}Se estiver em uma crise {/*style="text-align: center; "*/}
                      de ansiedade entre
                      aqui
                      para fazer alguns exercícios recomendados pra você, ou personalize seus exercícios.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div class="col ">
            <div class="ho-bor">
              <a href="queroMeAcalmar.html">

                <div class="card h-100" > {/*style="border: 0px; position: static;"*/}

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div class="d-flex justify-content-center mrgt-media">
                    <i class="fas fa-mug-hot tam-funcprin" ></i> {/*style="color: rgb(204, 204, 25)"*/}
                  </div>
                  <div class="card-body esp-card">
                    <h5 class="card-title d-flex justify-content-center titulos" >Quero me {/*style="text-align: center; "*/}
                      acalmar</h5>
                    <p class="card-text textos " >Quando estiver {/*style="text-align: center; "*/}
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

          {/* <!-- card 3 --> */}
          <div class="col">
            <div class="ho-bor">
              <a href="informacoes.html">

                <div class="card h-100 " > {/*style="border: 0px; position: static;"*/}

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div class="d-flex justify-content-center mrgt-media">
                    <i class="fas fa-book tam-funcprin" ></i> {/*style="color: rgb(69, 165, 202);"*/}
                  </div>
                  <div class="card-body">
                    <h5 class="card-title d-flex justify-content-center titulos">Informações</h5>
                    <p class="card-text textos" > A chave para diminuir sua {/*style="text-align: center;"*/}
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
      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb  titulos t-home d-flex justify-content-center">Video</h1>
      </div>

      {/* <!-- inicio video --> */}

      <div class="d-flex justify-content-center mrgt-media">
        <iframe  width="560" height="315"
          src="https://www.youtube.com/embed/4eoM26ZmHd0" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe> {/*style="border-radius: 20px 5px 20px 5px;"*/}
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
          <img src="./img/teste-ebook.jpg" alt="Imagem e-book" title="Imagem e-book" ></img> {/*style="width: 100%;"*/}
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
          <p class="textos mrgt-pequena" >Somos um grupo de desenvolvedores que entendemos {/*style="clear: left;"*/}
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
          <p class="textos mrgt-pequena" >Ajudar pessoas que possuem problemas com {/*style="clear: left;"*/}
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
          <p class="textos mrgt-pequena" >Pretendemos nos tornar o maior canal acessível {/*style="clear: left;"*/}
            para ajuda
            contra ansiedade do Brasil, sendo bem-visto e recomendado por conselhos de psicologia de todo o
            país. Nosso
            objetivo é ser capaz de ajudar milhares de pessoas todos os dias a lidarem com essa doença e
            contribuir para
            que o Brasil pare de ser, no ranking da OMS, o pais mais ansioso do Mundo.</p>
        </div>


        <div class="insti-textos">
          <p class="textos mrgt-pequena" >{/*style="clear: left;"*/}<span >{/*style="font-weight: bold;"*/}Humanização:
            </span>
            Cuidado centrado nas pessoas, respeitando todos os usuários.</p>
          <p class="textos mrgt-pequena" >{/*style="clear: left;"*/}<span >{/*style="font-weight: bold;"*/}Compreensão:
            </span>
            Compreendemos que a ansiedade é um problema sério e que deve ser tratada com muita atenção.</p>
          <p class="textos mrgt-pequena" >{/*style="clear: left;"*/}<span >{/*style="font-weight: bold;"*/}Gratidão:
            </span> Somos
            gratos pela possibilidade de auxílio às pessoas principalmente por termos passado por momentos tão
            difíceis.
          </p>
          <p class="textos mrgt-pequena" >{/*style="clear: left;"*/}<span >{/*style="font-weight: bold;"*/}Confiabilidade:
            </span>
            Estabelecer relacionamentos abertos, transparentes e apoiados na confiança mútua.</p>
        </div>
      </div>

      {/* fim parte institucional  */}
    </div>
  </div>  

</>
)}