const acordar = () => 'Acordando!';
// console.log(acordar());
const cafe = () => 'Bora tomar café!';
// console.log(cafe());
const mimir = () => 'Partiu dormir!';
// console.log(mimir());

const doingThings = (callback) => console.log(callback());
doingThings(acordar);
doingThings(cafe);
doingThings(mimir);