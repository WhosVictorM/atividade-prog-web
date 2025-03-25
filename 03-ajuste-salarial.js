const readline = require('readline');

// Cria uma interface para leitura de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o novo salário
function calcularNovoSalario(salarioAtual, percentualReajuste) {
    const aumento = salarioAtual * (percentualReajuste / 100);
    return salarioAtual + aumento;
}

// Pergunta o salário atual
rl.question('Digite o salário atual (ex. 1250,00): ', (inputSalario) => {
    const salarioAtual = parseFloat(inputSalario.replace(',', '.'));

    // Verifica se o salário atual é válido
    if (isNaN(salarioAtual) || salarioAtual < 0) {
        console.log("Por favor, insira um salário válido.");
        rl.close();
        return;
    }

    // Pergunta o percentual de reajuste
    rl.question('Digite o percentual de reajuste (ex. 13,5): ', (inputPercentual) => {
        const percentualReajuste = parseFloat(inputPercentual.replace(',', '.'));

        // Verifica se o percentual de reajuste é válido
        if (isNaN(percentualReajuste) || percentualReajuste < 0) {
            console.log("Por favor, insira um percentual de reajuste válido.");
            rl.close();
            return;
        }

        // Calcula o novo salário
        const novoSalario = calcularNovoSalario(salarioAtual, percentualReajuste);
        console.log(`O novo salário é R$ ${novoSalario.toFixed(2).replace('.', ',')}.`);

        // Fecha a interface
        rl.close();
    });
});