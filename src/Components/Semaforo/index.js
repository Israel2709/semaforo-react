import React from 'react'

const Semaforo = props => {
  /* props = {
        stage : "siga"
  }*/
    const { stage } = props
    return (
        <div className="semaforo">
            <div className={`luz ${stage}`}></div>
            <p>{stage}</p>
        </div>
    )
}

export default Semaforo