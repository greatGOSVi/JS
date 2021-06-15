
function compareObjects (objA, objB) {
    const keysObjA = Object.keys(objA);
    const keysObjB = Object.keys(objB);

    for (let i = 0; i < keysObjA.length; i++) {
        if (keysObjA[i] === keysObjB[i]) {
            if (objA[keysObjA[i]] !== objB[keysObjB[i]]) {
                return false;
            }
        }
        else {
            return false
        }
    }
    return true;
}

const obj1 = {
    nombre: 'Roberto',
    edad: 24,
}
const obj2 = {
    nombre: 'Gabriel',
    edad: 28,
}

console.log(compareObjects(obj1,obj2));