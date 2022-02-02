
const notas = [73, 67, 38, 33]

function gradingStudents(grades) {
    // Write your code here

    return grades < 38 || grades % 5 < 3 ? grades : grades + (5 - (grades % 5));
  
}//function end

// verificar se o valor é maior que 38

//retornar o proximo valor divisivel por 5 caso nao seja

console.log(gradingStudents(notas))