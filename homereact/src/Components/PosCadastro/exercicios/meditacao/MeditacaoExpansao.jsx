import React from 'react'



export default function MeditacaoExpansao() {

return(
<>

    {/*
    <!-- inicio respiração --> */}
    <h1 className="ti-escrita">Exercício de meditação guiada</h1>

    <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
        {/* inicio da parte um */}
        <div>
            <div className=" mrgt-grande">
                <h4 className="ti-escrita">Nesta meditação você irá se acalmar através de respirações e de expansão de consciência.</h4>

            </div>


            <div className="responsCardResp  mrgb-media">
                <div style={{height: '40%'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HbCzAetiBok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>
    </div>
    {/*
    <!-- fim respiração  --> */}



</>
)}