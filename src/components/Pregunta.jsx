import React, {Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({guardarPresupuesto,guardarRestante, actualizarMostrarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, actualizarError] = useState(false);


    const definirPresupuesto = (e) =>{
        guardarCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = (e) =>{
        e.preventDefault()

        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            actualizarError(true);
            return;
        }
        
        // Si se pasa la validacion
        actualizarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarMostrarPregunta(false);

        // Reiniciar form
        guardarCantidad(0);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error
            ?
                <Error
                    mensaje={'Presupuesto no valido'}
                />
            :
                null
            }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                    value={cantidad}
                />
                <input 
                    type="submit"
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </Fragment>
    );
}

// guardarPresupuesto,guardarRestante, actualizarMostrarPregunta

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;