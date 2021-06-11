// s es el inicio de la casa, t punto final, a el punto donde esta el arbol de manzanas y b donde el de naranjas. apples y oranges son los arrays
//  con las distancias que se movieron los frutos al caer. El punto es mostrar cuantos frutos de cada arbol cayeron en el rango de la casa.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const length = apples.length>oranges.length ? apples.length : oranges.length;
    let applesInHouse = 0;
    let orangesInHouse = 0;

    for (let i=0; i<length; i++){
        if (a + apples[i] >= s && a + apples[i] <= t){
            applesInHouse += 1;
        }
        if (b + oranges[i] >= s && b + oranges[i] <= t){
            orangesInHouse += 1;
        }
    }    
    console.log(applesInHouse);
    console.log(orangesInHouse);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);