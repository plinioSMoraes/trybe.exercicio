const { getPokemonDetails } = require('./Exercicios/script');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados',
   (done) => {
    const returnedError = new Error( 'Não temos esse pokémon para você :(');
    
    const callback = (error, result) => {
        expect(error).toEqual(returnedError)
        done();
    }
    getPokemonDetails((pokemon) => pokemon.name = 'DAda', callback);
});

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const returnedMessage = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`;
       
    const callback = (error, result) => {
        expect(result).toEqual(returnedMessage);
        done();
    } 
    getPokemonDetails((pokemon) => pokemon.name = 'Squirtle', callback);
  });
});