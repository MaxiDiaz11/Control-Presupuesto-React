export const revisarPresupuesto = (restante, presupuesto) => {
    let clase = '';
    if ((presupuesto / 4) > restante) clase = 'bg-danger mb-3 py-1 rounded text-white';
    else if (((presupuesto / 2) > restante)) clase = 'bg-warning mb-3 py-1 rounded text-white';
    else clase = 'bg-success mb-3 py-1 rounded text-white';
    return clase;
}