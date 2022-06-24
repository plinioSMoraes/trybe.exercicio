const sum = require("./sum.js");

// Teste se o retorno de sum(4, 5) é 9
test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
});

// Teste se o retorno de sum(0, 0) é 0
test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
});
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
test('Teste se a funçao sum lança erro com 4 e `5`', () => {
    expect(() => sum(4, '5')).toThrowError();
});
// Teste se a mensagem de erro é "parameters must be numbers"
// quando realizar a chamada sum(4, "5")
test('Teste se a funçao sum lança erro com 4 e `5` e retorna uma mensagem', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
});