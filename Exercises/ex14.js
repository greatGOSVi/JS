function birthday(s, d, m) {
    let solution = 0;

    for (let i=0; i<s.length-(m-1); i++) {
        let sum = 0;

        for (let j=0; j<m; j++) {
            sum += s[i+j];
        }
        
        if (sum === d) {
            solution++;
        }
    }

    return solution;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));