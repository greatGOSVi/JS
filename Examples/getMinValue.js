function getMinValue (array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log(min);
}

getMinValue([3, 2, 5, -8]);