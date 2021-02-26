import React, { Fragment, useState, useEffect } from 'react';
import Presupuesto from '../src/components/Presupuesto';
// import Error from '../src/components/Error'
import Formulario from '../src/components/Formulario'
import Listado from '../src/components/Listado'

function App() {

  const [presupuesto, mostrarPresupuesto] = useState(true);
  const [gastos, setGastos] = useState([]);

  const [gasto, setGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);



  useEffect(() => {
    if (crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ]);
    }
    guardarCrearGasto(false);
  }, [crearGasto, gastos, gasto]);

  return (
    <Fragment>
      {presupuesto
        ?
        (
          <Fragment>
            <div className="py-3 mt-5 d-flex justify-content-center">
              <h1 className="titulo text-center d-flex align-items-center zoom py-5 justify-content-center">Control de presupuesto</h1>
            </div>
            <Presupuesto
              mostrarPresupuesto={mostrarPresupuesto}
            />
          </Fragment>
        )
        :
        (
          <Fragment className="text-center">
            <div className="py-3 mt-5 d-flex justify-content-center">
              <h1 className="titulo text-center d-flex align-items-center zoom py-5 justify-content-center">Control de gasto semanal</h1>
            </div>

            <div className="row my-3 d-flex justify-content-center">

              <div className="col-5 contenedor py-3 mx-1">
                <Formulario
                  setGasto={setGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="col-5 contenedor py-3 mx-1">
                <div className="row">
                  <Listado
                    gastos={gastos}
                  />
                </div>
                <div className="row">

                </div>
              </div>
            </div>
          </Fragment>
        )
      }
    </Fragment>
  );
}

export default App;
