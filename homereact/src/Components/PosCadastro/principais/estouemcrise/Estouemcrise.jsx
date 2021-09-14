import React from 'react'
import { faQuestionCircle, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Estouemcrise() {


  return (
    <>

      {/* <!-- inicio personalizar --> */}
      {/* <div class=" d-flex justify-content-end mrgr-media mrgt-pequena ">
        <button style={{ border: "none", backgroundColor: "rgba(240, 248, 255, 0)" }}><i class="fas fa-cog tam-personalizar"
          data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button>
      </div> */}

      <div class=" d-flex justify-content-end mrgr-media mrgt-pequena ">
        <button style={{ border: "none", backgroundColor: "rgba(240, 248, 255, 0)" }}>
        <FontAwesomeIcon icon={faCog} className="tam-personalizar" style={{color: "black"}}  data-bs-toggle="modal" data-bs-target="#exampleModal"/></button>
      </div>

      {/* <!-- Inicio Modal do personalizar --> */}
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Personalizar</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              {/* <!-- inicio 1 --> */}
              <form class="foge-modal">
                <fieldset>
                  <div class="modal-nume">
                    <select name="txtNumero" id="idNumero" class="form-select form-select-sm ">
                      <option value="um" class="itens">1°</option>
                      <option value="dois" class="itens">2°</option>
                      <option value="tres" class="itens">3°</option>
                      <option value="quatro" class="itens">4°</option>
                      <option value="cinco" class="itens">5°</option>
                      <option value="seis" class="itens">6°</option>
                    </select>
                  </div>
                  <div class="form-switch che-modal">
                    <input type="checkbox" class="form-check-input" id="idAceitar" />
                  </div>
                </fieldset>
              </form>
              <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{color: "black"}} />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <h5 class="titu-modal">lorem</h5>
                  <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 1 --> */}
              <hr class="mod-linha " size="5" />
              {/* <!-- inicio 2 --> */}
              <form class="foge-modal">
                <fieldset>
                  <div class="modal-nume">
                    <select name="txtNumero" id="idNumero" class="form-select form-select-sm ">
                      <option value="um" class="itens">1°</option>
                      <option value="dois" class="itens">2°</option>
                      <option value="tres" class="itens">3°</option>
                      <option value="quatro" class="itens">4°</option>
                      <option value="cinco" class="itens">5°</option>
                      <option value="seis" class="itens">6°</option>
                    </select>
                  </div>
                  <div class="form-switch che-modal">
                    <input type="checkbox" class="form-check-input" id="idAceitar" />
                  </div>
                </fieldset>
              </form>
              <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{color: "black"}} />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <h5 class="titu-modal">lorem</h5>
                  <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 2 --> */}
              <hr class="mod-linha" size="5" />
              {/* <!-- inicio 3 --> */}
              <form class="foge-modal">
                <fieldset>
                  <div class="modal-nume">
                    <select name="txtNumero" id="idNumero" class="form-select form-select-sm ">
                      <option value="um" class="itens">1°</option>
                      <option value="dois" class="itens">2°</option>
                      <option value="tres" class="itens">3°</option>
                      <option value="quatro" class="itens">4°</option>
                      <option value="cinco" class="itens">5°</option>
                      <option value="seis" class="itens">6°</option>
                    </select>
                  </div>
                  <div class="form-switch che-modal">
                    <input type="checkbox" class="form-check-input" id="idAceitar" />
                  </div>
                </fieldset>
              </form>
              <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{color: "black"}} />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <h5 class="titu-modal">lorem</h5>
                  <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 3 --> */}
              <hr class="mod-linha" size="5" />
              {/* <!-- inicio 4 --> */}
              <form class="foge-modal">
                <fieldset>
                  <div class="modal-nume">
                    <select name="txtNumero" id="idNumero" class="form-select form-select-sm ">
                      <option value="um" class="itens">1°</option>
                      <option value="dois" class="itens">2°</option>
                      <option value="tres" class="itens">3°</option>
                      <option value="quatro" class="itens">4°</option>
                      <option value="cinco" class="itens">5°</option>
                      <option value="seis" class="itens">6°</option>
                    </select>
                  </div>
                  <div class="form-switch che-modal">
                    <input type="checkbox" class="form-check-input" id="idAceitar" />
                  </div>
                </fieldset>
              </form>
              <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{color: "black"}} />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <h5 class="titu-modal">lorem</h5>
                  <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 4 --> */}
              <hr class="mod-linha" size="5" />
              {/* <!-- inicio 5 --> */}
              <form class="foge-modal">
                <fieldset>
                  <div class="modal-nume">
                    <select name="txtNumero" id="idNumero" class="form-select form-select-sm ">
                      <option value="um" class="itens">1°</option>
                      <option value="dois" class="itens">2°</option>
                      <option value="tres" class="itens">3°</option>
                      <option value="quatro" class="itens">4°</option>
                      <option value="cinco" class="itens">5°</option>
                      <option value="seis" class="itens">6°</option>
                    </select>
                  </div>
                  <div class="form-switch che-modal">
                    <input type="checkbox" class="form-check-input" id="idAceitar" />
                  </div>
                </fieldset>
              </form>
              <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{color: "black"}} />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <h5 class="titu-modal">lorem</h5>
                  <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 5 --> */}
              <hr class="mod-linha" size="5" />
              {/* <!-- inicio 6 --> */}
              <form class="foge-modal">
                <fieldset>
                  <div class="modal-nume">
                    <select name="txtNumero" id="idNumero" class="form-select form-select-sm ">
                      <option value="um" class="itens">1°</option>
                      <option value="dois" class="itens">2°</option>
                      <option value="tres" class="itens">3°</option>
                      <option value="quatro" class="itens">4°</option>
                      <option value="cinco" class="itens">5°</option>
                      <option value="seis" class="itens">6°</option>
                    </select>
                  </div>
                  <div class="form-switch che-modal">
                    <input type="checkbox" class="form-check-input" id="idAceitar" />
                  </div>
                </fieldset>
              </form>
              <div class=" row col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
                <FontAwesomeIcon icon={faQuestionCircle} className="ic-modal" style={{color: "black"}} />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <h5 class="titu-modal">lorem</h5>
                  <p class="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
                    quos
                    quidem
                    nobis sed earum
                    aliquam provident sequi eaque fugit</p>
                </div>
              </div>
              {/* <!-- fim 6 --> */}
            </div>
            <div class="modal-footer" style={{display: "flex", justifyContent: "center"}}>
              <div class="modal-but-ajuda">
                <button class="but-modal-ajuda ">
                <FontAwesomeIcon icon={faQuestionCircle} className="modal-ajuda" style={{color: "black"}} />
                </button>
                <div class="dicaTexto">Esta é a área para personalizar quais exercícios deseja fazer ou não.
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
      <div class="card  quadro-ifra">
        <iframe src="ifra-estoucrise.html" id="ifra-quadro"></iframe>
        <div class="card-body">
          <div class="position-relative m-4">
            <div style={{height: "1px"}}>
              <div style={{width: "50%"}}></div>
            </div>
            <button type="button" class="position-absolute  translate-middle btn btn-primary"
              id="inicio">Voltar</button>
            <a href="home.html"><button type="button" class="position-absolute translate-middle btn btn-primary"
              id="estouCalmo">Estou mais
              calmo</button></a>
            <button type="button" class="position-absolute  translate-middle btn btn-primary"
              id="estouCrise">Próximo</button>
          </div>

        </div>
      </div>
      {/* // <!-- fim card do iframe  --> */}

      {/* // <!-- inicio dos cards de soluções --> */}
      <div class="mrgx-pequena mrgt-pequena">
        <div class="row m-0 row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <a href="" className="linkreact">
              <div class="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div class="d-flex justify-content-center mrgt-media">
                <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{color: "black"}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p class="card-text textos" style={{textAlign: "justify"}}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="" className="linkreact">
              <div class="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div class="d-flex justify-content-center mrgt-media">
                <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{color: "black"}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p class="card-text textos" style={{textAlign: "justify"}}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col">
            <a href="" className="linkreact">
              <div class="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div class="d-flex justify-content-center mrgt-media">
                <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{color: "black"}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p class="card-text textos" style={{textAlign: "justify"}}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col mrgb-pequena">
            <a href="" className="linkreact">
              <div class="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div class="d-flex justify-content-center mrgt-media">
                <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{color: "black"}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p class="card-text textos" style={{textAlign: "justify"}}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col mrgb-pequena">
            <a href="" className="linkreact">
              <div class="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div class="d-flex justify-content-center mrgt-media">
                <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{color: "black"}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p class="card-text textos" style={{textAlign: "justify"}}>Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Sed, optio! Dolorem consectetur quibusdam quas odit at! Ipsa eos
                    recusandae </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col mrgb-pequena">
            <a href="" className="linkreact">
              <div class="card h-100  ho-bor" >
                {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                <div class="d-flex justify-content-center mrgt-media">
                  <FontAwesomeIcon icon={faQuestionCircle} className="tam-funcprin" style={{color: "black"}} />
                </div>
                <div class="card-body">
                  <h5 class="card-title d-flex justify-content-center titulos">exercícios</h5>
                  <p class="card-text textos" style={{textAlign: "justify"}}>Lorem, ipsum dolor sit amet
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