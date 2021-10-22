import React from 'react'
import Index from '../InicioCal/Index'
import Login from '../login/Login'
import Cadastro from '../cadastro/Cadastro'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Logo from '../../img/logo.png'
import logoIcon from '../../img/logo-icon.png'
import facebook from '../../img/facebook-logo.png'
import twitter from '../../img/twitter-logo.png'
import instagram from '../../img/instagram-logo.png'
import EstouTendoUmacrise from '../../AntesDoCadastro/estoutendoumacrise/EstouTendoUmacrise'
import Chatbot from '../chatbot/Chatbot'
import Provider from '../../provider/Provider'
import RoutesPrivate from '../../Routes/private/Private'
import Home from '../../PosCadastro/principais/home/Home'
import Estouemcrise from '../../PosCadastro/principais/estouemcrise/Estouemcrise'
import Queromeacalmar from '../../PosCadastro/principais/queromeacalmar/Queromeacalmar'
import Informacoes from '../../PosCadastro/principais/informacoes/Informacoes'
import Respiracao from '../../PosCadastro/exercicios/respiracao/Respiracao'
import MusicaDeUsoTerapeutico from '../../PosCadastro/exercicios/musicaDeUsoTerapeutico/MusicaDeUsoTerapeutico'
import Meditacao from '../../PosCadastro/exercicios/meditacao/Meditacao'
import EscritaTerapeutica from '../../PosCadastro/exercicios/escritaterapeutica/EscritaTerapeutica'
import EstimularCriatividadeHistorias from '../../PosCadastro/exercicios/estimulaciatividade/EstimularCriatividadeHistorias'
import MeditacaoGuiada from '../../PosCadastro/exercicios/meditacao/MeditacaoGuiada'
import MeditacaoPranayama from '../../PosCadastro/exercicios/meditacao/MeditacaoPranayama'

export default function MainAntesCadas() {

return(
<>


    {/* Conteudo */}
    <main>
        <Provider>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/index" />
                </Route>
                <Route path="/index" component={Index} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/estoutendoumacrise" component={EstouTendoUmacrise} />
                <RoutesPrivate path="/chatbot" component={Chatbot} />
                <RoutesPrivate path="/home" component={Home} />
                <RoutesPrivate path="/home" component={Home} />
                <RoutesPrivate path="/estouemcrise" component={Estouemcrise} />
                <RoutesPrivate path="/queromeacalmar" component={Queromeacalmar} />
                <RoutesPrivate path="/informacoes" component={Informacoes} />
                <RoutesPrivate path="/respiracao" component={Respiracao} />
                <RoutesPrivate path="/musicaTerapia" component={MusicaDeUsoTerapeutico} />
                <RoutesPrivate path="/meditacao" component={Meditacao} />
                <RoutesPrivate path="/meditacaoGuiada" component={MeditacaoGuiada} />
                <RoutesPrivate path="/meditacaoPranayama" component={MeditacaoPranayama} />
                <RoutesPrivate path="/estimularCriatividade" component={EstimularCriatividadeHistorias} />
                <RoutesPrivate path="/escritaTerap" component={EscritaTerapeutica} />
            </Switch>
        </Provider>
    </main>
    {/* Fim Conteudo */}


</>
)}