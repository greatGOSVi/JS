// fetch es una operacion ASINCRONA que se usa para obtener informacion del servidor de la
// base de datos.
// Como ultimo parametro, fetch recibe una funcion que va a tomar como parametro el resultado del fetch,
// ya sea un objeto con los datos de un usuaro, etc.
// El fetch retorna una promesa.
// Por un problema llamado Callback Hell, donde una funcion tenia un callback(otra funcion), y esta
// tenia a su vez otro callback y asi muchas veces(volviendose dificil de leer el codigo), se creo
// otra forma(promises) de tratar con el codigo asincrono sin usar callbacks

fetch('www.url.com', (result) => {

});