import React from 'react'

export default function ExercicioVisao() {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         x: 0,
    //         y: 0
    //     }
    // }

    // _onMouseMove = (e) => {
    //     const width = this.refs.ball.clienteWidth;
    //     const heigth = this.refs.ball.clienteHeigth;
    //     const oX = (e.nativeEvent.oofsetX/width) * 100;
    //     const oY = (e.nativeEvent.oofsetX/heigth) * 100;
    //     // console.log(Math.floor(oX), Math.floor(oY));

    //     this.setState({
    //         x: oX,
    //         y: oY
    //     })
    //     const {x, y} = this.state;
    //     const maskStyle ={
    //         '--maskX': x,
    //         '--maskY' y

    //     }
    }
    return (
        <>
            <body className="fundoOl">
                <h1 className="escr-olho">Observe o ambiente a sua volta.
                    Liste mentalmente 5 coisas que você consegue enxergar.</h1
                <div className="eyes">
                    <div className="eye">
                        <div className="ball" onMouseMove={this._onMouseMove} ref="ball"></div>
                    </div>
                    <div className="eye">
                        <div className="ball" onMouseMove={this._onMouseMove} ref="ball"></div>
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
