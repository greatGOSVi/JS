function range(a, b) {
    const arrayArg = [];
    for (let i = a;i <= b; i++) {
        arrayArg.push(i);
    }
    return arrayArg
}

function sum (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

console.log(sum(range(1,20)));