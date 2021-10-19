import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../../img/carousel1.jpg'
import Carousel2 from '../../img/carousel2.png'
import Carousel3 from '../../img/carousel3.jpg'
import { Link } from 'react-router-dom'

export default function Index() {
    //inicio da responsividade dos botões
    //precisavamos de um "media queries pro jsx"
    //creating states
    const [CarouselCaption, setCarouselCaption] = useState('carousel-caption d-flex justify-content-center bor-bot')

    // constructor(props) {
    //     super(props)
    //     this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    //   }
    
    //   componentDidMount(){
    //     const handler = e => this.setState({matches: e.matches});
    //     window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    //   }
    // fim da responsividade dos botões da index
      
   

return (

<>


    

    {/* caroussel react inicio */}
    <Carousel fade>
        <Carousel.Item>
            <img className="d-block w-100" src={Carousel2} alt="First slide" />
            <div className={CarouselCaption}>                  
              <Link to="/cadastro" className="linkreact btn btn-outline-info btn-inicial-enter" style={{padding: '2%'}}>Conheça nosso site</Link>
              <Link to="/estoutendoumacrise" className="linkreact btn btn-outline-danger btn-inicial-crise" style={{padding: '2%'}}> Estou em crise</Link>                
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Carousel1} alt="Second slide" />
            <div className={CarouselCaption}>
            <Link to="/cadastro" className="linkreact btn btn-outline-info btn-inicial-enter" style={{padding: '2%'}}>Conheça nosso site</Link>
              <Link to="/estoutendoumacrise" className="linkreact btn btn-outline-danger btn-inicial-crise" style={{padding: '2%'}}> Estou em crise</Link> 
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={Carousel3} alt="Third slide" />
            <div className={CarouselCaption}>
            <Link to="/cadastro" className="linkreact btn btn-outline-info btn-inicial-enter" style={{padding: '2%'}}>Conheça nosso site</Link>
            <Link to="/estoutendoumacrise" className="linkreact btn btn-outline-danger btn-inicial-crise" style={{padding: '2%'}}> Estou em crise</Link> 
            </div>
        </Carousel.Item>
    </Carousel>
    {/* caroussel react fim */}





</>
)
}