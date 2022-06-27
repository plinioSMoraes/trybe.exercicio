// Exemplo 1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((arrName) => arrName === name )
}

// console.log(hasName(names, 'José'))
//Exemplo 2
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((index) => index.age >= minimumAge );
  }
  
  console.log(verifyAges(people, 15));