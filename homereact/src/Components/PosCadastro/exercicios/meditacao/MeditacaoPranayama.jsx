import React, {useState} from 'react'
import { faInfoCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gifRespira from '../../../img/respiracao.gif'
import instruBarriga from '../../../img/respBarriga.jpg'
import instruEntrelaca from '../../../img/postura.png'
import { Link } from 'react-router-dom';
import VisnhuMudra from '../../../img/vishnu.jpg'
import cicloVish from '../../../img/vishnu.gif'


export default function MeditacaoPranayama() {
    // primeira parte 
    const [secondsX, setSecondsX] = useState(30);
    const [secondsY, setSecondsY] = useState('');
    const [comecar, setComecar] = useState(false);
    const [continuar, setContinuar] = useState(true);
    const [aparecer, setAparecer] = useState({display: 'none'})
    const [invisiIco, setInvisiIco] = useState('icoContinuarRespInvi')
    const [invisiBtn, setInvisiBtn] = useState('btnContinuarRespInvi')
    // fim da primeira parte 
    // inicio parte dois 
    const [secondsX2, setSecondsX2] = useState(30);
    const [secondsY2, setSecondsY2] = useState('');
    const [comecar2, setComecar2] = useState(false);
    const [continuar2, setContinuar2] = useState(true);
    const [aparecer2, setAparecer2] = useState({display: 'none'})
    const [invisiIco2, setInvisiIco2] = useState('icoContinuarRespInvi')
    const [invisiBtn2, setInvisiBtn2] = useState('btnContinuarRespInvi')
    // fim parte dois 
    // inicio parte três 
    const [secondsX3, setSecondsX3] = useState(30);
    const [secondsY3, setSecondsY3] = useState('');
    const [comecar3, setComecar3] = useState(false);
    const [continuar3, setContinuar3] = useState({pointerEvents: 'none'});
    const [continuar3X, setContinuar3X] = useState(true);
    // fim parte três 

    // ------------------------------------

    React.useEffect(() => {  
    // inicio parte um 
    if (comecar == true){  
      if(secondsX > 0){
        setTimeout(() => setSecondsX(secondsX - 1), 1000)
      }
      if (secondsX == 9){
        setSecondsY(0)
      }
      if(secondsX == 0){
        setContinuar(false)
        setInvisiIco('icoContinuarResp')
        setInvisiBtn('btnContinuarResp')
      }
    }
    // fim parte um 
    // inicio parte dois 
    if (comecar2 == true){  
        if(secondsX2 > 0){
          setTimeout(() => setSecondsX2(secondsX2 - 1), 1000)
        }
        if (secondsX2 == 9){
          setSecondsY2(0)
        }
        if(secondsX2 == 0){
          setContinuar2(false)
          setInvisiIco2('icoContinuarResp')
          setInvisiBtn2('btnContinuarResp')
        }
      }
      // fim parte dois
      // inicio parte três 
    if (comecar3 == true){  
        if(secondsX3 > 0){
          setTimeout(() => setSecondsX3(secondsX3 - 1), 1000)
        }
        if (secondsX3 == 9){
          setSecondsY3(0)
        }
        if(secondsX3 == 0){
            setContinuar3({pointerEvents: 'auto'})
            setContinuar3X(false)
          }
      }
      // fim parte três  
  });

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
    <!-- inicio respiração --> */}
    <h1 className="ti-escrita">Exercício de respiração</h1>

    <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
    {/* inicio da parte um  */}
    <div>
    <div className=" mrgt-grande">
        <h4 className="ti-escrita">Primeiro entenda como fazer um pranayama, primeiramente deve-se posicionar a mão em vishnu mudra, posteriormente seguir o ritmo de respiração, alternando entre as narinas. Veja o vídeo de explicação</h4>

    </div>

    <div className=" responsCardResp  mrgb-media">
        <div style={{width: '40%'}}>
            <img src={VisnhuMudra} alt="gif de respiração" className="ImgResp1"  />

        </div>
        <div style={{width: '35%'}}>
            <img src={cicloVish} alt="gif de respiração" className="ImgResp2"  />

        </div>

    </div>
        
    <div className="d-flex justify-content-center mrgb-media">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/SZ8Hrhc4XZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    

    <div className="d-flex justify-content-center">
        <button  className="btnContinuarResp" onClick={()=> setAparecer({display: 'block'})}><FontAwesomeIcon icon={faChevronDown} className={invisiIco}></FontAwesomeIcon></button>
    </div>
    </div>
    {/* fim da parte um  */}


    {/* inicio da parte dois  */}
    <div style={aparecer}>
    <div className=" mrgt-grande">
        <h4 className="ti-escrita">Agora que já sabe fazer um pranayama, inicie a meditação guiada. Obs: Você pode inspirar e expirar no tempo que desejar, desde que seja mais longo do que o normal, e no mesmo tempo.</h4>

    </div>


    <div className="responsCardResp  mrgb-media">
        <div style={{height: '40%'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lkxNig20CW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

    </div>

    </div>
    {/* fim da parte dois  */}

    </div>
    {/* <!-- fim respiração  --> */}



</>
)}