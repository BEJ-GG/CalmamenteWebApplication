import React from 'react'
import './App.css'
import Header from './Components/header/Header'
import Footer from './Components/footerPosCadas/Footer'
import Home from './Components/home/Home'
import Respiracao from './Components/respiracao/Respiracao'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

return(
  
<>
<div id="container">
    <div id="main">

      {/* <!-- inicio menu  --> */}
      <Header/>
      {/* <!-- fim menu  --> */}
      <Respiracao/>
      
    </div>
  </div> 

  {/* <!-- inicio rodapé --> */}
  <Footer/>
  {/* <!-- fim rodapé  -->  */}

</>
)}