const test1 = "holiwi"
const test2 = "anitalavalatina"

const isPalindrom = (string) => {
    let solution = true

    for (let i=0; i<string.length/2; i++) {
        if (string[i] !== string[(string.length-1) - i]) {
            solution = false;
            break;
        }
    }
    console.log(solution);
}

isPalindrom(test1);
isPalindrom(test2);