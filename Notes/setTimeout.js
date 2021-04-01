// JS es ASINCRONO, pues lee linea por linea, en orden. Cuando se usa setTimeout, JS carga la funcion 
// en un apartado (event loop), y se ejecuta cuando el codigo sincrono termina de correr.
// setTimeout es una funcion de JS que como argumentos toma una funcion, y como segundo argumento
// recibe un numero para la cantidad de MILISEGUNDOS que va a esperar para ejecutar la funcion dada.

setTimeout (() => {
    console.log('hey');
}, 0);

console.log('Gabo');