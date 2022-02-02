const NUM = 600851475143;



console.log(numerPrimo());

function numerPrimo(){

let maiorFator = 0;


for(let i = 0; i < Math.sqrt(NUM); i++){

    if(ehPrimo(i) && NUM % i === 0){
        maiorFator = i
    }
    console.log(`Maior fator: ${maiorFator}`)
}
return maiorFator
}


function ehPrimo(n){

    let i;
    if(n < 2){
        return false
    }
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % 2 === 0){
            return false
        }
        return true
    }
}