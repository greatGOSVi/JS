function divisibleSumPairs(arr, k) {
    let solution = 0;

    const sortedArr = arr.sort((a, b) => a-b);

    for (let i=0; i<sortedArr.length-1; i++) {
        for (let j=i+1; j<sortedArr.length; j++) {
            if ((sortedArr[i] + sortedArr[j]) % k === 0) {
                solution++;
            }
        }
    }

    return solution;
}

console.log(divisibleSumPairs([10, 4, 5, 2, 6, 8], 4));