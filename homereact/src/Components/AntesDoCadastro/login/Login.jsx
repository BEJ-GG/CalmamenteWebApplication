import React, {useState, useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import CalmamenteContext from '../../context/CalmamenteContext'
import FooterAntesCadas from '../../Footers/FooterAntesCadas'
import HeaderAntesCadas from '../../Headers/HeaderAntesCadas'


function inicialState(){
    return {email: '', senha: ''}
}



const UserLogin = () => {

    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        fetch("/rest/usuario").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setUsuario(usuario => ({
                ...usuario,
                cd_usuario: resp.map(( p ) => p.cd_usuario),
                ds_email: resp.map(( p ) => p.ds_email),
                sn_usuario: resp.map(( p ) => p.sn_usuario)
            }))
            
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    function login({email, senha},{cd_usuario, ds_email, sn_usuario}) { 
        for (var i = 0; i < ds_email.length; i++) {
            for (var j = 0; j < sn_usuario.length; j++) {
                if (ds_email[i] === email && sn_usuario[j] === senha){
                    return {token: cd_usuario[i]}
                }
            }
        }     
        return {error: 'Usuario ou senha invalidos'}

    }

    const [values, setValues] = useState(inicialState);
    const { setToken } = useContext(CalmamenteContext);
    const history = useHistory();

    function handleChange(event) {
        const {value, name } = event.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        
        const { token } = login(values, usuario)

        if (token) {
            setToken(token)
            return history.push('/home') //TO AKI Ó
        }
    }


return (
<>
    <div id="container">
        <div id="main">
            <HeaderAntesCadas />

            {/*
            <!-- inicio formulario --> */}
            <h1 className="d-flex justify-content-center titulos"
                style={{marginTop: '3%', marginBottom: '3%',textAlign: 'center'}}>
                Faça seu login</h1>
            <div className="formul mrgb-grande">
                <div className="for">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div className="em-email-login">
                                <label htmlFor="idEmailLogin" className="form-label lbl-em itens">Email: </label>
                                <input type="email" className="form-control" id="idEmailLogin" name="email"
                                    aria-describedby="emailHelp" value={values.email} onChange={handleChange} />
                            </div>
                            <div className="d-flex">
                                <span id="msgEmail" style={{marginLeft: '3%'}}></span>
                            </div>
                            <div className="pas-senha">
                                <label htmlFor="idSenhaLogin" className="form-label lbl-noso itens">Senha: </label>
                                <input type="password" className="form-control" id="idSenhaLogin" name="senha"
                                    value={values.senha} onChange={handleChange} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <span id="msgSenhaPequena" style={{marginLeft: '3%'}}></span>
                            </div>
                            <div className="check-senha form-switch">
                                <input type="checkbox" className="form-check-input" id="idMostrarLogin" />
                                <label className="form-check-label lbl-noso itens" style={{marginLeft: '1%'}}
                                    htmlFor="idMostrarLogin" name="checkMostar">Mostrar senha</label>
                            </div>
                            <div>
                                <button type="submit" className="btn-logs btn btn-primary">Entrar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            {/*
            <!-- fim formulario --> */}


        </div>
    </div>
    
    <FooterAntesCadas />


</>)
}

export default UserLogin