// Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (num) => { 
    let fat = num;
    while (num >= 2) {
        num -= 1;
        fat *= num;
    }
    console.log(fat);
}
// fatorial(5);
const recursiveFat = num => num > 1 ?  num * recursiveFat(num - 1) :  1;

console.log(recursiveFat(5));