import React, { useState, Fragment } from 'react';
import Error from './Error'
import shortid from 'shortid';

const Formulario = ({ setGasto, guardarCrearGasto }) => {

    const [error, setError] = useState(false);
    const [cantidad, setCantidad] = useState(0);
    const [nombre, setNombre] = useState('');

    const definirGasto = (e) => {
        e.preventDefault();

        if (nombre.trim() === '' || isNaN(cantidad) || cantidad < 1) {
            setError(true);
            return;
        }
        setError(false);

        const nuevoGasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log(nuevoGasto)
        setGasto(nuevoGasto);
        // setGastoNuevo(nuevoGasto);
        guardarCrearGasto(true);

        setCantidad(0);
        setNombre('');
    }


    return (
        <Fragment className="container">
            <form onSubmit={definirGasto}>
                <div className="container mb-3">
                    <h2 className="text-center">Agrega tus gastos aqui</h2>
                    {error ? <Error mensaje="Los datos ingresados son incorrectos." /> : null}
                    <label className="lead mb-1">Nombre del gasto</label>
                    <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Ej. comida"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <div className="mb-3">
                        <label className="lead mb-1">Monto del gasto</label>
                        <input
                            type="number"
                            className="form-control w-100"
                            placeholder="$1000"
                            value={cantidad}
                            onChange={e => setCantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Definir gasto" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;