/*____---=====BONUS====---____*/

// 1 TUB SONlar

function tubChecker(arr){
    let res = []
    for(let j = 0; j<arr.length; j++){
        let c = true
        for(let i = 2; i<arr[j]; i++){
            if(arr[j] % i == 0){
                c = false
            }
        }
        if(c && arr[j]!=1){
            res.push(arr[j])
        }
    };
    return res
}

console.log("Tub son", tubChecker([1, 2, 3]), "\n\n")











// 2

function multiply(ar){
    function muli(n){
        let temp = []
        for (const i in ar)
            temp.push(ar[i]*n)
        return temp
    }
    return muli
}

console.log(multiply([4, 6, 5])(10), "\n\n")







// 3

function missingNum(st){
    st = st.toString()
    st = st.split(",")
    st = st.sort()
    let min = Math.min(...st)
    let max = Math.max(...st)
    for(let i = min; i < max; i++)
        if(st[i]!=i)
            return i
}
console.log(missingNum([9,6,4,2,3,5,7,0,1]))