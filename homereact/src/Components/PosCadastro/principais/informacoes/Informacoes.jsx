import React from 'react'
import TestEbook from '../../../img/teste-ebook.jpg'
import TestPreto from '../../../img/pretoteste.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Informacoes() {


    return (
        <>
            <div class="paralax-praia">
                <h1 class=" tieb  titulos t-home d-flex justify-content-center">E-Books</h1>
            </div>
            {/* <!-- incio ebooks -->
      <!-- inicio banner ebooks  --> */}
            <div class="card mb-3 ebcard bg-light" style={{border: "none", position: "static"}}>
                <div class="d-flex mrgt-grande row m-0">
                    <div class="  col-12 col-sm-12 col-md-9 col-lg-9 " id="home-book">
                        <img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" style={{width: "100%"}} />
                    </div>
                    <div class="col-12 col-sm-12 col-md-9 col-lg-9">
                        <p class="titulos mrgx-media" id="home-tbook">Titulo do E-book</p>
                        <p class="textos mrgx-media">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eligendi
                            sapiente,
                            totam in qui
                            veniam. Dicta vero voluptas maxime nesciunt excepturi libero! Perspiciatis esse ad commodi maiores odio
                            quia
                            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit, molestiae laudantium modi
                            pariatur
                            sapiente nesciunt ipsa quas nam cum alias totam architecto vero est vel animi doloribu</p>
                    </div>
                </div>
            </div>
            {/* <!-- fim banner ebooks  --> */}
            <div class="paralax-praia-ce " id="idpapra">
                <h1 class=" tieb  titulos t-home d-flex justify-content-center" id="idpraia"></h1>
            </div>
            <div class="row m-0 row-cols-lg-6 row-cols-md-6 row-cols-sm-6 row-cols-xs-12 ">
                <a href="" class="row minl-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />

                    <p class="min-ti-eb">Titulo</p>
                </a>
                <a href="" class="row min-ebooks linkreact" ><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p class="min-ti-eb">Titulo</p>
                </a>
                <a href="" class="row min-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p class="min-ti-eb">Titulo</p>
                </a>
                <a href="" class="row min-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p class="min-ti-eb">Titulo</p>
                </a>
                <a href="" class="row min-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p class="min-ti-eb">Titulo</p>
                </a>


            </div>

            <div class="paralax-praia mrgt-media">
                <h1 class=" tieb  titulos t-home d-flex justify-content-center">Pesquisas</h1>
            </div>
            {/* <!-- inicio pdf  --> */}
            <div class="mrgt-media">
                <a href="#" className="linkreact">
                    <div class="pdfitem">
                        item 1
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div class="pdfitem">
                        item 2
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div class="pdfitem">
                        item 3
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div class="pdfitem">
                        item 4
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div class="pdfitem">
                        item 5
                    </div>
                </a>
            </div>
            {/* <!-- fim pdf  --> */}

            <div class="paralax-praia mrgt-media">
                <h1 class=" tieb titulos t-home d-flex justify-content-center">Vídeo</h1>
            </div>
            {/* <!-- inicio videos --> */}
            <div class="mrgt-media paine-vide col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div class=" col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <iframe class="video-in" src="https://www.youtube.com/embed/4eoM26ZmHd0" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12  overflow-auto sm-overflow-auto vi-vemais">
                    <p class="text-center bor-mais">Mais videos para você </p>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info ">
                            <div class="box-vid-vid">
                                <img src={TestPreto} alt="" class="img-di" />
                            </div>
                            <div class="box-vid-t">
                                <p class=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info">
                            <div class="box-vid-vid">
                                <img src={TestPreto} alt="" class="img-di" />
                            </div>
                            <div class="box-vid-t">
                                <p class=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info">
                            <div class="box-vid-vid">
                                <img src={TestPreto} alt="" class="img-di" />
                            </div>
                            <div class="box-vid-t">
                                <p class=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info">
                            <div class="box-vid-vid">
                                <img src= {TestPreto} alt="" class="img-di" />
                            </div>
                            <div class="box-vid-t">
                                <p class=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info">
                            <div class="box-vid-vid">
                                <img src= {TestPreto} alt="" class="img-di" />
                            </div>
                            <div class="box-vid-t">
                                <p class=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info">
                            <div class="box-vid-vid">
                                <img src= {TestPreto} alt="" class="img-di" />
                            </div>
                            <div class="box-vid-t">
                                <p class=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
      </>
)
}