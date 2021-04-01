function get3Max (array) {
    const newArray = array;
    const max3array = [];
    let max1 = 0;
    let max2 = 0;
    let max3 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max1) {
            max1 = array[i];
        }
    }
    max3array.push(max1);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== max1){
            if (array[i] > max2) {
                max2 = array[i];
            }
        }
    }
    max3array.push(max2);

    for (let i = 0; i < array.length; i++) {
        if ((array[i] !== max1) && (array[i] !== max2)) {
            if (array[i] > max3) {
                max3 = array[i];
            }
        }
    }
    max3array.push(max3);
        
    return max3array;
}

console.log(get3Max([5,3,6,1]));