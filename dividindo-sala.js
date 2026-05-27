const alunos = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Carla', 'Rafael', 'Sofia', 'Gustavo', 'Beatriz', 'Felipe', 'Camila', 'Bruno', 'Larissa', 'Ricardo', 'Fernanda', 'Diego', 'Juliana', 'Matheus', 'Amanda', 'Thiago', 'Mariana', 'Vitor', 'Isabela', 'Leonardo', 'Gabriela', 'André', 'Larissa', 'Rafael', 'Sofia', 'Gustavo', 'Beatriz', 'Felipe', 'Camila', 'Bruno', 'Larissa', 'Ricardo', 'Fernanda', 'Diego', 'Juliana', 'Matheus', 'Amanda', 'Thiago', 'Mariana', 'Vitor', 'Isabela', 'Leonardo', 'Gabriela', 'André', 'Larissa', 'Rafael', 'Sofia', 'Gustavo', 'Beatriz', 'Felipe', 'Camila', 'Bruno', 'Larissa', 'Ricardo', 'Fernanda', 'Diego', 'Juliana', 'Matheus', 'Amanda', 'Thiago', 'Mariana', 'Vitor', 'Isabela', 'Leonardo', 'Gabriela', 'Cristopher'];
alunos.slice(0, 50); // Mantém apenas os primeiros 50 alunos
console.log(alunos);

const sala1 = alunos.slice(0, alunos.length / 2); // Cria a sala 1 com os primeiros 25 alunos
const sala2 = alunos.slice(alunos.length / 2); // Cria a sala 2 com os alunos restantes

console.log('Sala 1:', sala1);
console.log('Sala 2:', sala2);