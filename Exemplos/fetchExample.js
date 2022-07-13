// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();
// O codigo acima, nao foi tratado para resolver a assincronissidade do fetch portanto o esperado
// nao foi printado que era a piada 

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();
// O codigo acima, resolve a assincronissidae do fetch, mas se der algum problema na resposta da url
// temos um problema nao tratado no codigo, que iremos tratar em seguida
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'http://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported