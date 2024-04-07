// 1chi yechim

function multiply(n, n2){
    let sum = 0
    for(let i = 0; i<n2; i++){
        for(let j = i; j< n; j++){
            sum += n2
        }
    }
    sum -= n2
    return sum
}

let n = 2
let n2 = 8
console.log(multiply(n, n2))











