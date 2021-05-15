const multiplication  = (arr) => {
    arrCopy = [...arr];
    solution = [];

    for (let i = 0; i < arrCopy.length; i++) {
        const temp = arrCopy[i];
        arrCopy[i] = 1;
        
        const result = arrCopy.reduce((acc, elem) => {
            acc *= elem;
            return acc;
        }, 1);

        solution.push(result);
        arrCopy[i] = temp;
    }

    return solution;
}

array = [1, 2, 5, 3];
console.log(multiplication(array));