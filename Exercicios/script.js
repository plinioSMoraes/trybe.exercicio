//Exercicio 1
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

//Exercicio 2
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

// Exercicio 3
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
// console.log(questionCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, answerCheck));

//Bonus - 1
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const battleMembers = { mage, warrior, dragon };
// console.log(battleMembers.dragon.strength)
const dmg = (strength, intelligence) => {
    if (intelligence === ''){
      return Math.round(Math.random() * (strength - 15) + 15);
    }
    if (strength === '') {
      return Math.round(Math.random() * (intelligence*2 - intelligence) + intelligence);
    }
}
const dragonDmg = (battleMembers, callback) => {
    dragon.damage = callback(battleMembers.dragon.strength);
    return `The mighty dragon hit you for ${dragon.damage} points of health!!`;
}
// console.log(dragonDmg(battleMembers, dmg));
const warriorDmg = (battleMembers, callback) => {
    warrior.damage = callback(battleMembers.warrior.strength);
    return `The mighty Warrior hit you for ${warrior.damage} points of health!`;
}
// console.log(warriorDmg(battleMembers, dmg));

const mageMove = (battleMembers, callback) => {
    const mageStats = {
        dano: battleMembers.mage.damage,
        mana: battleMembers.mage.mana,
    }
    mageStats.dano = callback('',battleMembers.mage.intelligence);
    
    if (mageStats.mana < 15) {
      mageStats.dano = 'Not enough mana!';
    } else {
      mageStats.dano = callback('',battleMembers.mage.intelligence);
      mageStats.mana -= 15;
    }
    return mageStats;
}
console.log(mageMove(battleMembers, dmg));

// Bonus 2
const gameActions = {
    warriorAction: (callback, battleMembers) => {
        battleMembers.warrior.damage = callback(battleMembers.warrior.strength, '');
        battleMembers.dragon.healthPoints -= battleMembers.warrior.damage;
    },
};
