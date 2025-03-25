const readline = require('readline');

// Cria uma interface para leitura de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular os litros de combustível
function calcularLitros(valorLitro, valorAbastecer) {
    return valorAbastecer / valorLitro;
}

// Pergunta o valor do litro de combustível
rl.question('Digite o valor do litro de combustível (ex. 4.75): ', (inputLitro) => {
    const valorLitro = parseFloat(inputLitro.replace(',', '.'));

    // Verifica se o valor do litro é válido
    if (isNaN(valorLitro) || valorLitro <= 0) {
        console.log("Por favor, insira um valor válido para o litro de combustível.");
        rl.close();
        return;
    }

    // Pergunta quanto em dinheiro o usuário deseja abastecer
    rl.question('Digite quanto em dinheiro você deseja abastecer (ex. 50.00): ', (inputAbastecer) => {
        const valorAbastecer = parseFloat(inputAbastecer.replace(',', '.'));

        // Verifica se o valor a ser abastecido é válido
        if (isNaN(valorAbastecer) || valorAbastecer <= 0) {
            console.log("Por favor, insira um valor válido para o abastecimento.");
            rl.close();
            return;
        }

        // Calcula quantos litros de combustível o usuário obterá
        const litros = calcularLitros(valorLitro, valorAbastecer);
        console.log(`Você obterá ${litros.toFixed(2)} litros de combustível.`);

        // Fecha a interface
        rl.close();
    });
});