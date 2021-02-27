import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers';

const ControlGastos = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="mb-3 py-1 rounded text-white contenedorPresupuesto">
                <label className="lead">Presupuesto: ${presupuesto}</label>
            </div>
            <div className={revisarPresupuesto(restante, presupuesto)}>
                <label className="lead">Restante: ${restante}</label>
            </div>
        </Fragment>
    );
}

export default ControlGastos;