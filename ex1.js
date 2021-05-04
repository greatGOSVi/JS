const isAnagram = (str1, str2) => {
    if (str1.length === str2.length){
        const newStr1 = sort(str1);
        const newStr2 = sort(str2);
        console.log(newStr1, newStr2);
        if (newStr1 === newStr2){
            return true;
        }else{
            return false;
        }
    }

}

const sort = (str) => {
    const arrStr = [...str];
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = i+1; j < arrStr.length; j++) {
            if (arrStr[j] < arrStr[i]) {
                let temp = arrStr[i];
                arrStr[i] = arrStr[j];
                arrStr[j] = temp;
            }
        }
    }
    return arrStr.join("");
}

console.log(isAnagram("oil", "lio"));
console.log(isAnagram("oil", "ana"));