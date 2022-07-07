// Testes Assincronos
//Exemplo 1
// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//         try {
//             expect(10).toBe(5);
//             console.log('Deveria falhar!');
//             done();
//           } catch (error) {
//             done(error);// Adiciona para que o programe nao bugue e o teste passe, graças a assincronissidade do programas
//           }
//     }, 500);
//   });
// Nesse teste, para testar a funcao callback, foi necessario pegar o erro gerado com try/catch e passar um parametro para a funcao done
// Caso contrario, será gerado um falso-positivo

// Exemplo 2

const asyncSum = (a, b, callback) => {
    setTimeout(() => {
        const result = a + b;
        callback(result);
    }, 500);
};
  
test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
        try {
        expect(result).toBe(15);
        done();
        } catch (error) {
        done(error);
        }
    });
});