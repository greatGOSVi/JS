const salesByMatch = (ar) => {
    let solution = 0;
    const pairs = {};

    for (let i=0; i<ar.length; i++) {
        if (pairs[ar[i]]) {
            pairs[ar[i]] += 1;
        } else {
            pairs[ar[i]] = 1;
        }
    }

    const keys = Object.keys(pairs);
    let odds;

    for (let i=0; i<keys.length; i++) {
        odds = pairs[keys[i]] % 2;
        solution += (pairs[keys[i]] - odds) / 2;
    }

    return solution;
}

console.log(salesByMatch([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));