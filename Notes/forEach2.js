// para el forEach, el primer parametro siempre sera el elemento, el segundo el indice y el tercero todo el arreglo
// forEach independientemente de si usas return x, siempre va a retornar undefined


const array = [1, 2, 3, 4, 5];

function dup (num, i){
    return num
}

const a = array.forEach(dup);

console.log(a);