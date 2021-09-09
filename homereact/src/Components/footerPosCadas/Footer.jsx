import React from 'react'
import logoIcon from '../img/logo-icon.png'
import facebook from '../img/facebook-logo.png'
import twitter from '../img/twitter-logo.png'
import instagram from '../img/instagram-logo.png'

export default function Footer() {

   return(
      <>
      {/* <!-- inicio rodapé --> */}
  <footer class="bg-dark m-0" id="roda">
    <div class=" rodape">
      <div class="rodape-icone">
        <img src={logoIcon} style={{width: "100%"}} alt="" />
      </div>

      <div class="d-flex justify-content-center align-items-start mrgr-grande" style={{width: "100%"}}>
        <ul class="rodape-itens mx-1">
          <li><a href="estouEmCriseCadastro.html" class="linkreact text-light roda-link font-weight-bold itens">Estou em
              crise</a>
          </li>
          <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
        </ul>

        <ul class="rodape-itens mx-1">
          <li><a href="queroMeAcalmar.html" class="linkreact text-light roda-link font-weight-bold itens">Quero me
              acalmar</a>
          </li>
          <li class="text-muted roda-link roda-link-cel itens">Exercícios para momentos de pré-crise </li>
        </ul>

        <ul class="rodape-itens mx-1">
          <li><a href="informacoes.html" class="linkreact text-light roda-link font-weight-bold itens">Informações</a>
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
  {/* <!-- fim rodapé  -->  */}
      </>
)}