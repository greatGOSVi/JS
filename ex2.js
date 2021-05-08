const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

const getTriplets = (arr, target) => {
    const result = [];
    const sortedArr = sort(arr);

    for (let i = 0; i < sortedArr.length; i++) {
        let l = i + 1;
        let r = sortedArr.length - 1;
        
        while (l < r) {
            const sum = sortedArr[i] + sortedArr[l] + sortedArr[r];

            if (sum === target) {
                result.push([sortedArr[i], sortedArr[l], sortedArr[r]]);
                l +=1;
                r -=1;
            } else if (sum < target) {
                l += 1;
            } else {
                r -= 1;
            }
        }
    }

    return result;
}

const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(getTriplets(array, targetSum));