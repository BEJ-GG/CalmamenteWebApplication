import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/PosCadastro/principais/mainPosCadas/Main';


export default function App() {

  const script = document.createElement("script");
  script.src = "../public/static/javascript.js";
  script.async = true;
  script.document = document;
  document.body.appendChild(script);

return(
  
<>
  <Main/>
  

</>
)}