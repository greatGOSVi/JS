// cuando return true, .find retorna el elemento, y .findIndex el index
// cuando return false, find retorna undefined y findIndex -1

function getPersonByAge (array, num) {
    for (let i = 0; i < array.length; i++) {
        if (num === array[i].edad) {
            return array[i];
        }
    }
}

arrayX = [
    {
        nombre: 'Gabriel',
        edad: 21,
    },
    {
        nombre: 'Roberto',
        edad: 24,
    },
    {
        nombre: 'Marisol',
        edad: 27,
    }
];

//console.log(getNameByAge(arrayX, 10));

function findPersonByAge (obj) {
    if (obj.edad === 24) {
        return true;
    }
}

const getPerson = arrayX.findIndex(findPersonByAge);
console.log(getPerson);
