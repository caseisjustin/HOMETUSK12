function firstTub(arr){
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
    return res[0]
}

console.log(firstTub([1, 4, 9,12, 3, 7, 9, 11]))