import React from 'react'
import ventoCheiro from '../../../img/vento-cheiro.png'
import florCheiro from '../../../img/flor-cheiro.png'
import cheiroFlor from '../../../img/cheiro-flor.png'
import narizCheiro from '../../../img/nariz-cheiro.png'

export default function ExercicioCheiro() {
    return (
        <>
        <div/>
            <div className="fundoOl">

            <h1 className="escr-olho">Liste mentalmente 2 coisas que possuem cheiro.</h1>
            <div className="d-flex justify-content-center" style={{flexDirection: 'column'}}>
                <div class="d-flex justify-content-center" >
                    <img src={narizCheiro} style={{width:'25%'}} alt="" />
                </div>
                <div>
                    <div className="ar-cheiro d-flex justify-content-center">
                        <img src={ventoCheiro} style={{width:'8%'}} alt="" />
                        <img src={ventoCheiro} style={{width:'8%'}} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-center mrgt-media">
                    <img src={florCheiro} style={{width: '10%', marginRight: '2%'}} alt="" />
                    <img src={cheiroFlor} style={{width: '10%'}} alt="" />
                </div>

            </div>

            {/* <script>

            </script> */}


            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous">
            </script> */}
        </div>
        </>

    )
}
