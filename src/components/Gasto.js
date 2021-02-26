import React from 'react';

const Gasto = ({ gasto }) => {
    return (
        <div className="row container my-4">
            <span className="col d-flex align-items-center nombreGasto">
                {(gasto.nombre).toUpperCase()}
            </span>
            <span className="col d-flex justify-content-center mb-2 monto text-white  bg-primary">${gasto.cantidad}</span>
            <hr></hr>
        </div>

    );
}

export default Gasto;