const readline = require('readline');

// Cria uma interface para leitura de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se a letra é vogal ou consoante
function verificarLetra(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(letra.toLowerCase())) {
        return "A letra é uma vogal.";
    } else {
        return "A letra é uma consoante.";
    }
}

// Pergunta ao usuário para digitar uma letra
rl.question('Digite uma letra: ', (inputLetra) => {
    // Verifica se o input é uma única letra
    if (inputLetra.length === 1 && /^[a-zA-Z]$/.test(inputLetra)) {
        const resultado = verificarLetra(inputLetra);
        console.log(resultado);
    } else {
        console.log("Por favor, digite apenas uma letra.");
    }

    // Fecha a interface
    rl.close();
});