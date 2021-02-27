import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers';

const ControlGastos = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="mb-3 py-1 rounded text-white  contenedorPresupuesto">
                <p>Presupuesto: ${presupuesto}</p>
            </div>
            <div className={revisarPresupuesto(restante, presupuesto)}>
                <p>Restante: ${restante}</p>
            </div>
        </Fragment>
    );
}

export default ControlGastos;