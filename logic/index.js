/*
    PERKALIAN MATRIKS
    ================
*/

function matriksMultiply(a, b) {
    // your code here 
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
        console.log("Bukan 2-dimensional");
        //break;
    }

    let x = a.length,
        z = a[0].length,
        y = b[0].length;

    if (b.length !== z) {
        console.log("ukuran kolom matrix a tidak sama dengan baris matrix b");
        //break;
    }

    let resultRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let result = new Array(x);
    for (let p = 0; p < x; p++) {
        result[p] = resultRow.slice();
    }
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            for (let k = 0; k < z; k++) {
                result[i][j] = result[i][j] + a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

/* 
    testcase 1
    ========== 
*/

let matriks1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matriks2 = [
    [6, 5],
    [3, 4],
    [2, 1]
]

console.log(matriks1, matriks2)
console.log(matriksMultiply(matriks1,matriks2))

/*
   [
    [(1*6)+(2*3)+(3*2), (1*5)+(2*4)+(3*1)], 
    [(4*6)+(5*3)+(6*2), (4*5)+(5*4)+(6*1)],
    [(7*6)+(8*3)+(9*2), (7*5)+(8*4)+(9*1)]
   ]

   [
    [18,16],
    [51,46],
    [84,76]
   ]
*/


/* 
    testcase 2
    ========== 
*/

let matriks3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],

]

let matriks4 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]

console.log(matriksMultiply(matriks3, matriks4))
console.log(matriksMultiply(matriks3,matriks4))
/*
    [ 
      [ 50, 60 ], 
      [ 114, 140 ] 
    ]
*/

/* 
    testcase 3
    ========== 
*/

let matriks5 = [
    [1, 2],
    [3, 4],

]

let matriks6 = [
    [1, 2],
    [3, 4],

]

console.log(matriksMultiply(matriks5, matriks6))
console.log(matriksMultiply(matriks5,matriks6))

/* 
   [ 
    [ 7, 10 ], 
    [ 15, 22 ]  
   ]
*/