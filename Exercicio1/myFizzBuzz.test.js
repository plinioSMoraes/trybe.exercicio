const myFizzBuzz = require('./myFizzBuzz.js');
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
test('Verificar se um multiplo de 3 e 5 retorna fizzBuzz', () => {
    expect(myFizzBuzz(30)).toEqual('fizzbuzz'); 
});
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
test('Verificar se um multiplo de 3 retorna fizz', () => {
    expect(myFizzBuzz(6)).toEqual('fizz'); 
});
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o 
test('Verificar se um multiplo de 5 retorna fizz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz'); 
});
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
test('Verificar se um multiplo de 3 e 5 retorna o ', () => {
    expect(myFizzBuzz(29)).toEqual(29); 
});
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
test('Verificar se um caractere retorna false ', () => {
    expect(myFizzBuzz('a')).toBeFalsy(); 
});