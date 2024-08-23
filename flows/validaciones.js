const opcionValida = ((opcion) => {
    let msg = opcion.replace(/[a-zA-Z\s]/g, "");
    console.log(msg)
    if(msg === '1' || msg === '2' || msg === '3' || msg === '4') return msg;
    return false
});
const menuValido = (cadena) => {
    if(cadena.toLowerCase() === 'menu') return cadena;
    return false;
};
const nombreValido = (nombre) => {
    if(!/[0-9.,:;_-]/g.test(nombre) &&  nombre.length > 1) return nombre;
    return false;
};
const empresaValido = (empresa) => {
    if(!/[0-9.,:;_-]/g.test(empresa) &&  empresa.length > 5) return empresa;
    return false;
};

const VALIDACIONES = {
    opcionValida,
    menuValido,
    nombreValido,
    empresaValido
};

module.exports = VALIDACIONES;