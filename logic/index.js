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
        for (let i = 0; i < matriks1.length; i++) {

        }
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

console.log(matriksMultiply(matriks1,matriks2));

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

// console.log(matriksMultiply(matriks5,matriks6))

/* 
   [ 
    [ 7, 10 ], 
    [ 15, 22 ]  
   ]
*/