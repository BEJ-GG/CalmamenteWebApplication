import React from 'react'

export default function BotaoContinuar(props) {

   return(
      <>
      <div>
        <button disabled={props.habilitado}>Continuar</button>
      </div>
      </>
)}