const max = (arr) => {
    let solution1 = 0;
    let solution2 = 1;

    for (let i=1; i<arr.length; i++) {
        if (arr[i] > arr[solution1] && arr[i] > arr[solution2]) {
            solution2 = solution1;
            solution1 = i;
        } else if (arr[i] > arr[solution2]) {
            solution2 = i;
        } else if (arr[i] > arr[solution1]) {
            solution1 = i;
        }
    }

    return [arr[solution1], arr[solution2]];
}

console.log(max([5, 13, 27, 10, 15, 46, 75, 34, 100]));