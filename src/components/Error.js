import React from 'react';

const Error = ({ mensaje }) => {
    return (
        <div className="container error my-2 d-flex justify-content-center py-2 text-danger">
            <p className="lead mensajeError">{mensaje}</p>
        </div>
    );
}

export default Error;