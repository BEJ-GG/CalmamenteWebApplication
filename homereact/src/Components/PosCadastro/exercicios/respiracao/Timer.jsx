import React, {useState} from 'react'    
import BotaoContinuar from './BotaoContinuar';


export default function Timer ()  {
    const [secondsX, setSecondsX] = useState(30);
    const [secondsY, setSecondsY] = useState('');
    const [comecar, setComecar] = useState(false);
    const [continuar, setContinuar] = useState(true);

  React.useEffect(() => {  
    if (comecar == true){  
      if(secondsX > 0){
        setTimeout(() => setSecondsX(secondsX - 1), 1000)
      }
      if (secondsX == 9){
        setSecondsY(0)
      }
      if(secondsX == 0){
        setContinuar(false)
      }
    }
  });

  return (
    <div>
      
       <p style={{fontSize: '30px'}}>00:{secondsY}{secondsX}</p>
       <button onClick={()=> setComecar(true)}>Começar</button>

       <BotaoContinuar habilitado={continuar}/>
    </div>
    
  );
}

