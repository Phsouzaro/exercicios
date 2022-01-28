const distanciaEmMetros = 8000;

function distanciaConvertida(distancia) {

 console.log(`A medida de ${Number(distancia).toFixed(1)}m corresponde a`);
 console.log(`${distancia / 1000}km`)
 console.log(`${distancia / 100}hm`)
 console.log(`${distancia / 10}dam`)
 console.log(`${distancia * 10}dm`)
 console.log(`${distancia * 100}cm`);
 console.log(`${distancia * 1000}mm`);

}

distanciaConvertida(distanciaEmMetros);
