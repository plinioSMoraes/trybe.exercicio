const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ' ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArr = (oddsAndEvens) => {
    // for (let index = 1; index < oddsAndEvens.length; index += 1) {
    //     for (let index2 = 0; index2 < index; index2 += 1) {
    //         if (oddsAndEvens[index] < oddsAndEvens[index2]) {
    //             let swap = oddsAndEvens[index2];
    //             oddsAndEvens[index2] = oddsAndEvens[index];
    //             oddsAndEvens[index] = swap;
    //         }
    //     }
    // }
    oddsAndEvens.sort((a,b) => { return a-b});
    return `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`;
}
console.log(sortArr(oddsAndEvens)); // será necessário alterar essa linha 😉