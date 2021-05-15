const mult = (arr) => {
    const arrCopy = [...arr];
    let leftAcc = 1;
    const left = [];
    let rightAcc = 1;
    const right = [];
    const solution = [];

    for (let i = 0; i < arrCopy.length; i++) {
        if (i === 0) {
            left.push(1);
        } else {
            leftAcc *= arrCopy[i-1]
            left.push(leftAcc);
        }
    }
    for (let i = arrCopy.length - 1; i > -1; i--) {
        if (i === arrCopy.length - 1) {
            right.push(1);
        } else {
            rightAcc *= arrCopy[i+1];
            right.push(rightAcc);
        }
    }
    for (let i = 0; i < left.length; i++) {
        solution.push(left[i] * right[(right.length-i)-1]);
    }

    return solution;
}

const array = [1, 2, 5, 3];
console.log(mult(array));