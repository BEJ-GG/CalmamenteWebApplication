import React, { useState } from 'react'



import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import Respiracao from '../../exercicios/respiracao/Respiracao'
import Estouemcrise from '../estouemcrise/Estouemcrise'
import Queromeacalmar from '../queromeacalmar/Queromeacalmar';
import Informacoes from '../informacoes/Informacoes';
import MusicaDeUsoTerapeutico from '../../exercicios/musicaDeUsoTerapeutico/MusicaDeUsoTerapeutico'
import Meditacao from '../../exercicios/meditacao/Meditacao'
import MeditacaoGuiada from '../../exercicios/meditacao/MeditacaoGuiada'
import MeditacaoPranayama from '../../exercicios/meditacao/MeditacaoPranayama';
import EstimularCriatividadeHistorias from '../../exercicios/estimulaciatividade/EstimularCriatividadeHistorias'
import EscritaTerapeutica from '../../exercicios/escritaterapeutica/EscritaTerapeutica';



export default function Main() {
    
    return (
        <>
            <div id="container">
                <div id="main">
                    
                    {/* Conteudo */}
                    <main>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            
                        </Switch>
                    </main>
                    {/* Fim Conteudo */}
                </div>
            </div>
            
        </>
    )
}