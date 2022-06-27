const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  people.sort((a,b) => a.age - b.age );
  console.log(people); // crescente
  people.sort((b,a) => a.age - b.age );
  console.log(people); // decrescente