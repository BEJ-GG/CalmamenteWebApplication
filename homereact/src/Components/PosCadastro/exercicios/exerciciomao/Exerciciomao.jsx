import React from 'react'
import { faPencilAlt, faMouse, faGamepad, faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Exerciciomao() {
    return (
        <>
        <FontAwesomeIcon icon={faPencilAlt} className="laex"/>
            <div className="fundo-mao">
                <h1 class="escr-olho">Liste mentalmente 4 coisas que você consegue tocar.</h1>

                <div class="col-12 row in-ce">
                    <div class="col-6">
                    <FontAwesomeIcon icon={faPencilAlt} className="laex"/>
                    </div>
                    <div class="col-6">
                        <i class="fas fa-mouse moex"></i>
                        <FontAwesomeIcon icon={faMouse} className="laex"/>
                    </div>
                </div>
                <div class="col-12 row in-ce-se">
                    <div class="col-6">
                        <i class="fas fa-gamepad coex"></i>
                        <FontAwesomeIcon className="laex"/>
                    </div>
                    <div class="col-6">
                        <i class="fas fa-couch soex"></i>
                        <FontAwesomeIcon icon={faPencilAlt} className="laex"/>
                    </div>
                </div>
            </div>

        </>
    )
}
