/**
 *  Los objetos son Mutables
 * 
 * const a = {};
 * const b = {};
 * const c = a;
 * 
 * const d = [...a];      con esto creas otro array con los valores de a sin que usen el mismo registro 
 *                          de memoria
 * 
 * console.log(a === b)   esto es false porque son diferentes registros de memoria
 * console.log(c === a)   esto es true porque === compara si los objetos estan
 *                          en el mismo registro de memoria, no que los valores sean iguales.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */