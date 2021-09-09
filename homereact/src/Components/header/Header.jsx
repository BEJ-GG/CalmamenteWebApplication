import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../img/logo.png'
import perfil from '../img/icon-usuario.png'

export default function Header() {

   return(
      <>
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
      </>
)}