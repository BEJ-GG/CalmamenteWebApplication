import React from 'react'
import { faBook, faExclamationTriangle, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ebook from '../../../img/teste-ebook.jpg'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

export default function Home() {

  return (
    <>
      {/* <!-- inicio dos cards de 3 funcionalidade --> */}
      {/* <!-- card 1 --> */}
      <div className="mrgx-pequena mrgt-pequena">
        <div className="row m-0 row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="ho-bor">
              <Link to="/estouemcrise" className="linkreact">

                <div className="card h-100" style={{ border: "0px", position: "static" }}>

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="tam-funcprin" style={{ color: "crimson" }} />
                  </div>
                  <div className="card-body esp-car">
                    <h5 className="card-title d-flex justify-content-center titulos">Estou em crise</h5>
                    <p className="card-text textos " style={{ textAlign: 'center' }}>Se estiver em uma crise
                      de ansiedade entre
                      aqui
                      para fazer alguns exercícios recomendados pra você, ou personalize seus exercícios.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="col ">
            <div className="ho-bor">
              <Link to="/queromeacalmar" className="linkreact" >

                <div className="card h-100" style={{ border: "0px", position: "static" }}>

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faMugHot} className="tam-funcprin" style={{ color: "rgb(204, 204, 25)" }} />
                  </div>
                  <div className="card-body esp-card">
                    <h5 className="card-title d-flex justify-content-center titulos" style={{ textAlign: 'center' }}>Quero me
                      acalmar</h5>
                    <p className="card-text textos " style={{ textAlign: 'center' }}>Quando estiver
                      começando
                      a ficar ansioso e
                      precisar se acalmar, entre nessa área para exercícios mais específicos pra esse momento, ou
                      personalize
                      seus exercícios.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/*  card 3  */}
          <div className="col">
            <div className="ho-bor">
              <Link to="/informacoes" className="linkreact" >

                <div className="card h-100 " style={{ border: '0px', position: 'static' }} >

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faBook} className="tam-funcprin" style={{ color: "rgb(69, 165, 202)" }} />

                  </div>
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center titulos">Informações</h5>
                    <p className="card-text textos" style={{ textAlign: 'center' }} > A chave para diminuir sua
                      ansiedade é o
                      autoconhecimento e entender como a ansiedade funciona, portanto nessa área você poderá encontrar
                      e-books, pesquisas e vídeos informacionais.</p>
                  </div>
                </div>
              </Link>
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
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/4eoM26ZmHd0" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen style={{ borderRadius: '20px 5px 20px 5px' }}></iframe>
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
          <img src={ebook} alt="Imagem e-book" title="Imagem e-book" style={{ width: '100%' }}></img>
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
          <p class="textos mrgt-pequena" style={{ clear: 'left' }} >Somos um grupo de desenvolvedores que entendemos
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
          <p class="textos mrgt-pequena" style={{ clear: 'left' }} >Ajudar pessoas que possuem problemas com
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
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}>Pretendemos nos tornar o maior canal acessível
            para ajuda
            contra ansiedade do Brasil, sendo bem-visto e recomendado por conselhos de psicologia de todo o
            país. Nosso
            objetivo é ser capaz de ajudar milhares de pessoas todos os dias a lidarem com essa doença e
            contribuir para
            que o Brasil pare de ser, no ranking da OMS, o pais mais ansioso do Mundo.</p>
        </div>


        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{ clear: 'left' }} ><span style={{ fontWeight: 'bold' }}>Humanização:
          </span>
            Cuidado centrado nas pessoas, respeitando todos os usuários.</p>
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}><span style={{ fontWeight: 'bold' }}>Compreensão:
          </span>
            Compreendemos que a ansiedade é um problema sério e que deve ser tratada com muita atenção.</p>
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}><span style={{ fontWeight: 'bold' }}>Gratidão:
          </span> Somos
            gratos pela possibilidade de auxílio às pessoas principalmente por termos passado por momentos tão
            difíceis.
          </p>
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}><span style={{ fontWeight: 'bold' }}>Confiabilidade:
          </span>
            Estabelecer relacionamentos abertos, transparentes e apoiados na confiança mútua.</p>
        </div>
      </div>

      {/* fim parte institucional  */}
    </>
  )
}