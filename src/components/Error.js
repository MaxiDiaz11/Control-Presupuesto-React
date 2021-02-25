import React from 'react';

const Error = ({ mensaje }) => {
    return (
        <div className="container error my-2 border border-3 d-flex justify-content-center align-items-center text-danger">
            <p className="mensajeError">{mensaje}</p>
        </div>
    );
}

export default Error;