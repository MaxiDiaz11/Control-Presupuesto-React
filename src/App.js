import React, { Fragment } from 'react';
import Presupuesto from './components/Presupuesto';

function App() {
  return (
    <Fragment>
      <div className="py-3 mt-5 d-flex justify-content-center">
        <h1 className="titulo text-center d-flex align-items-center zoom py-5 justify-content-center">Control de presupuesto</h1>
      </div>
      <Presupuesto />
    </Fragment>
  );
}

export default App;
