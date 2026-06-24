const notas = [7, 8, 6, 9];

notas.pop(); // remove a última nota errada
notas.push(10); // adiciona a nota correta

const soma = notas[0] + notas[1] + notas[2];
const media = soma / notas.length;

console.log('notas:', notas);
console.log('média:', media);