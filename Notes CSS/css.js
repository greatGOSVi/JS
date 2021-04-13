/*
css significa cascade sheet styles
a la hora de añadir un estilo, para hacerlo a un tag es input{}, para añadirlo a una id es #input1{}
    y para crear una clase es .inputs{}
tiene un concepto de especificidad, que supone que prioriza los styles mas especificos ante los generales
    ej. !important>id>class>tag
        usar el !important suele ser mala practica, se usa de ultimo recurso
puedes cambiar el estilo cuando escuche un evento
    ej. input:hover{}
se llaman pseudoclases al hecho de usar el :hover o :focus a la hora de añadirle un estilo

Box Model
    Todo elemento de html tiene un border(el borde del elemento), padding(la distancia entre el borde
        y el contenido), content(contenido) y un margin(la distancia entre borders de elementos)
    el margin, si solo le das un valor, sera el margen hacia todas las direcciones, si le das dos
        seran el primero verticales y el segundo los horizontales y a partir de tres, son arriba, der,
        abajo, izq (sentido horario)
    si quieres poner solo un margen especifico puedes usar margin-top, margin-right, margin-bottom,
        margin-left
    padding funciona como margin, pero hacia dentro del elemento
    border recibe necesariamente 3 parametros, el ancho del borde, el estilo y el color del mismo,
        si quieres introducir solo un parametro de los tres, se usa border-width, border-style o 
        border-color. Tambien, si solo quieres manejar el borde de un lado, como en las demas partes, 
        puedes usar border-top, border-right, border-bottom, border-left
*/