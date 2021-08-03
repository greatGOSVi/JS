const diamond = (sideLength) => {
    const space = " ";
    const asterisc = "*";
    let numSpaces = sideLength-1;
    let numAsteriscs = 1;
    
    for (let i=0; i<sideLength; i++) {
        if (i === sideLength-1) {
            console.log(space.repeat(numSpaces) + asterisc.repeat(numAsteriscs));
        } else {
            console.log(space.repeat(numSpaces) + asterisc.repeat(numAsteriscs));

            numSpaces -= 1;
            numAsteriscs += 2;
        }
    }

    for (let i=0; i<sideLength-1; i++) {
        numSpaces += 1;
        numAsteriscs -= 2;
        
        console.log(space.repeat(numSpaces) + asterisc.repeat(numAsteriscs));
    }
}

diamond(8);