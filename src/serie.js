class serie {
    // Método para calcular el n-ésimo número primo.
    static primo(n) {
        let count = 0;
        let num = 2;
        while (count < n) {
            if (serie.esPrimo(num)) {
                count++;
            }
            num++;
        }
        return num - 1;
    }

    static esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Método para calcular el n-ésimo número de Fibonacci.
    static fibonacci(n) {
        if (n <= 1) return n;
        let a = 0, b = 1, temp;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    // Método para calcular el (n+1)-ésimo número triangular.
    static triangular(n) {
        return (n * (n + 1)) / 2;
    }

    // Método para calcular el término n de la serie
    static serie(n) {
        const primoN = this.primo(n);
        const fibonacciN = this.fibonacci(n);
        const triangularN = this.triangular(n + 1);
        return -3 * primoN - fibonacciN + 5 * triangularN;
    }
}

export default serie;
