const sums = (arr) => {
    const sumsArr = [];
    let sum = null;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sumsArr.push(sum);
    }
    
    return sumsArr;
}

const array = [10, 11, 12, 13, 14];
console.log(sums(array));