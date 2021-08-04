import React from 'react'

const ControlSemaforo = props => {
    const { controlHandler, controlOptions } = props
    return (<div className="control-semaforo">
        {
            controlOptions.map((option, index) => {
                const { value, text } = option
                return (
                    <>
                        <input
                            key={index}
                            type="radio"
                            name="control"
                            value={ value }
                            onClick={controlHandler}
                        /><label>{ text }</label>
                    </>
                )
            })
        }
    </div>)
}

export default ControlSemaforo