const billDivision = (bill, k, b) => {
    let x = 0;

    for (let i=0; i<bill.length; i++) {
        if (i === k) {

        } else {
            x += bill[i];
        }
    }
    x /= 2;

    if (x === b) {
        console.log("Bon Appetit");
    } else {
        console.log(b-x);
    }
}

billDivision([3, 10, 2, 9], 1, 12);