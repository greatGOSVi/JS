// Una promesa es una estructura de datos para manejar codigo asincrono.
// El metodo resolve devuleve el valor de la promesa.
// El metodo reject pasa un error, si es que lo hay.
// El metodo then recibe una funcion que tiene como unico parametro el valor que devuelve resolve para
//  ejecutar dicha funcion. el metodo then no se ejecuta hasta que resolve se haya ejecutado.
// El metodo catch maneja el error que le pasa el reject.

const num = Promise.resolve(3);

console.log(num);

num.then(result => {
    console.log(result);
});