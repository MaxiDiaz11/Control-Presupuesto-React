import React, { Fragment, useState, useEffect } from 'react';
import Presupuesto from '../src/components/Presupuesto';
import Formulario from '../src/components/Formulario';
import Listado from '../src/components/Listado';
import ControlGastos from './components/ControlGastos';

function App() {

  const [mostrarPresupuesto, actualizarMostarPresupuesto] = useState(true);
  const [gastos, setGastos] = useState([]);

  const [gasto, setGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  const [restante, setRestante] = useState(0);
  const [presupuesto, asignarPresupuesto] = useState(0);


  useEffect(() => {
    if (crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ]);

      let presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    guardarCrearGasto(false);
  }, [crearGasto, gastos, gasto, restante]);

  return (
    <Fragment>
      {mostrarPresupuesto
        ?
        (
          <Fragment>
            <div className="py-3 mt-5 d-flex justify-content-center">
              <h1 className="titulo text-center d-flex align-items-center zoom py-5 justify-content-center">Control de presupuesto</h1>
            </div>
            <Presupuesto
              actualizarMostarPresupuesto={actualizarMostarPresupuesto}
              setRestante={setRestante}
              asignarPresupuesto={asignarPresupuesto}
            />
          </Fragment>
        )
        :
        (
          <Fragment className="text-center">
            <div className="py-3 mt-5 d-flex justify-content-center">
              <h1 className="titulo text-center d-flex align-items-center zoom py-5 justify-content-center">Control de gasto semanal</h1>
            </div>

            <div className="row mt-3 d-flex justify-content-center">
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
                <div className="row mx-2 my-1">
                  <h5>Control de gastos</h5>
                  <ControlGastos
                    presupuesto={presupuesto}
                    restante={restante}
                  />
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
