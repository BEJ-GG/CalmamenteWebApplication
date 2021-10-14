import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/PosCadastro/principais/mainPosCadas/Main';
import Queromeacalmar from './Components/PosCadastro/principais/queromeacalmar/Queromeacalmar';
import Login from './Components/AntesDoCadastro/login/Login'
import Cadastro from './Components/AntesDoCadastro/cadastro/Cadastro'
import Index from './Components/AntesDoCadastro/InicioCal/Index'
import Chatbot from './Components/AntesDoCadastro/chatbot/Chatbot';
import EstimularCriatividadeHistorias from './Components/PosCadastro/exercicios/estimulaciatividade/EstimularCriatividadeHistorias';
import Respiracao from './Components/PosCadastro/exercicios/respiracao/Respiracao';
import EscritaTerapeutica from './Components/PosCadastro/exercicios/escritaterapeutica/EscritaTerapeutica';
import EstouTendoUmacrise from './Components/AntesDoCadastro/estoutendoumacrise/EstouTendoUmacrise';
import Exerciciomao from './Components/PosCadastro/exercicios/exerciciomao/Exerciciomao';
import ExercicioCheiro from './Components/PosCadastro/exercicios/exerciciocheiro/ExercicioCheiro';
import ExercicioGosto from './Components/PosCadastro/exercicios/exerciciogosto/ExercicioGosto';
import ExercicioSom from './Components/PosCadastro/exercicios/exerciciosom/ExercicioSom';
import ExercicioVisao from './Components/PosCadastro/exercicios/exerciciovisao/ExercicioVisao';
import Home from './Components/PosCadastro/principais/home/Home';
export default function App() {

  const script = document.createElement("script");
  script.src = "../public/static/javascript.js";
  script.async = true;
  script.document = document;
  document.body.appendChild(script);

return(
  
<>
  {/* <Main/> */}
  {/* <Queromeacalmar />*/}
  {/* <Login /> */}
  {/* <Cadastro/> */}
  {/* <Index /> */}
  {/* <Chatbot/> */}
  {/* <EstimularCriatividadeHistorias/> */}
  {/* <Respiracao/> */}
  {/* <EscritaTerapeutica/> */}
  {/* <EstouTendoUmacrise/> */}
  {/* <Exerciciomao/> */}
  {/* <ExercicioCheiro /> */}
  {/* <ExercicioGosto/> */}
  {/* <ExercicioSom/> */}
  {/* <ExercicioVisao/> */}
  {/* <Home/> */}

</>
)}