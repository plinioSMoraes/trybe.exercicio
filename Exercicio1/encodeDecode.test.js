const { encode, decode } = require('./encodeDecode.js');

// Teste se encode e decode são funções;
test('Testa se encode é uma função', () => {
    expect(typeof encode).toBe('function'); 
});
test('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function'); 
});
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em
//  1, 2, 3, 4 e 5, respectivamente;
test('Testa se encode a retorna 1', () => {
    expect(encode('a')).toBe('1'); 
});
test('Testa se encode e retorna 2', () => {
    expect(encode('e')).toBe('2'); 
});
test('Testa se encode i retorna 3', () => {
    expect(encode('i')).toBe('3'); 
});
test('Testa se encode o retorna 4', () => {
    expect(encode('o')).toBe('4'); 
});
test('Testa se encode e retorna 5', () => {
    expect(encode('u')).toBe('5'); 
});
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos 
// nas vogais a, e, i, o, u, respectivamente;
test('Testa se decode a retorna 1', () => {
    expect(decode('1')).toBe('a'); 
});
test('Testa se decode e retorna 2', () => {
    expect(decode('2')).toBe('e'); 
});
test('Testa se decode i retorna 3', () => {
    expect(decode('3')).toBe('i'); 
});
test('Testa se decode o retorna 4', () => {
    expect(decode('4')).toBe('o'); 
});
test('Testa se decode e retorna 5', () => {
    expect(decode('5')).toBe('u'); 
});
// Teste se as demais letras/números não são convertidos para cada caso;

// Teste se a string que é retornada pelas funções têm o mesmo número de 
// caracteres que a string passada como parâmetro.
test('Testa se encode e decode retornam uma string de mesmo tamanho a entrada', () => {
    expect(encode('aeiou').length).toBe('12345'.length); 
});