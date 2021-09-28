import React from 'react'
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function MusicaDeUsoTerapeutico() {


return(
<>

   {/*
   <!-- inicio informação --> */}
   <div class="d-flex justify-content-end mrgr-media mrgt-pequena">
      <button style={{border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)'}} data-bs-toggle="modal"
         data-bs-target="#exampleModal">
         <FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" />
      </button>
   </div>

   {/*
   <!-- Inicio Modal do informação --> */}
   <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered">
         <div class="modal-content">
            <div class="modal-header">
               <h4 class="modal-title" id="exampleModalLabel">Personalizar</h4>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
               {/*
               <!-- inicio 1 --> */}
               <form class="foge-modal">
                  <fieldset>
                     <div class="form-switch che-modal">
                        <input type="checkbox" class="form-check-input" id="idAceitar" />
                     </div>
                  </fieldset>
               </form>
               <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                     <i class="fas fa-question-circle ic-modal"></i>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <h5 class="titu-modal">lorem</h5>
                     <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        vero quos
                        quidem
                        nobis sed earum
                        aliquam provident sequi eaque fugit</p>
                  </div>
               </div>
               {/*
               <!-- fim 1 --> */}
               <hr class="mod-linha " size="5" />
               {/*
               <!-- inicio 2 --> */}
               <form class="foge-modal">
                  <fieldset>
                     <div class="form-switch che-modal">
                        <input type="checkbox" class="form-check-input" id="idAceitar" />
                     </div>
                  </fieldset>
               </form>
               <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                     <i class="fas fa-question-circle ic-modal"></i>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <h5 class="titu-modal">lorem</h5>
                     <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        vero quos
                        quidem
                        nobis sed earum
                        aliquam provident sequi eaque fugit</p>
                  </div>
               </div>
               {/*
               <!-- fim 2 --> */}
               <hr class="mod-linha" size="5" />
               {/*
               <!-- inicio 3 --> */}
               <form class="foge-modal">
                  <fieldset>
                     <div class="form-switch che-modal">
                        <input type="checkbox" class="form-check-input" id="idAceitar" />
                     </div>
                  </fieldset>
               </form>
               <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                     <i class="fas fa-question-circle ic-modal"></i>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <h5 class="titu-modal">lorem</h5>
                     <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        vero quos
                        quidem
                        nobis sed earum
                        aliquam provident sequi eaque fugit</p>
                  </div>
               </div>
               {/*
               <!-- fim 3 --> */}
               <hr class="mod-linha" size="5" />
               {/*
               <!-- inicio 4 --> */}
               <form class="foge-modal">
                  <fieldset>
                     <div class="form-switch che-modal">
                        <input type="checkbox" class="form-check-input" id="idAceitar" />
                     </div>
                  </fieldset>
               </form>
               <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                     <i class="fas fa-question-circle ic-modal"></i>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <h5 class="titu-modal">lorem</h5>
                     <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        vero quos
                        quidem
                        nobis sed earum
                        aliquam provident sequi eaque fugit</p>
                  </div>
               </div>
               {/*
               <!-- fim 4 --> */}
               <hr class="mod-linha" size="5" />
               {/*
               <!-- inicio 5 --> */}
               <form class="foge-modal">
                  <fieldset>
                     <div class="form-switch che-modal">
                        <input type="checkbox" class="form-check-input" id="idAceitar" />
                     </div>
                  </fieldset>
               </form>
               <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                     <i class="fas fa-question-circle ic-modal"></i>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <h5 class="titu-modal">lorem</h5>
                     <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        vero quos
                        quidem
                        nobis sed earum
                        aliquam provident sequi eaque fugit</p>
                  </div>
               </div>
               {/*
               <!-- fim 5 --> */}
               <hr class="mod-linha" size="5" />
               {/*
               <!-- inicio 6 --> */}
               <form class="foge-modal">
                  <fieldset>
                     <div class="form-switch che-modal">
                        <input type="checkbox" class="form-check-input" id="idAceitar" />
                     </div>
                  </fieldset>
               </form>
               <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                     <i class="fas fa-question-circle ic-modal"></i>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <h5 class="titu-modal">lorem</h5>
                     <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                        vero quos
                        quidem
                        nobis sed earum
                        aliquam provident sequi eaque fugit</p>
                  </div>
               </div>
               {/*
               <!-- fim 6 --> */}
            </div>
            <div class="modal-footer" style={{display: 'flex', justifyContent: 'center'}}>
               <div class="modal-but-ajuda">
                  <button class="but-modal-ajuda "><i class="fas fa-question-circle modal-ajuda"></i></button>
                  <div class="dicaTexto">Esta é a área para personalizar quais exercícios deseja fazer ou
                     não. Você
                     pode
                     ativar ou desativar algum exercício de
                     acordo com sua preferência. </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/*
   <!-- fim modal do informação  --> */}

   {/*
   <!-- fim informação --> */}

   {/*
   <!-- inicio musica de uso terapeutico --> */}
   <h1 className="ti-escrita">Exercício de musica como uso terapeutico</h1>

   <div className="mrgx-pequena mrgt-pequena mrgb-pequena">
      <div className="row m-0 row-cols-1 row-cols-md-2 g-4">
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

                  <iframe className="card-img-top" width="560" height="315"
                     src="https://www.youtube.com/embed/cyOnSOPGTrQ" title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> A constância rítmica e sonora
                        emitida pelos mesmos tipos de instrumentos,
                        com pequenas variações melódicas e harmônicas, e a inserção de leves
                        sonoridades como o de um movimento constante de águas e emissões sonoras de
                        animais, podem remeter a ambientes seguros e tendem a fazer com que nos
                        sintamos integrados a um todo maior, o qual respeitamos e confiamos – a natureza
                        com suas energias e forças inexoráveis, inspirando-nos assim confiança e,
                        consequentemente tranquilidade e paz interior.
                     </p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>

         {/*
         <!-- card 2 --> */}
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

                  <iframe className="card-img-top" width="560" height="315"
                     src="https://www.youtube.com/embed/RNS9QHVIoB8" title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> A constância rítmica e sonora
                        emitida pelos mesmos tipos de instrumentos,
                        com pequenas variações melódicas e harmônicas, e a inserção de leves
                        sonoridades dos movimentos constantes das águas em contato com a planta
                        bambu, remetem, de alguma forma, a questões de longevidade e confiança,
                        podendo baixar os níveis de ansiedade, promovendo tranquilidade e paz.</p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>
         {/* card 3 */}
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

                  <iframe className="card-img-top" width="560" height="315"
                     src="https://www.youtube.com/embed/-RH-lM2BMcQ" title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> O ritmo marcado somente pela
                        duração das notas musicais e/ou pelas
                        mudanças no acompanhamento harmônico, ou seja, a execução de notas mais
                        longas e harmonias com menos movimentos, caracterizado principalmente por
                        baixos mais constantes e fixos, auxiliam para a diminuição do ritmo dos
                        pensamentos, caso a pessoa consiga colocar a mente exclusivamente para
                        acompanhar os movimentos musicais.</p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>

         {/*
         <!-- card 4 --> */}
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

                  <iframe className="card-img-top" width="560" height="315"
                     src="https://www.youtube.com/embed/QJ6j77GjdFQ" title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> Um ritmo definido somente pela
                        longa duração das notas musicais,
                        composto somente pelas fundamentais na composição harmônica, auxiliam para a
                        diminuição do ritmo dos pensamentos, caso a pessoa consiga colocar a mente
                        exclusivamente para acompanhar os movimentos musicais.
                     </p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>

         
         {/*
         <!-- card 5 --> */}
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

               <iframe className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/dNGkWXGFm7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> Sons de movimento de água no fundo do mar, remetem às sonoridades do
ventre materno. Podem acalmar durante um tempo, porém, dependendo do caso e 
4
do tempo de exposição, pode provocar uma espécie de regressão emocional,
momentos de angústia e até mesmo provocar um efeito iatrogênico, caso a pessoa
exposta a esse tipo de sonoridade tenha experimentado momentos de medo, por
exemplo, durante a gestação.

                     </p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>

         
         {/*
         <!-- card 6 --> */}
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

                  <iframe className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/thV2k1Ws3x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> Embora sejam sons gravados, os ritmos e sons fluem sem o controle
humano, pois que ocorrem naturalmente. Essa rítmica mais livre, porém, de uma
constância maior, remete o subconsciente ao fato de que algo maior está no
comando, o que pode levar a uma certa confiança e tranquilidade, diminuindo os
níveis de ansiedade, caso a pessoa se entregue com esse propósito a esse tipo de
escuta. Porém, dependendo da pessoa e das experiências vividas por ela, pode
provocar insegurança e até mesmo sensação de impotência.
                     </p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>

         
         {/*
         <!-- card 7 --> */}
         <div className="col">
            <div className="ho-bor">
               {/*
               <Link to="/" className="linkreact"> */}

               <div className="card h-100" style={{border: "0px", position: "static"}}>

               <iframe className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/7Lm2skxgM6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <div className="d-flex justify-content-center mrgt-media">
                  </div>
                  <div className="card-body esp-car">
                     <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                     </h5>
                     <p className="card-text textos " style={{textAlign: 'justify'}}> A constância rítmica e sonora emitida pelos mesmos tipos de instrumentos,
com pequenas variações melódicas e harmônicas, e a inserção de leves
sonoridades como o de um movimento constante de águas e emissões sonoras de
animais, podem remeter a ambientes seguros e tendem a fazer com que nos
sintamos integrados a um todo maior, o qual respeitamos e confiamos – a natureza
com suas energias e forças inexoráveis, inspirando-nos assim confiança e,
consequentemente tranquilidade e paz interior.
                     </p>
                  </div>
               </div>
               {/* </Link> */}
            </div>
         </div>

         
        
      </div>
   </div>

   {/*
   <!-- fim Musica de uso terapeutico --> */}



</>
)}