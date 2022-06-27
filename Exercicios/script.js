const newEmployees = (callback) => {
    const employees = {
      id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const employe = (nome) => { 
    const employe = {
        email: `${nome}@trybe.com`
    };
    return employe;
 };

// console.log(newEmployees(employe));

const generateNum = () => {
    return Math.round(Math.random() * (5 - 1) + 1);
}

const checkTicket = (ticket, callback) => {
    // if (ticket === callback()) {
    //     console.log('Parabéns voce ganhou');
    // } else {
    //     console.log('Tente novamente');
    // }
    return ticket === callback() ? "Parabéns voce ganhou!" : "Tente novamente";
}

// console.log(checkTicket(4, generateNum));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const questionCheck = (rightAns, studAns, callback) => {
    const evaluation = callback(rightAns, studAns);
    return evaluation;
}

const answerCheck = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    let evaluation = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        if (STUDENT_ANSWERS[index] !== "N.A") {
            if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
                evaluation += 1;
            } else {
                evaluation -= 0.5;
            }
        } 
    }
    return evaluation
}
console.log(questionCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, answerCheck));