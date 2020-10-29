import React, {Fragment} from 'react'
import {helper} from './helper'
import PropTypes from 'prop-types'

const ControlPresupuesto = ({cantidad, restante}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: $ {cantidad}
            </div>
            <div className={helper(cantidad, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}
 
ControlPresupuesto.propTypes = {
    cantidad: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;