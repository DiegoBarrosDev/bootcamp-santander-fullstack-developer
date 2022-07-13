function alunosAprovados (alunos, media) {
    let aprovados = [];
    
    for (let i = 0; i < alunos.length; i++) {
        
        const {nota, nome} = alunos[i];
        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}


const alunos = [
    {
        nome: 'João',
        nota: 10,
        turma: '1A'
    },
    {
        nome: 'Sofia',
        nota: 7,
        turma: '1A'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '1B'
    }
]


console.log(alunosAprovados(alunos, 7))