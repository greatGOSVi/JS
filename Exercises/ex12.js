function getTotalX(a, b) {
    let arr = [];
    const arr2 = [];

    for (let i=0; i<a.length; i++) {
        for (let j=a[a.length-1]; j<=b[0]; j++) {
            if (j%a[i] === 0) {
                arr.push(j);
            }
        }
    }

    arr.sort((a,b) => a-b);

    for (let i=0; i<arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);

    let arr = [];

    return arr.length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
// let j=a[a.length-1]; j<=b[0]; j++