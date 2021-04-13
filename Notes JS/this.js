const person = {
    hablar(a, b) {
        console.log(this);
        console.log(a);
    },
    edad: 21,
}

const obj = {
    otro: 'hola',
}


person.hablar.call(obj, 1 , 2);//El primer algunmento es el contexto del this, y el resto de la funcion
                                // Cambian el this para esa llamada/ejecucion de la funcion
person.hablar.apply(obj, [1, 2]);//Igual, pero los argunmentos de la funcion van en un array

hablarObj = person.hablar.bind(obj);//Retorna una funcion con el this del contexto dado.
                                    //  Cambia el this de la funcion