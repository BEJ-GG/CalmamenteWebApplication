
import React from 'react'
import {Link} from 'react-router-dom'
import IfraEstoutendoUmaCrise from './IfraEstoutendoumaCrise'


export default function EstouTendoUmacrise() {
    return (
        <>
            <div id="container">
                <div id="main">
                    {/* <!-- fim menu --> */}
                    {/* <!-- inicio card do iframe  --> */}
                    <div className="card  quadro-ifra">
                        {/* <iframe src="ifra-estoucrise.html" id="ifra-quadro"></iframe> */}
                        <IfraEstoutendoUmaCrise id="ifra-quadro"/>
                        <div className="card-body">
                            <div className="position-relative m-4">
                                <div style={{height: '1px'}}>
                                    <div style={{width: '50%'}}></div>
                                </div>
                                <button type="button" className="position-absolute  translate-middle btn btn-primary"
                                    id="inicio">Voltar</button>
                                <Link to="/index">
                                <button type="button" className="position-absolute translate-middle btn btn-primary"
                                    id="estouCalmo">Estou mais calmo</button></Link>
                                <button type="button" className="position-absolute  translate-middle btn btn-primary"
                                    id="estouCrise">Próximo</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fim card do iframe  --> */}
                </div>
            </div>
        </>
    )
}