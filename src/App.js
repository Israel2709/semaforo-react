import React, { useState } from 'react';
import Semaforo from './Components/Semaforo/index'
import ControlSemaforo from './Components/ControlSemaforo';
import './App.css';

/*
 const useState = () => {
   return [ nombre_del_estado, () => {modifica el estado}]
 }
 */
function App() {
  const [etapa, setEtapa] = useState("siga")
  const [isLogged, setIsLogged] = useState(false)

  const modificarSemaforo = event => {
    const value = event.target.value
    console.log(value)

    setEtapa(value)
  }

  const loginHandler = () => {
    setIsLogged( !isLogged )
  }

  const arrayDeEtapas = [
    {
      value:"siga",
      text:"Siga"
    },
    {
      value:"precaucion",
      text:"Precaucion"
    },
    {
      value:"alto",
      text:"Alto"
    },
    {
      value:"broken",
      text:"Fuera de servicio"
    },
    {
      value:"fixing",
      text:"En reparación"
    }
  ]

  return (
    <div className="App">
      {
        isLogged ? (
          <>
            <ControlSemaforo 
              controlHandler = { modificarSemaforo }
              controlOptions = { arrayDeEtapas }
            />
            <Semaforo stage = { etapa }/>
          </>
        ) : (
          <>
            <h1>Inicia sesión para continuar</h1>
            <button onClick={ loginHandler }>Iniciar sesión</button>
          </>
        )
      }
    </div>
  );
}

export default App;
