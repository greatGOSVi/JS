/*
html hyper text markup lenguage 
el codigo de html no se rompe con errores de sintaxis
la gran actualizacion de html es html5
html semantico es el hecho de usar las tags especificas para cada cosa en vez de hacer todo con <div>
    antes por ejemplo se hacia el header, body y footer con puros divs
DOM significa Document Object Model y es una estructura de datos de arbol que estructura la pagina y 
    existe en/por la pagina web
a todo lo que se ve en pantalla en un momento dado se llama viewport

html se base en tags
< name >
</ name >

para decirle al archivo que se va a usar html se inicia con:
<!DOCTYPE html>

tags:
<html> </html> indica que todo lo que esta dentro es codigo html
<head> </head> es la info para google, entre otras cosas
<body> </body> es el cuerpo de tu pagina, ahi pones todo lo que se va a ver en el cuerpo de esta
<footer> </footer> es el pie de pagina
<p> </p> define parrafos
<script> </script> para usar codigo de js
<style> </style> para modifical los estilos de los elementos
    puedes cambiar estilos por tags, por ids, o por clases. 
    ej. input{} input1{} .inputStyle{}(aqui solo tienes que añadirle a los elementos/tags la/s clases)

codigo js para html:
document.getElementById("btn1"); retorna el elemento que se llame asi en el documento html
btn.innerText="holiwi uwu"; cambia el texto interior de un elemento
.addEventListener("click", function); recibe dos argumentos, el primero es el evento a detectar, 
    y el segundo es lo que hara al detectarlo
    eventos(van como strings):click, db(double click), keydown, keyup, keypress, 
    focus(seleccionar algo con tab), blur(quitar la seleccion de algo con el tab),
    mouseenter(cuando pones el mouse encima de x), mouseleave(cuando quitas el puntero de encima de x)
.onclick();
event.target quien dispara el evento
event.target.value el valor del lugar donde se dispara el evento
.getAttribute("id") agarra el valor de la propiedad que tiene un tag
*/