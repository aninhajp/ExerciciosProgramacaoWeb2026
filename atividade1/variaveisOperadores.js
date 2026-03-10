let num1 = 6;
let num2 = 3;
let res = num1 + num2;

imprimrirConsoleMatematica('Soma', num1, num2, res);

let num3 = 9;
let num4 = 5;
let resu = num3 - num4;

imprimrirConsoleMatematica('Subtração', num3, num4, resu);

let num5 = 4;
let num6 = 7;
let resul = num5 * num6;

imprimrirConsoleMatematica('Multiplicação', num5, num6, resul);

let num7 = 8;
let num8 = 2;
let result = num7 / num8;

imprimrirConsoleMatematica('Divisão', num7, num8, result);

function imprimrirConsoleMatematica(Nome, param1, param2, resultado){
    console.log(`A ${Nome} entre ${param1} e ${param2} é: ${resultado}`);
}
