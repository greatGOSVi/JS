function getDuplicated (array){
    const visited = [];
    for(let i = 0; i < array.length; i++){
        for (let x = 0; x < visited.length; x++){
            if (array[i] === visited[x]){
                return true;
            }
        }
        visited.push(array[i]);
    }
    return false;
}

console.log(getDuplicated([3, 2, 5, -8]));  // Complejidad O(n^2)


function getDuplicatedEasy (array){
    const obj = {};
    for (i = 0; i < array.length; i++){
        if (obj[array[i]] === true){
            return true;
        }
        obj[array[i]] = true;
    }
}

console.log(getDuplicatedEasy([1,2,3,1]));  // Complejidad O(n)