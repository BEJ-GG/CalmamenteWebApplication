import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import IGuiada1 from '../../../img/i-guiada1.jpg';
import IGuiada2 from '../../../img/i-guiada2.jpg';
import IGuiada3 from '../../../img/i-guiada3.jpg';
import IGuiada4 from '../../../img/i-guiada.jpg';

export default function ExercicioImaGuia() {
    return (
        <>
            <div className=" mrgt-media">
                <h4 className="ti-escrita">Através dessas imagens ou de outras que vierem em sua mente, crie histórias com muitos detalhes como cheiros, sons e temperatura do ambiente para poder relaxar </h4>

            </div>

            <Carousel className="mrgb-media">
                <Carousel.Item >
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada1}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada2}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada3}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada4}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}



