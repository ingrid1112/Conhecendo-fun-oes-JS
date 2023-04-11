/* Conhecendo funçoes JavaScript*/

/* function sayMyName(name){
    console.log('Your name is:' + name);
}

sayMyName('Ingrid'); 
*/

function incrementarJuros(valor, percentualJuros) {

    const ValorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + ValorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));


/*function main() {
    console.log('Programa principal');
}

main();
*/