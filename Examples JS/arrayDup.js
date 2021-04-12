const newArrayDup = function (array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }
    return newArray;
}

function superNewArrayDup (num) {
    return num * 2;
}

const array2 = newArrayDup([1, 2, 3, 4]);

const superNewArray = array2.map(superNewArrayDup)

console.log(newArrayDup([1, 2, 3, 4]));
console.log(superNewArray);
