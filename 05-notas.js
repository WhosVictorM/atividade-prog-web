const readline = require('readline');

// Cria uma interface para leitura de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular a média e determinar a situação do aluno
function calcularSituacao(nota1, nota2) {
    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 4) {
        return "Prova Final";
    } else {
        return "Reprovado";
    }
}

// Pergunta a primeira nota
rl.question('Digite a primeira nota: ', (inputNota1) => {
    const nota1 = parseFloat(inputNota1);

    // Verifica se a primeira nota é válida
    if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
        console.log("Por favor, insira uma nota válida entre 0 e 10.");
        rl.close();
        return;
    }

    // Pergunta a segunda nota
    rl.question('Digite a segunda nota: ', (inputNota2) => {
        const nota2 = parseFloat(inputNota2);

        // Verifica se a segunda nota é válida
        if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
            console.log("Por favor, insira uma nota válida entre 0 e 10.");
            rl.close();
            return;
        }

        // Calcula a situação do aluno
        const situacao = calcularSituacao(nota1, nota2);
        console.log(`Situação do aluno: ${situacao}`);

        // Fecha a interface
        rl.close();
    });
});