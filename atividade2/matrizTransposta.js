function transporMatriz(A) {
    let transposta = [];

    let totalLinhas = A.length;
    let totalColunas = A[0].length;

    for (let j = 0; j < totalColunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < totalLinhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }
    console.log("matriz inicial:");
    console.table(A);

    console.log("matriz Transposta:");
    console.table(transposta);
}

let matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizA);