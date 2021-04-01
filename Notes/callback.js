// Un callback es pasarle una funcion como parametro a otra funcion y que cuando una termine de
// se ejecute la otra
// Por un problema llamado Callback Hell, donde una funcion tenia un callback(otra funcion), y esta
// tenia a su vez otro callback y asi muchas veces(volviendose dificil de leer el codigo), se creo
// otra forma(promises) de tratar con el codigo asincrono sin usar callbacks

const print = num => {
    console.log(num);
}

const sum = (a, b, callback) => {
    const c = a + b;;
    return callback(c);
}

sum(1, 2, print);