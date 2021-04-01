const getFibonacciElement = (num) => {
    const fibonacci = [1, 1];
    let sum = 1;
    for (i = 0; i < num; i++) {
        sum = fibonacci[i] + fibonacci[i+1];
        fibonacci.push(sum);
    }
    return fibonacci[num];
}

console.log(getFibonacciElement(5));