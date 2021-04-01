// memoization es cuando una funcion memoriza valores para no tener que volver a calcularlos.
// ventaja: mas rapido, desventaja: ocupa mas memoria.

const suma = (num) => {
    let resultado = num;
    const suma2 = (num) => {
        if (num === undefined) {
            return resultado
        }
        resultado = resultado + num;
        return suma2;
    }
    return suma2;
}

console.log(suma(3)(5)());