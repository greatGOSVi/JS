// reduce recibe dos argumentos (), el primero es la funcion que ejecuta y la segunda es el valor incial
// del acumulador. Asi tambien la funcion que recibe el reduce, en sus argumentos (), el primero es
// el accumulator, y los demas son como siempre el elemento, index y el array

const array = [1,2,3,4,5];

function sum (acc, elem) {
    const newAcc = acc + elem;
    return newAcc;
}

console.log(array.reduce(sum,0));