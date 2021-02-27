import React, { Fragment, useState } from 'react';
import Error from './Error'

const Presupuesto = ({ actualizarMostarPresupuesto, asignarPresupuesto, setRestante }) => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [error, setError] = useState(false);

    const definirPresupuesto = (e) => {
        setPresupuesto(parseInt(e.target.value, 10));
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();
        if (presupuesto < 1 || isNaN(presupuesto)) {
            setError(true);
            return;
        }
        setError(false);
        setRestante(presupuesto);
        asignarPresupuesto(presupuesto);
        actualizarMostarPresupuesto(false);
    }
    return (
        <Fragment>
            {error ? <Error mensaje="El presupuesto definido es invalido." /> : null}
            <div className="container contenedor p-4 my-3 text-center w-75">
                <h4>Definir Presupuesto</h4>
                <form className="my-3" onSubmit={agregarPresupuesto}>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control w-100"
                            placeholder="Coloca tu presupuesto"
                            onChange={definirPresupuesto}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Enviar presupuesto" className="btn btn-dark w-100" />
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Presupuesto;