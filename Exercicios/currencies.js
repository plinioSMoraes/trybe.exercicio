
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const getBrCoin = async () => {
  const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';
  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.USDBRL.high)
    .catch((err) => console.log(`Error: ${err}`))
  return coins;
}

const setCoins = async (brCoin) => {
  const coins = await fetchCoins();
  const coinsList = document.getElementById('coins-list');
  const dolToBr = await getBrCoin();

  coins
  .filter((coin) => (coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);
    const brPrice = usdPrice * dolToBr;

    newLi.innerText = `${coin.name} (${coin.symbol}): ${brPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}
// https://economia.awesomeapi.com.br/json/last/:moedas


window.onload = () => setCoins(getBrCoin());