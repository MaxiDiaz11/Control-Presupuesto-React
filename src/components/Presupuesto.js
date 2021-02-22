import React, { useState } from 'react';

const Presupuesto = () => {

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
    }
    return (
        <div className="container contenedor p-4 text-center">
            {error ? console.log("error") : null}
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
                    <input type="submit" value="Enviar presupuesto" className="btn btn-primary w-100" />
                </div>
            </form>
        </div>
    );
}

export default Presupuesto;