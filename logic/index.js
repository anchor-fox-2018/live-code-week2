/*
    PERKALIAN MATRIKS
    ================
*/
function checkCol1Row2(matriks1, matriks2){
    if(matriks1[0].length === matriks2.length){
        return true;
    } else {
        return false
    }
    
}

function checkColSame(matriks){
    let check1 = true;
    let i = 0;
    while(check1 == true && i < matriks1.length-1){
        if(matriks1[i].length !== matriks1[i+1].length){
            check1 = false
            return false
        }
        i++
    }
    return check1
}


function matriksMultiply(matriks1,matriks2){
    //check if matriks1 col is same as matriks2 row
    if(checkCol1Row2(matriks1, matriks2) === false){
        console.log(`Jumlah kolom pada matriks pertama tidak sama dengan jumlah  baris pada matriks ke dua`)
    } else if(checkColSame(matriks1) == false || checkColSame(matriks2) == false) {
        console.log('jumlah kolom pada matriks ada yang tidak sama')
    } else {
        let result = []
        let baris1 = matriks1.length;
        let col2 = matriks2[0].length;
        for(let i = 0; i < baris1; i++){
            let col = []
            for(let j = 0; j < col2; j++){
                for(let k = 0; k < matriks1[i].length; k++){
                    for(let l = 0; l < matriks2.length; l++){
                        let elemen = 0;
                        for(let m = 0; m < matriks2[l].length; m++){
                            console.log(m);
                            // elemen += matriks1[k][m] * matriks2[m][k]
                        }
                        col.push(elemen)
                    }
                }
            }
            result.push(col)
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
// console.log(canMultiply(matriks1, matriks2));

console.log(matriks1,matriks2)

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

console.log(matriksMultiply(matriks5,matriks6))

/* 
   [ 
    [ 7, 10 ], 
    [ 15, 22 ]  
   ]
*/