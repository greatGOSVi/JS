function breakingRecords(scores) {
    const solution = [0, 0];
    let max = scores[0];
    let min = scores[0];

    for (let i=1; i<scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            solution[0]++;
        }
        if (scores[i] < min) {
            min = scores[i];
            solution[1]++;
        }
    }
    return solution;
}

console.log(breakingRecords([12, 16, 8, 22, 8, 28, 4, 6, 12]));