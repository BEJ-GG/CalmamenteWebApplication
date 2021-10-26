import React, { useState, useContext, useEffect } from 'react'
import CalmamenteContext from '../../../context/CalmamenteContext'
import { faQuestionCircle, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';


export default function Estouemcrise(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { token } = useContext(CalmamenteContext);
  
  const [novo, setNovo] = useState({
    cd_diagnostico_usuario: "",
    cd_diagnostico: "",
    cd_usuario: token,
    dt_inicio: ""
  })

  useEffect(() => {
    if (token) {
        fetch("/rest/DiagnosticoUsuario/" + token).then(resp => {
            return (resp.json())
        }).then(data => {
            setNovo(data)
        })
    }
  }, [token])

  // console.log(novo.cd_diagnostico_usuario)

  const [tratamento, setTratamento] = useState({})
  const [retEx, setRetEx] = useState()

    useEffect(() => {
      fetch("/rest/tratamento").then((resp) => {
          return resp.json()
      }).then((resp) => {
          setTratamento(tratamento => ({
              ...tratamento,
              cd_tratamento: resp.map(( p ) => p.cd_tratamento),
              cod_diagnostico_usuario: resp.map(( p ) => p.cd_diagnostico_usuario),
              cd_exercicio: resp.map(( p ) => p.cd_exercicio),
              ds_tratamento: resp.map(( p ) => p.ds_tratamento)
          }))
      }).catch((error) => {
            console.error(error)
        })
      }, [])
    // if(tratamento.cod_diagnostico_usuario){
    //   setRetEx(selecionaEX(tratamento, novo)) 
    //   console.log(tratamento.cod_diagnostico_usuario)
    // }
    // console.log(tratamento.cd_diagnostico_usuario)
    
    function selecionaEX({cd_tratamento, cod_diagnostico_usuario},{cd_diagnostico_usuario}){
      
      for (let i = 0; i < cod_diagnostico_usuario.length; i++) {
        if (cod_diagnostico_usuario[i] === cd_diagnostico_usuario) {          
          console.log(cd_tratamento[i])
        }
      }
      
    
    }
    

    
   


  return (
    <>
      <HeaderPosCadas/>
      {/* <!-- inicio personalizar --> */}

      <div className=" d-flex justify-content-end mrgr-media mrgt-pequena ">
        <button onClick={handleShow} style={{ border: "none", backgroundColor: "rgba(240, 248, 255, 0)" }}>
          <FontAwesomeIcon icon={faCog} className="tam-personalizar" style={{ color: "black" }} data-bs-toggle="modal" data-bs-target="#exampleModal" /></button>
      </div>
      {/* <!-- Inicio Modal do personalizar --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personalisar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <!-- inicio 1 --> */}
          <Form className="foge-modal">
            <fieldset>
              <div className="che-modal ">              
                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
            </fieldset>
          </Form>
          <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas ic-modal" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h5 className="titu-modal" style={{ fontWeight: 'bold' }}>lorem</h5>
              <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero quos quidem
                nobis sed earum
                aliquam provident sequi eaque fugit</p>
            </div>
          </div>
          {/* <!-- fim 1 --> */}
          <div className="modLinha"></div>
          {/* <!-- inicio 2 --> */}
          <Form className="foge-modal">
            <fieldset>
              <div className="che-modal">
                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
            </fieldset>
          </Form>
          <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas ic-modal" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h5 className="titu-modal" style={{ fontWeight: 'bold' }}>lorem</h5>
              <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero quos quidem
                nobis sed earum
                aliquam provident sequi eaque fugit</p>
            </div>
          </div>
          {/* <!-- fim 2 --> */}
          <div className="modLinha"></div>
          {/* <!-- inicio 3 --> */}
          <Form className="foge-modal">
            <fieldset>
              <div className=" che-modal">
                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
            </fieldset>
          </Form>
          <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas ic-modal" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h5 className="titu-modal" style={{ fontWeight: 'bold' }}>lorem</h5>
              <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero quos quidem
                nobis sed earum
                aliquam provident sequi eaque fugit</p>
            </div>
          </div>
          {/* <!-- fim 3 --> */}
          <div className="modLinha"></div>
          {/* <!-- inicio 4 --> */}
          <Form className="foge-modal">
            <fieldset>
              <div className="che-modal">
                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
            </fieldset>
          </Form>
          <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas ic-modal" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h5 className="titu-modal" style={{ fontWeight: 'bold' }}>lorem</h5>
              <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero quos quidem
                nobis sed earum
                aliquam provident sequi eaque fugit</p>
            </div>
          </div>
          {/* <!-- fim 4 --> */}
          <div className="modLinha"></div>
          {/* <!-- inicio 5 --> */}
          <Form className="foge-modal">
            <fieldset>
              <div className="che-modal">
                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
            </fieldset>
          </Form>
          <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas ic-modal" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h5 className="titu-modal" style={{ fontWeight: 'bold' }}>lorem</h5>
              <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero quos quidem
                nobis sed earum
                aliquam provident sequi eaque fugit</p>
            </div>
          </div>
          {/* <!-- fim 5 --> */}
          <div className="modLinha"></div>
          {/* <!-- inicio 6 --> */}
          <Form className="foge-modal">
            <fieldset>
              <div className=" che-modal">
                <Form.Check type="switch" id="custom-switch" label="" />
              </div>
            </fieldset>
          </Form>
          <div className=" row col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ic-ge-modal">
              <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas ic-modal" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h5 className="titu-modal" style={{ fontWeight: 'bold' }}>lorem</h5>
              <p className="te-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero quos quidem
                nobis sed earum
                aliquam provident sequi eaque fugit</p>
            </div>
          </div>
          {/* <!-- fim 6 --> */}


        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <div className="modal-but-ajuda">
            <button className="but-modal-ajuda"> <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black' }} className="fas modal-ajuda" /></button>
            <div className="dicaTexto">Esta é a área para personalizar quais exercícios deseja fazer ou não. Você pode ativar ou desativar algum exercício de acordo com sua preferência. </div>
          </div>
        </Modal.Footer>
      </Modal>
      

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

      <FooterPosCadas/>
    </>
  )
}