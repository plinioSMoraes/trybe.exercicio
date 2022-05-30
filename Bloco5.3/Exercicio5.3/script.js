function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

//Exercicio 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
    15, 16, 17, 18, 19, 20, 21, 22, 23, 
    24, 25, 26, 27, 28, 29, 30, 31];  
  const daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dayListItem = document.createElement('li');
    dayListItem.className = 'day';
    dayListItem.innerText = dezDaysList[index];
    if(dezDaysList[index] == 24
      || dezDaysList[index] == 25
      || dezDaysList[index] == 31){
      dayListItem.classList.add('holiday');
    }
    if (dezDaysList[index] == 4
      || dezDaysList[index] == 11
      || dezDaysList[index] == 18
      || dezDaysList[index] == 25) {
        dayListItem.classList.add('friday');
    }


    daysList.appendChild(dayListItem);
  }
}
createDaysOfTheMonth();

//Exercicio 2
function createButton(Feriados){
  let divTag = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = Feriados;
  button.id = 'btn-holiday';
  divTag.appendChild(button);
}
createButton('Feriados');

//Exercicio 3
function buttonChangeColorFeriados(){
  let button = document.querySelector('#btn-holiday'); // pega o botao
  let holidays = document.querySelectorAll('.holiday'); // pega os feriados
  let bgColor = 'red'; // seta uma cor pra variavel
  let initialConfig = holidays[0].style.backgroundColor; // guarda a cor original dos botoes
  button.addEventListener('click', function() { // funçao dentro do eventlistener
      for (let index = 0; index < holidays.length; index += 1) { // percorre todos feriados
        if (holidays[index].style.backgroundColor === initialConfig) { // ve se a cor é a original
          holidays[index].style.backgroundColor = 'red'; // se for troca
        } else {
          holidays[index].style.backgroundColor = initialConfig; // senao for seta a original
        }
      }
    }
  )
}

buttonChangeColorFeriados();

//Exercicio 4
function fridayButton(string){ // funçao para criar o botao sexta-feiras
  let button = document.createElement('button'); // cria o elemento button
  let buttonsContainer = document.querySelector('.buttons-container'); // pega o container de botao
  button.id = 'btn-friday'; // adiciona a id btn friday para o elemento button
  button.innerHTML = string; // adiciona um texto interno ao botao
  buttonsContainer.appendChild(button); // adiciona o nodo como filho da div buttons container
}
fridayButton("Sexta-feira") // chama a funcao
