// grades es un array con calificaciones y se reprueba con menos de 40. Si se quedaron a menos de 3 puntos del siguiente multiplo de 5
//  se redondea. Si la calificacion es menor a 38 no se redondea pues sigue siendo reprobado.

function gradingStudents(grades) {
    const finalGrades = [];
    for(let i=0; i<grades.length; i++){
        if(grades[i]<38){
            finalGrades.push(grades[i]);
        } else {
            if(grades[i]%5 === 3){
                finalGrades.push(grades[i]+2);
            }else if(grades[i]%5 === 4){
                finalGrades.push(grades[i]+1);
            } else{
                finalGrades.push(grades[i]);
            }
        }
    }
    return finalGrades;
}

console.log(gradingStudents([29, 56, 78, 49, 90]));