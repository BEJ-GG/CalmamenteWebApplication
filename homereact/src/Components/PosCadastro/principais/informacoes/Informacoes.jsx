import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TestEbook from '../../../img/teste-ebook.jpg'
import TestPreto from '../../../img/pretoteste.png'

export default function Informacoes() {


    return (
        <>
            <div className="paralax-praia">
                <h1 className=" tieb  titulos t-home d-flex justify-content-center">E-Books</h1>
            </div>
            {/* <!-- incio ebooks -->
      <!-- inicio banner ebooks  --> */}
            <div className="card mb-3 ebcard bg-light" style={{border: "none", position: "static"}}>
                <div className="d-flex mrgt-grande row m-0">
                    <div className="  col-12 col-sm-12 col-md-9 col-lg-9 " id="home-book">
                        <img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" style={{width: "100%"}} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                        <p className="titulos mrgx-media" id="home-tbook">Titulo do E-book</p>
                        <p className="textos mrgx-media">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eligendi
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
            <div className="paralax-praia-ce " id="idpapra">
                <h1 className=" tieb  titulos t-home d-flex justify-content-center" id="idpraia"></h1>
            </div>
            <div className="row m-0 row-cols-lg-6 row-cols-md-6 row-cols-sm-6 row-cols-xs-12 ">
                <div className="minl-ebooks">
                <a href="" className="row  linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book"  />

                    <p className="min-ti-eb">Titulo</p>
                </a>
                </div>
                <a href="" className="row min-ebooks linkreact" ><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p className="min-ti-eb">Titulo</p>
                </a>
                <a href="" className="row min-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p className="min-ti-eb">Titulo</p>
                </a>
                <a href="" className="row min-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p className="min-ti-eb">Titulo</p>
                </a>
                <a href="" className="row min-ebooks linkreact"><img src={TestEbook} alt="Imagem e-book" title="Imagem e-book" />
                    <p className="min-ti-eb">Titulo</p>
                </a>


            </div>

            <div className="paralax-praia mrgt-media">
                <h1 className=" tieb  titulos t-home d-flex justify-content-center">Pesquisas</h1>
            </div>
            {/* <!-- inicio pdf  --> */}
            <div className="mrgt-media">
                <a href="#" className="linkreact">
                    <div className="pdfitem">
                        item 1
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div className="pdfitem">
                        item 2
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div className="pdfitem">
                        item 3
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div className="pdfitem">
                        item 4
                    </div>
                </a>

                <a href="#" className="linkreact">
                    <div className="pdfitem">
                        item 5
                    </div>
                </a>
            </div>
            {/* <!-- fim pdf  --> */}

            <div className="paralax-praia mrgt-media">
                <h1 className=" tieb titulos t-home d-flex justify-content-center">Vídeo</h1>
            </div>
            {/* <!-- inicio videos --> */}
            <div className="mrgt-media paine-vide col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className=" col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <iframe className="video-in" src="https://www.youtube.com/embed/4eoM26ZmHd0" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12  overflow-auto sm-overflow-auto vi-vemais">
                    <p className="text-center bor-mais">Mais videos para você </p>
                    <a href="" className="linkreact">
                        <div class="mrgt-pequena box-vid-info ">
                            <div class="box-vid-vid">
                                <img src={TestPreto} alt="" className="img-di" />
                            </div>
                            <div className="box-vid-t">
                                <p className=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div className="mrgt-pequena box-vid-info">
                            <div className="box-vid-vid">
                                <img src={TestPreto} alt="" className="img-di" />
                            </div>
                            <div className="box-vid-t">
                                <p className=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div className="mrgt-pequena box-vid-info">
                            <div className="box-vid-vid">
                                <img src={TestPreto} alt="" className="img-di" />
                            </div>
                            <div className="box-vid-t">
                                <p className=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div className="mrgt-pequena box-vid-info">
                            <div className="box-vid-vid">
                                <img src= {TestPreto} alt="" className="img-di" />
                            </div>
                            <div className="box-vid-t">
                                <p className=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div className="mrgt-pequena box-vid-info">
                            <div className="box-vid-vid">
                                <img src= {TestPreto} alt="" className="img-di" />
                            </div>
                            <div className="box-vid-t">
                                <p className=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>
                    <a href="" className="linkreact">
                        <div className="mrgt-pequena box-vid-info">
                            <div className="box-vid-vid">
                                <img src= {TestPreto} alt="" className="img-di" />
                            </div>
                            <div className="box-vid-t">
                                <p className=" mrgl-grande  itens t-videos">Titulo do vídeo</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
      </>
)
}