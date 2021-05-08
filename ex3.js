const getSmallestDifference = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let smallestDiff = Number.MAX_SAFE_INTEGER;
    let solution = [];

    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);

    while (i < arr1.length && j < arr2.length) {
        let difference = Math.abs(arr1[i] - arr2[j]);
        console.log(i, j, solution);
        
        if (difference < smallestDiff) {
            smallestDiff = difference;
            solution = [arr1[i], arr2[j]];
        }
        if (arr1[i] < arr2[j]) {
            i += 1;
        } else if (arr1[i] > arr2[j]) {
            j += 1;
        } else {
            break;
        }
    }

    return solution;
}

const array1 = [15, 7, 9, -8, 5];
const array2 = [2, -15, -10, 100, 6, 150, 1];

console.log(getSmallestDifference(array1, array2))