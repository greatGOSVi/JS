const isAnagram = (str1, str2) => {
    const obj = {};
    for (let i = 0; i < str1.length; i++) {
        if (obj[str1[i]] === undefined) {
            obj[str1[i]] = 1;
        }else {
            obj[str1[i]] += 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (obj[str2[i]] === undefined) {
            return false;
        }else {
            obj[str2[i]] -= 1;
        }
    }
    objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
        if (obj[objKeys[i]] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("oil", "lio"));
console.log(isAnagram("oil", "ana"));
console.log(isAnagram("oil", "anis"));