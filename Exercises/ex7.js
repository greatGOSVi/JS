function staircase(n) {
    for(let i=0; i<n; i++){
        let space = "";
        let tag = "";
        for(let j=0; j<n-(i+1); j++){
            space += " ";
        }
        for(let j=0; j<n-(n-(i+1)); j++){
            tag += "#";
        }
        console.log(space,tag);
    }
}

staircase(6);