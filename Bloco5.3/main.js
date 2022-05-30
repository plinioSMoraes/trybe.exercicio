const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const firstLiText = firstLi.innerText;
const secondLiText = secondLi.innerText;
const thirdLiText = thirdLi.innerText;

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Porque na classe firstLi, tem uma outra class chamada .tech que translada a caixa para cima

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


function addClassTech(originEvent) {
  const allList = document.querySelector('.tech'); // pega todos elementos com tech
  allList.classList.remove('tech');
  originEvent.target.classList.add('tech');
  input.value = ''; // zera a caixa de texto
}
firstLi.addEventListener("click", addClassTech);
secondLi.addEventListener("click", addClassTech);
thirdLi.addEventListener("click", addClassTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addTextToBox(originEvent) {
  const allList = document.querySelector('.tech');
  allList.innerText = originEvent.target.value;

}
input.addEventListener('input', addTextToBox);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function redirectDlClick(originEvent){
  window.location.replace('https://blog.betrybe.com/'); // abre a pagina trybe ao clicar duas vezes
//originEvent.target.innerHTML = "<a href='https://codepen.io/johnatas-henrique/pen/jOEQQvZ'target='_blank'>link text</a>" // troca o texto por um link que redireciona para outra pagina
}

myWebpage.addEventListener('dblclick', redirectDlClick);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColorMyWebPage(originEvent) {
  originEvent.target.style.color = 'purple';
}

function returnOriginalColorMyWebPage(originEvent) {
  originEvent.target.style.color = 'white';
}
myWebpage.addEventListener('mouseover', changeColorMyWebPage); // trocar a cor do texto pra roxo
myWebpage.addEventListener('mouseleave', returnOriginalColorMyWebPage); // troco a cor do texto por branco

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  if (event.target === firstLi) {
    event.target.innerText = firstLiText;
  }
  if (event.target === secondLi) {
    event.target.innerText = secondLiText;
  }
  if (event.target === thirdLi) {
    event.target.innerText = thirdLiText;
  }
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.