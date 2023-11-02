let seriesPending = ['Breaking Bug', 'Game of Drones','Boolean 99','Arrested Developer'];

//añado una serie al final
seriesPending.push('The good coder');

//bucle para mostrar todas las series y su indice, y nos dice si Boolean 99 está en la lista
for (let i = 0; i < seriesPending.length; i++) {
    console.log(`Índice ${i}: ${seriesPending[i]}`);
    if (seriesPending[i] === 'Boolean 99') {
        console.log('Boolean 99 está en la lista');
    }
}

let seriesFinished = [];
//quito el primer elemento de seriesPending y lo añado a seriesFinished
seriesFinished.unshift(seriesPending.shift());

//longitud de las series
console.log(`Series pendientes: ${seriesPending.length}`);
console.log(`Series terminadas: ${seriesFinished.length}`);

//añado el resto de series a seriesFinished
for (let i = 0; i < 4; i++) {
    let serie = seriesPending.pop();
    seriesFinished.push(serie);
}

//longitud de las series
console.log(`Series pendientes: ${seriesPending.length}`);

//quito todos los elementos de seriesFinished
seriesFinished.splice(0, seriesFinished.length);

//longitud de las series
console.log(`Series terminadas: ${seriesFinished.length}`);