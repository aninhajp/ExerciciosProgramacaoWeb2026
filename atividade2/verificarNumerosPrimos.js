function verificarNumerosPrimos(numero) {
    let validarNumero;
    if (numero <= 1) {
        return false;
    }
    if (numero === 2) {
        return true;
    }
    if (numero % 2 === 0) {
        validarNumero = false;
    } else {
        validarNumero = true;
    }
    return validarNumero;
}

function imprimirNumero(n) {
    let resultado = verificarNumerosPrimos(n);
    console.log(resultado);
}

imprimirNumero(0);
imprimirNumero(1);
imprimirNumero(2);
imprimirNumero(3);
imprimirNumero(7);
imprimirNumero(83);
imprimirNumero(100);
imprimirNumero(991);
imprimirNumero(104729);
imprimirNumero(14348907);