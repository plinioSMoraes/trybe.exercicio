// Exercicio 1 -------------------------------------------------------------------
// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// A execução é sincrona, ou seja, cada função sera executa uma apos a outra, sendo A, B e C a ordem de execução

// Exercicio 2 ---------------------------------------------------------
// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// Graças a função setTimeOut, agora temos ações assincronas no código
// Vendo o tempo de execução nas funçoes timeOut, vemos que C vem antes de B, já que 
// C tem 2s de atraso e B tem 3s de atraso, mas como sao assincronas, todas as outras
// funçoes irao rodas antes delas, depois vem a C e por fim a B, entao
// temos que a ordem de execução desse bloco de código é A, C e B

// Exercicio 3 -------------------------------------------------------------------
// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet,
// de forma que Marte seja impresso assincronamente, depois de 4 segundos.

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     console.log("Returned planet: ", mars);
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos
//   setTimeout(getPlanet, 4000); // Após 4 segundos, a essa linha será executada

// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity ----------------------------------------
// de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual 
//em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
// Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (messageDelay, getMarsTemperature) => {
//     setTimeout(console.log(getMarsTemperature()), messageDelay());
// };
// sendMarsTemperature(messageDelay, getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// 5 - Agora que você fez a função que envia a temperatura de Marte, ----------------------------------------------------
// suponha que você consiga enviar para o robô Curiosity o que você deseja 
// fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione
//  na função sendMarsTemperature uma callback que contenha as ações a 
//  serem tomadas em cima da temperatura.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback) => {
//   const temperature = getMarsTemperature();
//   setTimeout(() => callback(temperature), messageDelay());
// };
// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// 6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 
// 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo
// , adicione na função sendMarsTemperature um outro callback que contenha as 
// ações a serem tomadas em caso de falha.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (messageDisplay, errorMessage) => {
//   const temperature = getMarsTemperature();
//   const chance = Math.random() <= 0.6;
//   setTimeout(() => {
//     if (chance){
//       messageDisplay(temperature);
//     } else {
//       errorMessage('Robot is Buzy');
//     }
//   }, messageDelay());
// }
// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// 7 - Escreva um teste que verifique a chamada da callback de uma função 
// uppercase, que transforma as letras de uma palavra em letras maiúsculas. 
// Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//     expect(callback(str.toUpperCase())).toBe(true);

//   }, 500);
// };

// it('Testando asyncSum, soma 5 mais 10', (done) => {
//   uppercase('test', (str) => {
//     try {
//       expect(str).toBe('TEST');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// 8 - Para o próximo exercício, você vai sentir na pele o
// primeiro dia de um treinador Pokémon! No laboratório do 
// Professor Carvalho, você é informado de que existem três
// pokémons disponíveis: Bulbasaur, Charmander e Squirtle. 
// Complete a chamada da função getPokemonDetails de modo    
// ela retorne os detalhes do pokémon que você escolheu. PS:
// é possível que o sistema do Professor Carvalho 
// erros, então não se esqueça de tratá-los também, combinado?

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails( // Sao passadas duas funçoes um filtro e um callback de erro
(pokemon) => pokemon.name === 'Bulbasaur', // Essa funçao retorna true se o pokemon existe no array acima
(error, message) => { // funçao callback de error, se nao existir erro (erro e nulo) printa a mensagem do
  if (error){ // pokemon que foi achado 
    console.log(error);
  } else {
    console.log(message);
  }
});
module.exports = {
  getPokemonDetails,
};

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, 
// o Professor Carvalho pediu que você o ajude a escrever testes 
// para o sistema que distribui os pokémons. Crie um novo arquivo
// .test.js ou .spec.js e copie o código abaixo. Complete os testes
// para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
