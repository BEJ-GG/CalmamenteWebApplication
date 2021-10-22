
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExercicioCheiro from '../../PosCadastro/exercicios/exerciciocheiro/ExercicioCheiro.jsx'
import Exerciciomao from '../../PosCadastro/exercicios/exerciciomao/Exerciciomao.jsx'
import ExercicioSom from '../../PosCadastro/exercicios/exerciciosom/ExercicioSom.jsx'
import ExercicioVisao from '../../PosCadastro/exercicios/exerciciovisao/ExercicioVisao.jsx'
import ExercicioGosto from '../../PosCadastro/exercicios/exerciciogosto/ExercicioGosto.jsx'


export default function EstouTendoUmacrise() {

    const [show, setShow] = useState(0);
    const [pagi, setPagi] = useState();
    const atribuidor = (valor) => {
        setShow(valor)
        switch (show) {
            case 1:
                setPagi(<ExercicioCheiro />)
                break;
            case 2:
                setPagi(<Exerciciomao />)
                break;
            case 3:
                setPagi(<ExercicioVisao />)
                break;
            case 4:
                setPagi(<ExercicioSom />)
                break;
            case 5:
                setPagi(<ExercicioGosto />)
                break;
            default:
                setPagi(<div>Nada Encontrado</div>)
                break;
        }
    }

    return (
        <>
            <div id="container">
                <div id="main">
                    {/* <!-- inicio card do iframe  --> */}
                    <div className="card quadro-ifra">
                        <div>
                            {pagi}
                        </div>
                        <div className="card-body">
                            <div className="position-relative m-4">
                                <div style={{ height: '1px' }}>
                                    <div style={{ width: '50%' }}></div>
                                </div>
                                <button onClick={() => atribuidor((show - 1))} type="button" className="position-absolute  translate-middle btn btn-primary"
                                    id="inicio">Voltar</button>

                                <Link to="/index"> <button type="button" className="position-absolute translate-middle btn btn-primary" id="estouCalmo">Estou mais calmo</button>
                                </Link>

                                <button onClick={() => atribuidor((show + 1))} type="button" className="position-absolute  translate-middle btn btn-primary" id="estouCrise">Próximo</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fim card do iframe  --> */}
                </div>

            </div>
        </>
    )
}