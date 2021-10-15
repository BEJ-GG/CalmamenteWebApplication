import React from 'react'
import { faQuestionCircle, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Estouemcrise() {



  return (
    <>

      {/* <!-- inicio personalizar --> */}

      <div className=" d-flex justify-content-end mrgr-media mrgt-pequena ">
        <button style={{ border: "none", backgroundColor: "rgba(240, 248, 255, 0)" }}>
          <FontAwesomeIcon icon={faCog} className="tam-personalizar" style={{ color: "black" }} data-bs-toggle="modal" data-bs-target="#exampleModal" /></button>
      </div>

      {/* <!-- Inicio Modal do personalizar --> */}
      <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">Personalizar</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
              {/* <!-- inicio 1 --> */}
              <form className="foge-modal">
                <fieldset>
                  <div className="modal-nume">
                    <select name="txtNumero" id="idNumero" className="form-select form-select-sm ">
                      <option value="um" className="itens">1°</option>
                      <option value="dois" className="itens">2°</option>
                      <option value="tres" className="itens">3°</option>
                      <option value="quatro" className="itens">4°</option>
                      <option value="cinco" className="itens">5°</option>
                      <option value="seis" className="itens">6°</option>
                    </select>
                  </div>
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
                  <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
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
                  <div className="modal-nume">
                    <select name="txtNumero" id="idNumero" className="form-select form-select-sm ">
                      <option value="um" className="itens">1°</option>
                      <option value="dois" className="itens">2°</option>
                      <option value="tres" className="itens">3°</option>
                      <option value="quatro" className="itens">4°</option>
                      <option value="cinco" className="itens">5°</option>
                      <option value="seis" className="itens">6°</option>
                    </select>
                  </div>
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
                  <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
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
                  <div className="modal-nume">
                    <select name="txtNumero" id="idNumero" className="form-select form-select-sm ">
                      <option value="um" className="itens">1°</option>
                      <option value="dois" className="itens">2°</option>
                      <option value="tres" className="itens">3°</option>
                      <option value="quatro" className="itens">4°</option>
                      <option value="cinco" className="itens">5°</option>
                      <option value="seis" className="itens">6°</option>
                    </select>
                  </div>
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
                  <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
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
                  <div className="modal-nume">
                    <select name="txtNumero" id="idNumero" className="form-select form-select-sm ">
                      <option value="um" className="itens">1°</option>
                      <option value="dois" className="itens">2°</option>
                      <option value="tres" className="itens">3°</option>
                      <option value="quatro" className="itens">4°</option>
                      <option value="cinco" className="itens">5°</option>
                      <option value="seis" className="itens">6°</option>
                    </select>
                  </div>
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
                  <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
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
                  <div className="modal-nume">
                    <select name="txtNumero" id="idNumero" className="form-select form-select-sm ">
                      <option value="um" className="itens">1°</option>
                      <option value="dois" className="itens">2°</option>
                      <option value="tres" className="itens">3°</option>
                      <option value="quatro" className="itens">4°</option>
                      <option value="cinco" className="itens">5°</option>
                      <option value="seis" className="itens">6°</option>
                    </select>
                  </div>
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
                  <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
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
                  <div className="modal-nume">
                    <select name="txtNumero" id="idNumero" className="form-select form-select-sm ">
                      <option value="um" className="itens">1°</option>
                      <option value="dois" className="itens">2°</option>
                      <option value="tres" className="itens">3°</option>
                      <option value="quatro" className="itens">4°</option>
                      <option value="cinco" className="itens">5°</option>
                      <option value="seis" className="itens">6°</option>
                    </select>
                  </div>
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
                  <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 6 --> */}
            </div>
            <div className="modal-footer" style={{ display: "flex", justifyContent: "center" }}>
              <div className="modal-but-ajuda">
                <button className="but-modal-ajuda ">
                  <FontAwesomeIcon icon={faQuestionCircle} className="modal-ajuda" style={{ color: "black" }} />
                </button>
                <div className="dicaTexto">Esta é a área para personalizar quais exercícios deseja fazer ou não.
                  Na caixa de
                  seleção é onde você personalizará a ordem que eles aparecerão no quadro, e você também
                  pode
                  ativar ou
                  desativar algum exercício de acordo com sua preferência. </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- fim modal do personalizar --> */}
      {/* // <!-- fim personalizar --> */}
      {/* // <!-- inicio card do iframe  --> */}
      {/* <div class="card  quadro-ifra">
        <iframe src="ifra-estoucrise.html" id="ifra-quadro"></iframe>
        <Iframe src={IfraEstouemcrise} id="ifra-quadro" />
        UseState 
        <Acrise id="ifra-quadro"/>
        <IfraEstouemcrise id="ifra-quadro" />
        <div class="card-body">
          <div class="position-relative m-4">
            <div style={{ height: "1px" }}>
              <div style={{ width: "50%" }}></div>
            </div>
            <button type="button" class="position-absolute  translate-middle btn btn-primary"
              id="inicio">Voltar</button>
            <a href="../home/Home.jsx"><button type="button" class="position-absolute translate-middle btn btn-primary"
              id="estouCalmo">Estou mais
              calmo</button></a>
            <button onClick="" type="button" class="position-absolute  translate-middle btn btn-primary"
              id="estouCrise">Próximo</button>
          </div>

        </div>
      </div> */}
      {/* // <!-- fim card do iframe  --> */}

      {/* // <!-- inicio dos cards de soluções --> */}
      <div className="mrgx-pequena mrgt-pequena">
        <div className="row m-0 row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <a href="" className="linkreact">
              <div className="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div className="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{ color: "black" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p className="card-text textos" style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="" className="linkreact">
              <div className="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div className="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{ color: "black" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p className="card-text textos" style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
            <a href="" className="linkreact">
              <div className="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div className="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{ color: "black" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p className="card-text textos" style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col mrgb-pequena">
            <a href="" className="linkreact">
              <div className="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div className="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{ color: "black" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p className="card-text textos" style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col mrgb-pequena">
            <a href="" className="linkreact">
              <div className="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div className="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{ color: "black" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p className="card-text textos" style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col mrgb-pequena">
            <a href="" className="linkreact">
              <div className="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div className="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{ color: "black" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p className="card-text textos" style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- fim dos cards de soluções --> */}
      {/* </hr> */}
    </>
  )
}