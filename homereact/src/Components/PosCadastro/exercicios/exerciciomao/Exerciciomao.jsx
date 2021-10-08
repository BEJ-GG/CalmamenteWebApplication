import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faPencilAlt, faMouse, faGamepad, faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Exerciciomao() {
    return (
        <>
            <body className="fundo-mao">
                <h1 className="escr-olho">Liste mentalmente 4 coisas que você consegue tocar.</h1>

                <div class="col-12 row in-ce">
                    <div className="col-6">
                    <FontAwesomeIcon icon={faPencilAlt} className="laex"/>
                    </div>
                    <div className="col-6">
                        
                       
                        <FontAwesomeIcon icon={faMouse} className="moex"/>
                    </div>
                </div>
                <div className="col-12 row in-ce-se">
                    <div className="col-6">
                      
                        <FontAwesomeIcon icon={faGamepad} className="coex"/>
                    </div>
                    <div className="col-6">
                        <FontAwesomeIcon icon={faCouch} className="soex"/>
                    </div>
                </div>
            </body>

        </>
    )
}
