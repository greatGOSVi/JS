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

function getPerson (array, edad) {
    return array.find(function (obj){
        if (edad === obj.edad) {
            return true;
        }
    })
}

console.log(getPerson(arrayX, 27));