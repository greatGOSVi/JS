function getTotalX(a, b) {
    let arr = [];
    const filterObj = {};
    const arr2 = [];

    a.sort((a,b) => a-b);
    b.sort((a,b) => a-b);

    for (let i=0; i<a.length; i++) {
        for (let j=a[a.length-1]; j<=b[0]; j++) {
            if (j%a[i] === 0) {
                arr.push(j);
            }
        }
    }

    arr.sort((a,b) => a-b);

    for (let i=0; i<arr.length; i++) {
        filterObj[arr[i]]? filterObj[arr[i]] += 1 : filterObj[arr[i]] = 1;
    }

    const keys = Object.keys(filterObj);

    for (let i=0; i<keys.length; i++) {
        if (filterObj[keys[i]] === a.length) {
            arr2.push(keys[i]);
        }
    }

    console.log(arr, arr2);
    arr = [];

    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
    
        return gcd(b, a%b);
    }
    function generalizedGCD(arr) {
        let factors = arr[0];

        for (let i = 1; i < arr.length; i++) {
            factors = gcd(factors, arr[i]);
        }

        return factors;
    }
    const gcdB = generalizedGCD(b);

    for (let i=0; i<arr2.length; i++) {
        if (gcdB%arr2[i] === 0) {
            arr.push(arr2[i]);
        }
    }

    console.log(arr);
    return arr.length;
}

// console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([1], [100]));
// console.log(getTotalX([2, 3, 6], [42, 84]));
console.log(getTotalX([3, 9, 6], [36, 72]));

/* Este era el anterior filtro pero no funcionaba para cualquier length de a
for (let i=0; i<arr.length; i++) {
        if (a.length !== 1) {
            if (arr[i] === arr[i-1] && arr[i] !== arr[i+1]) {     el && blabla se lo puse despues
                arr2.push(arr[i]);
            }
        } else {arr2.push(arr[i])}        
    }
*/