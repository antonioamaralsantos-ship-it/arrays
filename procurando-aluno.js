const alunos = ["João", "Maria", "José", "Ana"];
const medias = [7.5, 8.0, 6.0, 9.0];

const listaDeAlunosEMedias = [alunos, medias];

function exibieNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado`);

const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const media = listaDeAlunosEMedias[1][indice];
        console.log(`A média de ${aluno} é ${media}`);


    } else {
        console.log("O aluno não foi encontrado!");
    }
}
exibieNomeENota("João");