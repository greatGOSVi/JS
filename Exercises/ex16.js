const migratoryBirds = (arr) => {
    const count = {};
    let solution;

    const sortedArr = arr.sort((a, b) => a-b);

    sortedArr.forEach( (elem) => {
        if (count[elem]) {
            count[elem] += 1;
        } else {
            count[elem] = 1;
        }
    });

    const keys = Object.keys(count);
    let max = count[keys[0]];

    for (let i=0; i<keys.length; i++) {
        if (count[keys[i]] > max) {
            max = count[keys[i]];
            solution = keys[i];
        }
    }

    return solution;
}

console.log(migratoryBirds([4, 3, 1, 2, 2, 4]));