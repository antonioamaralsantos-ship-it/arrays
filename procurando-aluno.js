const alunos = ["João", "Maria", "José", "Ana"];
const medias = [7.5, 8.0, 6.0, 9.0];

const listaDeAlunosEMedias = [alunos, medias];

function exibieNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
    
        const alunos = listaDeAlunosEMedias[0];
        const media = listaDeAlunosEMedias[1];

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);



    } else {
        console.log("O aluno não foi encontrado!");
    }
}
exibieNomeENota("Ana");