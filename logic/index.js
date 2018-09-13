/*
    PERKALIAN MATRIKS
    ================
*/

function matriksMultiply(matriks1,matriks2){
    // your code here 

    //error handling
    if (matriks1.length !== matriks2[0].length) {
        return "Jumlah kolom pada matriks pertama tidak sama dengan jumlah baris pada matriks ke dua."
    }


    
    else {
        let result = [];
        //matriks1 down
        for (let i = 0; i < matriks1.length; i++) {
            let eachRow = [];
            // each iteration
            for (let c = 0; c < matriks2[0].length; c++) {
                let tempResult = 0;
                for (let n = 0; n < matriks1[i].length; n++) {
                        tempResult += matriks1[i][n] * matriks2[n][c];
                        console.log(`${matriks1[i][n]} x ${matriks2[i][c]} = ${matriks1[i][n] * matriks2[i][c]}`);
                }
                eachRow.push(tempResult);
            }
            result.push(eachRow);
        }
        return result;
    }
}

/* 
    testcase 1
    ========== 
*/

let matriks1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let matriks2 = [
    [6,5],
    [3,4],
    [2,1]
]

// console.log(matriksMultiply(matriks1,matriks2));

/* 
    testcase 2
    ========== 
*/

let matriks3 = [
    [1,2,3,4],
    [5,6,7,8],
   
]

let matriks4 = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]

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
    [1,2],
    [3,4],
   
]

let matriks6 = [
    [1,2],
    [3,4],
    
]

console.log(matriksMultiply(matriks5,matriks6))

/* 
   [ 
    [ 7, 10 ], 
    [ 15, 22 ]  
   ]
*/