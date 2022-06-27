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