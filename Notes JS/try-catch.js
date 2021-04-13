// try prueba ejecutando una seccion de codigo y si existe algun error, catch se ejecuta,
// siempre con el primer error.

const a = 1;
console.log('hello');
try {
    a();

} catch(e) {
    console.log(e);
}
console.log('bye');