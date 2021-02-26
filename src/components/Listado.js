import React from 'react';
import Gasto from './Gasto';

const Listado = ({ gastos }) => {
    return (
        <div className="container">
            <h2 className="text-center">Listado de gastos</h2>
            {gastos.map((gasto) => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    );
}

export default Listado;