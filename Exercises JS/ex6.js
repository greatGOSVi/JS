const isPalindrom = (str) => {
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (str[i] === str[(str.length-1) - i]) {

        } else {
            return false;
        }
    }

    return true;
}

console.log(isPalindrom("anitalalatina"));