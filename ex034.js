
function GenerateFibonacci(){
    var fibonacci = []; /**/fibonacci[0] = 0;fibonacci[1] = 1;/**/ 
    let soma = 0;
    for (var i = 2; i < 4000000; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }
    // encontrar a soma dos pares de finabocci
    for(let valor of fibonacci){
        if(soma <= 4000000){
            if(valor % 2 === 0){
                soma = soma + valor
            }
        }
    }
    return soma;
    }

console.log(GenerateFibonacci())