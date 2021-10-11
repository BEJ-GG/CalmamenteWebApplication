import React from 'react'
import Donut from '../../../img/donut.png'
import Cereja from '../../../img/cereja.png'
import Sorvete from '../../../img/sorvete.png'

export default function ExercicioGosto() {
    return (
        <>

        <body class="fundoOl">

            <h1 class="escr-olho">Pra terminar, procure em volta de você 1 coisa que tem gosto.</h1>

            <div class="margi-to-sabor ">
                <div class="col-12 row">
                    <div class="col-6 ">
                        <div class="topo" ></div>
                        <div class="base"></div>
                    </div>
                    <div class="col-6">
                        <img src={Donut} class=" im-donut " ></img>
                        <img src={Cereja} class="im-cereja" alt=""/>
                        <img src={Sorvete} class ="im-sorvete"></img>
                    </div>
                </div>
            </div>


            {/* <script>
            </script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous">
            </script> */}
        </body>

            
    </>
    )
}
