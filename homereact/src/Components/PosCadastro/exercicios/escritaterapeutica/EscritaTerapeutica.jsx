import React from 'react'
import { faInfoCircle, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EscritaTerapeutica() {
    return (
        <>
            <div id="container">
                <div id="main">

                    {/* <!-- inicio informação --> */}
                    <div className="d-flex justify-content-end mrgr-media mrgt-pequena">
                        <button style={{ border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)' }} data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" /></button>

                    </div>

                    {/* <!-- Inicio Modal do informação --> */}
                    <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="exampleModalLabel">Personalizar</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body ">
                                    {/* <!-- inicio 1 --> */}
                                    <form class="foge-modal">
                                        <fieldset>
                                            <div className="form-switch che-modal">
                                                <input type="checkbox" className="form-check-input" id="idAceitar" />
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{ color: "black" }} />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h5 className="titu-modal">lorem</h5>
                                            <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                vero quos
                                                quidem
                                                nobis sed earum
                                                aliquam provident sequi eaque fugit</p>
                                        </div>
                                    </div>
                                    {/* <!-- fim 1 --> */}
                                    <hr className="mod-linha " size="5" />
                                    {/* <!-- inicio 2 --> */}
                                    <form className="foge-modal">
                                        <fieldset>
                                            <div className="form-switch che-modal">
                                                <input type="checkbox" className="form-check-input" id="idAceitar" />
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{ color: "black" }} />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h5 className="titu-modal">lorem</h5>
                                            <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                vero quos
                                                quidem
                                                nobis sed earum
                                                aliquam provident sequi eaque fugit</p>
                                        </div>
                                    </div>
                                    {/* <!-- fim 2 --> */}
                                    <hr className="mod-linha" size="5" />
                                    {/* <!-- inicio 3 --> */}
                                    <form className="foge-modal">
                                        <fieldset>
                                            <div className="form-switch che-modal">
                                                <input type="checkbox" className="form-check-input" id="idAceitar" />
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{ color: "black" }} />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h5 className="titu-modal">lorem</h5>
                                            <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                vero quos
                                                quidem
                                                nobis sed earum
                                                aliquam provident sequi eaque fugit</p>
                                        </div>
                                    </div>
                                    {/* <!-- fim 3 --> */}
                                    <hr className="mod-linha" size="5" />
                                    {/* <!-- inicio 4 --> */}
                                    <form className="foge-modal">
                                        <fieldset>
                                            <div className="form-switch che-modal">
                                                <input type="checkbox" className="form-check-input" id="idAceitar" />
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{ color: "black" }} />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h5 className="titu-modal">lorem</h5>
                                            <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                vero quos
                                                quidem
                                                nobis sed earum
                                                aliquam provident sequi eaque fugit</p>
                                        </div>
                                    </div>
                                    {/* <!-- fim 4 --> */}
                                    <hr className="mod-linha" size="5" />
                                    {/* <!-- inicio 5 --> */}
                                    <form className="foge-modal">
                                        <fieldset>
                                            <div className="form-switch che-modal">
                                                <input type="checkbox" className="form-check-input" id="idAceitar" />
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{ color: "black" }} />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h5 className="titu-modal">lorem</h5>
                                            <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                vero quos
                                                quidem
                                                nobis sed earum
                                                aliquam provident sequi eaque fugit</p>
                                        </div>
                                    </div>
                                    {/* <!-- fim 5 --> */}
                                    <hr className="mod-linha" size="5" />
                                    {/* <!-- inicio 6 --> */}
                                    <form className="foge-modal">
                                        <fieldset>
                                            <div className="form-switch che-modal">
                                                <input type="checkbox" className="form-check-input" id="idAceitar" />
                                            </div>
                                        </fieldset>
                                    </form>
                                    <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{ color: "black" }} />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h5 className="titu-modal">lorem</h5>
                                            <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                vero quos
                                                quidem
                                                nobis sed earum
                                                aliquam provident sequi eaque fugit</p>
                                        </div>
                                    </div>
                                    {/* <!-- fim 6 --> */}
                                </div>
                                <div className="modal-footer" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="modal-but-ajuda">
                                        <button className="but-modal-ajuda ">
                                            <FontAwesomeIcon icon={faQuestionCircle} className="modal-ajuda" style={{ color: "black" }} />
                                        </button>
                                        <div className="dicaTexto">Esta é a área para personalizar quais exercícios deseja fazer ou
                                            não. Você
                                            pode
                                            ativar ou desativar algum exercício de
                                            acordo com sua preferência. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fim modal do informação  --> */}

                    {/* <!-- fim informação --> */}

                    {/* <!-- inicio escrita terapêutica  --> */}
                    <h1 className="ti-escrita">Escrita terapêutica</h1>
                    <div className="formul-exercicios">
                        <div className="for-exercicios">
                            <form action="">
                                <fieldset>
                                    <textarea className="form-control caixa-escrita" name="limescr" id="limescr"
                                        aria-label="With textarea" style={{width: '65vw'}}></textarea>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    {/* <!-- fim escrita tera
            peutica  --> */}

                </div>

            </div>

        </>
    )
}
