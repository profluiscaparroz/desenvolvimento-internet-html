function calcularRaizQuadrada(x) {
    let a = 2; // Chute inicial
    const epsilon = 0.00001; // Tolerância para o quão próximo o resultado deve ser
    let novoChute;

    console.log(`Calculando a raiz quadrada de ${x}...`);

    // Loop até que o quadrado do chute esteja "perto o suficiente" de x
    // Math.abs() é o equivalente a fabs() em C
    while (Math.abs(a * a - x) > epsilon) {
        novoChute = (a + x / a) / 2.0; // Calcula o novo chute
        console.log(`Novo chute: ${novoChute.toFixed(5)}`); // toFixed(5) para formatar com 5 casas decimais
        a = novoChute; // Atualiza o chute
    }

    // Exibe o resultado
    console.log(`\nA raiz quadrada aproximada de ${x.toFixed(2)} é ${a.toFixed(5)}`);
    return a; // Retorna o valor calculado
}

// --- Testando a função ---
const valorParaRaiz = 25; // O valor para o qual queremos a raiz quadrada
calcularRaizQuadrada(valorParaRaiz);

console.log("\n--- Outro exemplo ---");
calcularRaizQuadrada(121); // Raiz quadrada de 121 é 11