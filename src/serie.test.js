import serie from './serie';

test('Cálculo de la serie para los primeros 10 números naturales', () => {
    const resultadosEsperados = [
        8,    // Para n = 1
        20,   // Para n = 2
        33,   // Para n = 3
        51,   // Para n = 4
        67,   // Para n = 5
        93,   // Para n = 6
        116,  // Para n = 7
        147,  // Para n = 8
        172,  // Para n = 9
        188   // Para n = 10
    ];

    for (let n = 1; n <= 10; n++) {
        expect(serie.serie(n)).toBe(resultadosEsperados[n - 1]);
    }
});