import React from 'react'
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pranayama from '../../../img/pranayama.jpg'
import Nidra from '../../../img/Yoga-Nidra.png'
import Medita from '../../../img/meditation.jpg'
import { Link } from 'react-router-dom'

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
    <!-- inicio meditação --> */}
    <h1 className="ti-escrita">Exercício de meditação</h1>

    <div className="mrgx-pequena mrgt-pequena mrgb-pequena">
        <div className="row m-0 row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="ho-bor">
                    
                    <Link to="/meditacaoGuiada" className="linkreact"> 

                    <div className="card h-100" style={{border: "0px", position: "static"}}>

                    <img src={Medita} class="card-img-top" alt="Pranayama"/>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                            <h5 className="card-title d-flex justify-content-center titulos">Meditação guiada</h5>
                            <p className="card-text textos " style={{textAlign: 'center'}}>Meditação guiada pela fala
                                para ajudar a diminuir a ansiedade</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>

            {/*
            <!-- card 2 --> */}
            <div className="col">
                <div className="ho-bor">
                   
                    <Link to="/meditacaoPranayama" className="linkreact"> 

                    <div className="card h-100" style={{border: "0px", position: "static"}}>

                        
                        <img src={Pranayama} class="card-img-top" alt="Pranayama"/>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                            <h5 className="card-title d-flex justify-content-center titulos">Meditação com pranayama
                            </h5>
                            <p className="card-text textos " style={{textAlign: 'center'}}>Meditação guiada pela fala,
                                com princípios do controle da entrada e saida de prana (ar), para ajudar a diminuir a ansiedade e trazer um maior controle
                                sob a respiração</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            {/* card 3 */}
            <div className="col">
                <div className="ho-bor">
                    
                    <Link to="/meditacaoExpansao" className="linkreact"> 

                    <div className="card h-100" style={{border: "0px", position: "static"}}>

                    <img src={Nidra} class="card-img-top" alt="Pranayama"/>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                            <h5 className="card-title d-flex justify-content-center titulos">Meditação de expansão
                            </h5>
                            <p className="card-text textos " style={{textAlign: 'center'}}>Meditação guiada que visa a
                                interiorização e aceitação, prove um relaxamento profundo e a possibilidade de entrar no
                                modo alpha</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    {/*
    <!-- fim meditação --> */}



</>
)}