import React, {useEffect, useState} from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Logo from '../../img/logo.png'
import logoIcon from '../../img/logo-icon.png'
import facebook from '../../img/facebook-logo.png'
import twitter from '../../img/twitter-logo.png'
import instagram from '../../img/instagram-logo.png'
import Estouemcrise from '../../PosCadastro/principais/estouemcrise/Estouemcrise'
import Queromeacalmar from '../../PosCadastro/principais/queromeacalmar/Queromeacalmar';
import Informacoes from '../../PosCadastro/principais/informacoes/Informacoes';
// import Iframe from 'react-iframe'
// import IfraEstouemcriseCadas from './IfraEstouemcriseCadas'
import Home from '../../PosCadastro/principais/home/Home'


export default function Chatbot() {

    const [instance, setInstance] = useState(null);
 
  
  
  // Once the component has mounted, fire onLoadWebChatCallback to capture the widget instance.
  useEffect(() => {
    onLoadWebChatCallback((wacInstance) => {
      setInstance(wacInstance);
      wacInstance.render();
    })
  }, []);


return (
<>
    <div>
        <div id="main">
            {/*
            <!-- inicio menu  --> */}
            <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-center back-menu">
                <div>
                    <a href="../InicioCal/Index.jsx" class="m-0"> <img src={Logo}
                            alt="cerebro meditando, nome: calmamente" class="logo m-0" /> </a>
                </div>
            </nav>
            {/*
            <!-- fim menu  --> */}

            {/*
            <!-- inicio card do iframe  --> */}
            <h1 class="ti-chat">Vamos conversar um pouco? Nos ajudará a dar um melhor direcionamento pra você.
            </h1>
            <div class="card chat-ifra">
                <div id="ifra-quadro"></div>
                <div class="card-body">
                    <div class="position-relative m-4">
                        <div style={{height: '1px'}}>
                            <div style={{width: '50%'}}></div>
                        </div>
                        <a href="../../PosCadastro/principais/home/Home.jsx">
                            <button type="button" class="position-absolute  translate-middle btn btn-primary"
                                id="agoranao">Agora
                                não...</button>
                        </a>
                        <a href="../../PosCadastro/principais/home/Home.jsx">
                            <button type="button" class="position-absolute  translate-middle btn btn-primary"
                                id="conti">Continuar</button>
                        </a>
                    </div>
                </div>
            </div>
            {/*
            <!-- fim card do iframe  --> */}

        </div>
    </div>

    {/*
    <!-- inicio rodapé --> */}
    <footer class="bg-dark m-0" id="roda">
        <div class=" rodape">
            <div class="rodape-icone">
                <img src={logoIcon} style={{width: "100%"}} alt="" />
            </div>

            <div class="d-flex justify-content-center align-items-start mrgr-grande" style={{width: "100%"}}>
                <ul class="rodape-itens mx-1">
                    <li>
                        <Link to="/" class="linkreact text-light roda-link font-weight-bold itens">Estou em
                        crise</Link>
                    </li>
                    <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                </ul>

                <ul class="rodape-itens mx-1">
                    <li>
                        <Link to="/" class="linkreact text-light roda-link font-weight-bold itens">Quero me
                        acalmar</Link>
                    </li>
                    <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de pré-crise </li>
                </ul>

                <ul class="rodape-itens mx-1">
                    <li>
                        <Link to="/" class="linkreact text-light roda-link font-weight-bold itens">Informações</Link>
                    </li>
                    <li class="text-muted roda-link itens">E-books</li>
                    <li class="text-muted roda-link itens">Pesquisas</li>
                    <li class="text-muted roda-link itens">Vídeos</li>
                </ul>
            </div>

            <div class="rodape-contatos ">
                <ul class="rodape-itens list-group list-group-horizontal list-group-horizontal-sm list-group-horizontal-md
          list-group-horizontal-xl">
                    <li class="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={instagram}
                                alt="" /></a></li>
                    <li class="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={twitter}
                                alt="" /></a></li>
                    <li class="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={facebook}
                                alt="" /></a></li>
                </ul>
                <p class="text-light roda-email itens">contatobejgg@gmail.com</p>
            </div>
        </div>
    </footer>
    {/*
    <!-- fim rodapé  --> */}



</>


)

/**
 * Handles embedding web chat onto the page and firing a callback once the widget has been created.
 */
 function onLoadWebChatCallback(callback) {
    const el = document.querySelector("#ifra-quadro")
    window.watsonAssistantChatOptions = {
      integrationID: '3b9a966f-e373-469c-a2b7-c85b004f6fb3',
      region: 'us-south',
      //element é onde deve se passado o elemento html em que ele deve ser renderizado
      element: el,
      onLoad: callback,
      hideCloseButton: true,
      showLauncher: false,
      openChatByDefault: true
    };
  
    setTimeout(function(){const t=document.createElement('script');t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";document.head.appendChild(t);});
  }


}