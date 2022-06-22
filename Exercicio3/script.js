const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightShift = (lesson2) => {
  lesson2.turno = 'noite'
}
nightShift(lesson2);

const showKeys = (object) => {
  console.log(Object.keys(object));
}
// showKeys(lesson3);

const objectSize = (object) => {
    console.log(Object.keys(object).length);
}
// objectSize(lesson2);

const showValues = (object) => {
    console.log(Object.values(object));
}
// showValues(lesson2);

const allLessons = () => {
  const lessons = Object.assign({}, {lesson1, lesson2, lesson3});
  return lessons;
}
allLessons();

// Usando o objeto criado no exercício 5, crie uma função que 
// retorne o número total de estudantes em todas as aulas.
const studentsNum = (lessons) => {
  let objSize = Object.keys(lessons).length;
  let numeroEstudantes = 0;
  let keyArr = Object.keys(lessons); 
  for (let index = 0; index < objSize; index += 1) {
    numeroEstudantes += lessons[keyArr[index]].numeroEstudantes;
  }
  console.log(numeroEstudantes);
}
// studentsNum(allLessons());

// Crie uma função que obtenha o valor da chave de 
// acordo com a sua posição no objeto. Por exemplo:

const getObjKey = (obj, key) => {
  let objKeys = Object.keys(obj);
  return objKeys[key];
}
// console.log(getObjKey(lesson1, 2));

// Crie uma função que verifique se o par (chave / valor) existe na
//  função. Essa função deve possuir três parâmetros, sendo eles: o objeto,
//   o nome da chave e o valor da chave. Exemplo:

const checkEntries = (obj, key, value) => {
  let objEntries = Object.entries(obj);
//   console.log(objEntries.length);
  for (let index = 0; index < objEntries.length; index += 1) {
    let objKey = objEntries[index][0];
    let objValue = objEntries[index][1];
    if (objEntries[index][0] === key && objEntries[index][1] === value ) {
        return console.log("A [chave/valor] estao presente no objeto passado")
    }
  }
  console.log("A [chave/valor] nao estao presente no objeto passado");
}
checkEntries(lesson3, 'materia', 'Maria Clara')