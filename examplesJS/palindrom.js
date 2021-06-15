const itsPalindrom = (string) => {
    const length = Math.ceil(string.length/2) - 1;
    for (let i = 0; i <= length; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(itsPalindrom('loasol'));