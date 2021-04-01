function filter (array, num) {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= num) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(filter([2, 1, 5, 3, 10, 8, 6], 5));


function lowerThan5 (num) {
    console.log ('hola soy el filter');
    if (num >= 5) {
        return false;
    }
    return true;
}

function lowerThan5Filter (array) {
    const arrayFiltered = array.filter(lowerThan5);
    console.log(arrayFiltered);
}
lowerThan5Filter([2, 1, 5, 3, 10, 8, 6]);