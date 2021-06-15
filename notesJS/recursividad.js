// Es una funcion que se ejecuta a si misma
function potenciaDe2 (n) {
    if (n === 0) {
        return 1
    }
    return potenciaDe2(n-1)*2
}


console.log(potenciaDe2(3));