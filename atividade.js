/* O IMC- Índice de massa corporal e um critério da organização mundial da saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.
Fórmula IMC
IMC = peso / (altura * altura)
Elabore um algoritimo que dado o peso e altura de um adulto mostre sua condiçao de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18,5 Abaixo do peso;
- Entre 18,5 e 25 Pesos normais;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(IMC) {
    if (IMC < 18.5) {
        console.log('Abaixo do peso');
    } else if (IMC >= 18.5 && IMC < 25) {
        return ('Peso normal');
    } else if (IMC >= 25 && IMC < 30) {
        return ('Acima do Peso');
    } else if (IMC >= 25 && IMC < 40) {
        return ('Obeso');
    } else {
        return ('Obsidade Grave');
    }
}

//
(function () {
    const peso = 200;
    const altura = 1.70;

    const IMC = peso / Math.pow(altura, 2);
    console.log(classificarImc(IMC));
})();
