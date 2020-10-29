import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({guardarElGasto, guardarCrearGasto}) => {

    const [nombregasto, guardarNombreGasto] = useState('');
    const [cantidadgasto, guardarCantidadGasto] = useState(0);
    const [error, actualizarError] = useState(false); 

    const definirNombreGasto = (e) =>{
        guardarNombreGasto(e.target.value)
    }

    const definirCantidadGasto = (e) =>{
        guardarCantidadGasto(parseInt(e.target.value))
    }

    const agregarGasto = (e) =>{
        e.preventDefault();
        
        //Validar
        if(nombregasto.trim() === '' || cantidadgasto < 1 || isNaN(cantidadgasto)){
            actualizarError(true);
            return;
        }

        // Si pasa la validacion
        actualizarError(false);

        // Construyendo el gasto
        const gasto = {
            nombre: nombregasto,
            cantidad: cantidadgasto
        }

        //Generar Id
        gasto.id = shortid.generate()

        //Guardar el gasto
        guardarElGasto(gasto);
        guardarCrearGasto(true);

        //Resetear formulario
        guardarNombreGasto('');
        guardarCantidadGasto(0);
    }         

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error
            ?
                <Error
                    mensaje={'Ambos campos son necesarios o Presupuesto Incorrecto'}
                />
            :
                null
            }
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    onChange={definirNombreGasto}
                    value={nombregasto}
                />
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    onChange={definirCantidadGasto}
                    value={cantidadgasto}
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarElGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;