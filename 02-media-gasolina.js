const readline = require('readline');

// Cria uma interface para leitura de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular a média de consumo
function calcularConsumo(kmInicial, kmFinal, litrosGastos) {
    const distancia = kmFinal - kmInicial;
    return distancia / litrosGastos;
}

// Pergunta o KM inicial
rl.question('Digite o KM inicial (ex. 12500 km): ', (inputKmInicial) => {
    const kmInicial = parseFloat(inputKmInicial);

    // Verifica se o KM inicial é válido
    if (isNaN(kmInicial) || kmInicial < 0) {
        console.log("Por favor, insira um KM inicial válido.");
        rl.close();
        return;
    }

    // Pergunta o KM final
    rl.question('Digite o KM final (ex. 12700 km): ', (inputKmFinal) => {
        const kmFinal = parseFloat(inputKmFinal);

        // Verifica se o KM final é válido
        if (isNaN(kmFinal) || kmFinal <= kmInicial) {
            console.log("Por favor, insira um KM final válido que seja maior que o KM inicial.");
            rl.close();
            return;
        }

        // Pergunta quantos litros foram gastos
        rl.question('Digite quantos litros foram gastos no percurso: ', (inputLitros) => {
            const litrosGastos = parseFloat(inputLitros);

            // Verifica se a quantidade de litros é válida
            if (isNaN(litrosGastos) || litrosGastos <= 0) {
                console.log("Por favor, insira uma quantidade válida de litros.");
                rl.close();
                return;
            }

            // Calcula a média de consumo
            const consumo = calcularConsumo(kmInicial, kmFinal, litrosGastos);
            console.log(`A média de consumo do veículo é de ${consumo.toFixed(2)} km/l.`);

            // Fecha a interface
            rl.close();
        });
    });
});